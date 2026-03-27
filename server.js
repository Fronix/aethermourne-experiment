import { createServer } from "node:http"
import { readFile, stat, readdir } from "node:fs/promises"
import { join, extname } from "node:path"
import { URL } from "node:url"
import { existsSync } from "node:fs"

const PORT = parseInt(process.env.PORT || "3777", 10)
const INGEST_TOKEN = process.env.AMP_INGEST_TOKEN || ""
const PUBLIC_DIR = join(import.meta.dirname, "public")
const WORLDS_DIR = join(import.meta.dirname, "worlds")
const DATA_DIR = join(import.meta.dirname, "data")
const MAX_MESSAGES = 500

// ── World Discovery ─────────────────────────────────────────────────
// Discover available worlds by scanning worlds/ directory
const availableWorlds = []
try {
  if (existsSync(WORLDS_DIR)) {
    const entries = await readdir(WORLDS_DIR, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const configPath = join(WORLDS_DIR, entry.name, "world.config.json")
        if (existsSync(configPath)) {
          const configContent = await readFile(configPath, "utf-8")
          const config = JSON.parse(configContent)
          availableWorlds.push({ slug: entry.name, config })
          console.log(`Discovered world: ${config.name} (/${entry.name}/)`)
        }
      }
    }
  }
} catch (err) {
  console.warn("World discovery failed:", err.message)
}

if (availableWorlds.length === 0) {
  console.warn("No worlds discovered. Multi-world serving disabled.")
}

// ── State ───────────────────────────────────────────────────────────
const messages = []
const sseClients = new Set()
let lastIngestAt = null
let lastHeartbeatAt = null

// ── Helpers ─────────────────────────────────────────────────────────
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml; charset=utf-8",
  ".webp": "image/webp",
  ".webmanifest": "application/manifest+json",
  ".map": "application/octet-stream",
  ".gz": "application/gzip",
}

function friendlyName(address) {
  if (!address) return "unknown"
  const match = address.match(/^([^@]+)@/)
  return match ? match[1] : address
}

function parseAmpMessage(raw) {
  const env = raw.envelope || {}
  const pay = raw.payload || {}
  return {
    id: env.id,
    from: env.from,
    fromName: friendlyName(env.from),
    to: env.to,
    toName: friendlyName(env.to),
    subject: env.subject,
    priority: env.priority,
    timestamp: env.timestamp,
    type: pay.type,
    message: pay.message,
    context: pay.context || null,
    threadId: env.thread_id,
    inReplyTo: env.in_reply_to,
  }
}

function broadcast(event, data) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
  for (const res of sseClients) {
    try {
      res.write(payload)
    } catch {
      sseClients.delete(res)
    }
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on("data", (chunk) => {
      size += chunk.length
      if (size > 1_000_000) {
        reject(new Error("Body too large"))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")))
    req.on("error", reject)
  })
}

function json(res, status, data) {
  const body = JSON.stringify(data)
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  })
  res.end(body)
}

// ── Static file serving ─────────────────────────────────────────────
async function tryFile(filePath) {
  try {
    const s = await stat(filePath)
    if (s.isFile()) return filePath
  } catch {}
  return null
}

async function serveStatic(req, res, pathname) {
  // Normalize: strip trailing slash (except root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1)
  }

  const safePath = pathname.replace(/\.\./g, "")
  const base = join(PUBLIC_DIR, safePath)

  // Try: exact path, path.html, path/index.html
  const resolved =
    (await tryFile(base)) ||
    (await tryFile(base + ".html")) ||
    (await tryFile(join(base, "index.html")))

  if (!resolved) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
    // Try serving 404.html
    try {
      const notFound = await readFile(join(PUBLIC_DIR, "404.html"))
      res.end(notFound)
    } catch {
      res.end("Not found")
    }
    return
  }

  const ext = extname(resolved).toLowerCase()
  const contentType = MIME[ext] || "application/octet-stream"

  // Cache static assets (short cache for css/js since filenames don't have content hashes)
  const isFont = /\.(woff|woff2|ttf|eot)$/i.test(resolved)
  const isImage = /\.(png|jpg|jpeg|gif|ico|svg|webp)$/i.test(resolved)
  const isBundledAsset = /\.(js|css)$/i.test(resolved)
  const cacheControl = isFont || isImage
    ? "public, max-age=2592000, immutable"
    : isBundledAsset
      ? "public, max-age=300"
      : "public, max-age=0"

  try {
    const content = await readFile(resolved)
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": content.length,
      "Cache-Control": cacheControl,
    })
    res.end(content)
  } catch {
    res.writeHead(500)
    res.end("Internal server error")
  }
}

// ── HTTP server ─────────────────────────────────────────────────────
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const pathname = decodeURIComponent(url.pathname)

  // ── Root redirect to default world (Aethermourne) ────────────────
  if (pathname === "/") {
    res.writeHead(302, { Location: "/aethermourne/" })
    res.end()
    return
  }

  // ── World-specific map data serving ───────────────────────────────
  const mapDataMatch = pathname.match(/^\/([^/]+)\/map\/map-data\.json$/)
  if (mapDataMatch && req.method === "GET") {
    const worldSlug = mapDataMatch[1]
    const mapDataPath = join(DATA_DIR, worldSlug, "map-data.json")

    if (existsSync(mapDataPath)) {
      try {
        const mapData = await readFile(mapDataPath)
        res.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": mapData.length,
          "Cache-Control": "public, max-age=300",
        })
        res.end(mapData)
        return
      } catch (err) {
        res.writeHead(500)
        res.end("Error reading map data")
        return
      }
    } else {
      res.writeHead(404)
      res.end("Map data not found")
      return
    }
  }

  // ── World list API ────────────────────────────────────────────────
  if (req.method === "GET" && pathname === "/api/worlds") {
    const worldsList = availableWorlds.map(w => ({
      name: w.config.name,
      slug: w.slug,
      url: `/${w.slug}/`,
      campaign: w.config.campaign,
      tone: w.config.tone
    }))
    return json(res, 200, worldsList)
  }

  // ── Redirect /map to /map/ for correct relative path resolution ─
  if (pathname === "/map") {
    res.writeHead(301, { Location: "/map/" + url.search })
    res.end()
    return
  }

  // ── POST /api/amp/ingest ──────────────────────────────────────
  if (req.method === "POST" && pathname === "/api/amp/ingest") {
    // Token auth
    if (!INGEST_TOKEN) {
      return json(res, 503, { error: "Ingest not configured" })
    }

    const auth = req.headers.authorization
    if (!auth || auth !== `Bearer ${INGEST_TOKEN}`) {
      return json(res, 401, { error: "Unauthorized" })
    }

    // Reject browser requests (browsers send Origin)
    if (req.headers.origin) {
      return json(res, 403, { error: "Forbidden" })
    }

    try {
      const body = await readBody(req)
      const raw = JSON.parse(body)

      if (!raw.envelope?.id) {
        return json(res, 400, { error: "Missing envelope.id" })
      }


      // Deduplicate
      if (messages.some((m) => m.id === raw.envelope.id)) {
        return json(res, 200, { status: "duplicate" })
      }

      const msg = parseAmpMessage(raw)
      messages.push(msg)
      if (messages.length > MAX_MESSAGES) {
        messages.splice(0, messages.length - MAX_MESSAGES)
      }

      broadcast("message", msg)
      lastIngestAt = new Date().toISOString()

      console.log(
        `[${new Date().toISOString()}] ${msg.fromName} → ${msg.toName}: ${msg.subject}`,
      )

      return json(res, 202, { status: "accepted", id: msg.id })
    } catch (err) {
      return json(res, 400, { error: "Invalid JSON" })
    }
  }

  // ── GET /api/amp/events (SSE) ─────────────────────────────────
  if (req.method === "GET" && pathname === "/api/amp/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    })

    res.write(
      `event: connected\ndata: ${JSON.stringify({ time: new Date().toISOString(), count: messages.length })}\n\n`,
    )

    sseClients.add(res)
    req.on("close", () => sseClients.delete(res))
    return
  }

  // ── POST /api/amp/heartbeat ───────────────────────────────────
  if (req.method === "POST" && pathname === "/api/amp/heartbeat") {
    const auth = req.headers.authorization
    if (!INGEST_TOKEN || !auth || auth !== `Bearer ${INGEST_TOKEN}`) {
      return json(res, 401, { error: "Unauthorized" })
    }
    lastHeartbeatAt = new Date().toISOString()
    return json(res, 200, { status: "ok" })
  }

  // ── GET /api/amp/status ───────────────────────────────────────
  if (req.method === "GET" && pathname === "/api/amp/status") {
    const live =
      lastHeartbeatAt !== null &&
      Date.now() - new Date(lastHeartbeatAt).getTime() < 20_000
    return json(res, 200, {
      live,
      messages: messages.length,
      clients: sseClients.size,
      lastIngestAt,
    })
  }

  // ── GET /api/amp/messages ─────────────────────────────────────
  if (req.method === "GET" && pathname === "/api/amp/messages") {
    const limit = Math.min(
      parseInt(url.searchParams.get("limit") || "200", 10),
      MAX_MESSAGES,
    )
    const result = messages.slice(-limit)
    return json(res, 200, result)
  }

  // ── Static files ──────────────────────────────────────────────
  if (req.method === "GET" || req.method === "HEAD") {
    return serveStatic(req, res, pathname)
  }

  res.writeHead(405)
  res.end("Method not allowed")
})

server.listen(PORT, () => {
  console.log(`AMP Relay + Quartz server running on port ${PORT}`)
  console.log(`Static files: ${PUBLIC_DIR}`)
  console.log(`Ingest token: ${INGEST_TOKEN ? "configured" : "NOT SET — ingest disabled"}`)
})
