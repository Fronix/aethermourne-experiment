#!/usr/bin/env node

// AMP Live Watcher — watches local AMP message files and POSTs them to the remote relay
//
// Usage:
//   AMP_REMOTE_URL=https://your-site.com AMP_INGEST_TOKEN=secret node scripts/amp-watcher.mjs
//
// Options:
//   --history    Send existing messages on startup (last 200)

import { watch } from "chokidar"
import { readFile, readdir } from "node:fs/promises"
import { homedir } from "node:os"
import { join } from "node:path"

const AGENTS_DIR = join(homedir(), ".agent-messaging", "agents")
const REMOTE_URL = process.env.AMP_REMOTE_URL
const TOKEN = process.env.AMP_INGEST_TOKEN
const SEND_HISTORY = process.argv.includes("--history")

if (!REMOTE_URL) {
  console.error("Error: AMP_REMOTE_URL env var is required")
  console.error("Example: AMP_REMOTE_URL=https://aethermourne.example.com")
  process.exit(1)
}

if (!TOKEN) {
  console.error("Error: AMP_INGEST_TOKEN env var is required")
  process.exit(1)
}

const baseUrl = REMOTE_URL.replace(/\/$/, "")
const ingestUrl = `${baseUrl}/api/amp/ingest`
const heartbeatUrl = `${baseUrl}/api/amp/heartbeat`
const seenIds = new Set()

async function sendMessage(filePath) {
  try {
    const raw = await readFile(filePath, "utf8")
    const parsed = JSON.parse(raw)
    const id = parsed.envelope?.id
    if (!id || seenIds.has(id)) return

    const from = parsed.envelope.from || ""
    const to = parsed.envelope.to || ""
    const fromAgent = from.split("@")[0]
    const toAgent = to.split("@")[0]

    // Only relay messages between known agent patterns
    const agentPattern = /^(aethermourne|wylderan)-(gamemaster|lorekeeper|writer1|writer2|characterwriter|cartographer)$/

    if (!agentPattern.test(fromAgent) || !agentPattern.test(toAgent)) {
      console.log(`[FILTER] Skipping non-agent message: ${fromAgent} → ${toAgent}`)
      return
    }

    seenIds.add(id)
    // Cap seen set
    if (seenIds.size > 10000) {
      const arr = [...seenIds]
      for (let i = 0; i < 5000; i++) seenIds.delete(arr[i])
    }

    const res = await fetch(ingestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: raw,
    })

    const env = parsed.envelope
    const status = res.ok ? res.status : `ERROR ${res.status}`
    console.log(
      `[${new Date().toISOString()}] ${status} ${env.from?.split("@")[0]} → ${env.to?.split("@")[0]}: ${env.subject}`,
    )
  } catch (err) {
    console.error(`Failed: ${filePath} — ${err.message}`)
  }
}

// ── Send existing messages on startup ───────────
async function sendHistory() {
  console.log("Loading message history...")
  const all = []

  try {
    const uuids = await readdir(AGENTS_DIR)
    for (const uuid of uuids) {
      const inboxDir = join(AGENTS_DIR, uuid, "messages", "inbox")
      try {
        const senders = await readdir(inboxDir)
        for (const sender of senders) {
          const senderDir = join(inboxDir, sender)
          try {
            const files = await readdir(senderDir)
            for (const file of files) {
              if (!file.endsWith(".json")) continue
              all.push(join(senderDir, file))
            }
          } catch {}
        }
      } catch {}
    }
  } catch {}

  // Sort by filename (contains timestamp) and take last 200
  all.sort()
  const recent = all.slice(-200)
  console.log(`Sending ${recent.length} historical messages...`)

  for (const filePath of recent) {
    await sendMessage(filePath)
  }

  console.log("History sync complete.")
}

// ── Watch for new messages ──────────────────────
console.log(`AMP Watcher starting`)
console.log(`Watching: ${AGENTS_DIR}`)
console.log(`Remote: ${ingestUrl}`)

if (SEND_HISTORY) {
  await sendHistory()
}

// Chokidar v4 doesn't support globs — watch each agent's inbox directory
const uuids = await readdir(AGENTS_DIR).catch(() => [])
const inboxDirs = []
for (const uuid of uuids) {
  const inboxDir = join(AGENTS_DIR, uuid, "messages", "inbox")
  try {
    await readdir(inboxDir)
    inboxDirs.push(inboxDir)
  } catch {}
}

if (inboxDirs.length === 0) {
  console.error("No agent inbox directories found")
  process.exit(1)
}

console.log(`Watching ${inboxDirs.length} agent inboxes`)

const watcher = watch(inboxDirs, {
  ignoreInitial: true,
  awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
})

watcher.on("add", (filePath) => {
  if (filePath.endsWith(".json")) sendMessage(filePath)
})

// ── Heartbeat ───────────────────────────────────
async function heartbeat() {
  try {
    await fetch(heartbeatUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
  } catch {}
}

heartbeat()
setInterval(heartbeat, 15_000)

console.log("Watching for new messages...")
