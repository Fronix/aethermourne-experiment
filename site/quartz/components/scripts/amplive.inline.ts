// AMP Live Viewer — client-side logic
// Initializes on SPA "nav" events, cleans up on page transition

const COLORS = [
  "#7c6fef",
  "#e06c75",
  "#56b6c2",
  "#c678dd",
  "#d19a66",
  "#61afef",
  "#98c379",
  "#e5c07b",
]

interface AmpMessage {
  id: string
  from: string
  fromName: string
  to: string
  toName: string
  subject: string
  priority: string
  timestamp: string
  type: string
  message: string
  context: Record<string, unknown> | null
  threadId: string
  inReplyTo: string | null
}

document.addEventListener("nav", () => {
  const container = document.querySelector(".amp-live-viewer") as HTMLElement | null
  if (!container) return

  // ── State ───────────────────────────────────────
  const allMessages: AmpMessage[] = []
  const seenIds = new Set<string>()
  const agents = new Map<string, { color: string; unread: number }>()
  let colorIdx = 0
  let activeFilter: string | null = null
  let autoScroll = true
  let liveCount = 0

  // ── DOM refs ────────────────────────────────────
  const feed = container.querySelector("#amp-feed") as HTMLElement
  const filtersEl = container.querySelector("#amp-filters") as HTMLElement
  const connDot = container.querySelector("#amp-conn-dot") as HTMLElement
  const connText = container.querySelector("#amp-conn-text") as HTMLElement
  const btnScroll = container.querySelector("#amp-btn-scroll") as HTMLElement
  const btnClear = container.querySelector("#amp-btn-clear") as HTMLElement
  const sTotal = container.querySelector("#amp-s-total") as HTMLElement
  const sVisible = container.querySelector("#amp-s-visible") as HTMLElement
  const sLive = container.querySelector("#amp-s-live") as HTMLElement

  if (!feed) return

  // ── Helpers ─────────────────────────────────────
  function agentColor(name: string): string {
    if (!agents.has(name)) {
      agents.set(name, { color: COLORS[colorIdx % COLORS.length], unread: 0 })
      colorIdx++
    }
    return agents.get(name)!.color
  }

  function initials(name: string): string {
    // Extract world and role: "wylderan-gamemaster" → ["wylderan", "gamemaster"]
    const match = name.match(/^([^-]+)-(.+)$/)
    if (!match) return name.slice(0, 2).toUpperCase()

    const [, world, role] = match
    const parts = role.split(/[-_]/)

    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase()
    }
    return role.slice(0, 2).toUpperCase()
  }

  function shortName(name: string): string {
    // Remove world prefix dynamically
    const match = name.match(/^([^-]+)-(.+)$/)
    return match ? match[2] : name
  }

  function esc(s: string): string {
    if (!s) return ""
    const d = document.createElement("div")
    d.textContent = s
    return d.innerHTML
  }

  function formatTime(ts: string): string {
    if (!ts) return ""
    const d = new Date(ts)
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
  }

  function formatDate(ts: string): string {
    if (!ts) return ""
    const d = new Date(ts)
    const now = new Date()
    if (d.toDateString() === now.toDateString()) return "Today"
    const y = new Date(now)
    y.setDate(y.getDate() - 1)
    if (d.toDateString() === y.toDateString()) return "Yesterday"
    return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })
  }

  function getVisible(): AmpMessage[] {
    if (!activeFilter) return allMessages
    return allMessages.filter((m) => m.fromName === activeFilter || m.toName === activeFilter)
  }

  function updateStats() {
    const vis = getVisible()
    sTotal.textContent = String(allMessages.length)
    sVisible.textContent = String(vis.length)
    sLive.textContent = String(liveCount)
  }

  // ── Render helpers ──────────────────────────────
  function renderBubble(msg: AmpMessage): string {
    const fromColor = agentColor(msg.fromName)

    // Extract world for badge
    const worldMatch = msg.fromName.match(/^([^-]+)-/)
    const worldBadge = worldMatch
      ? `<span class="amp-world-badge" style="background:${fromColor}">${worldMatch[1].substring(0, 1).toUpperCase()}</span>`
      : ""

    const typeTag = msg.type
      ? `<span class="amp-tag amp-tag-${msg.type}">${esc(msg.type)}</span>`
      : ""
    const priorityTag =
      msg.priority === "high" || msg.priority === "urgent"
        ? `<span class="amp-tag amp-tag-priority-${msg.priority}">${esc(msg.priority)}</span>`
        : ""
    const replyTag = msg.inReplyTo ? `<span class="amp-tag amp-tag-ack">reply</span>` : ""

    const bodyText = esc(msg.message || "")
    const isLong = (msg.message || "").length > 500 || (msg.message || "").split("\n").length > 10

    const contextHtml = msg.context
      ? `<div class="amp-msg-context"><pre>${esc(JSON.stringify(msg.context, null, 2))}</pre></div>`
      : ""

    return `
      <div class="amp-msg" data-id="${esc(msg.id)}">
        <div class="amp-msg-header">
          <span class="amp-avatar" style="background:${fromColor}">${initials(msg.fromName)}</span>
          ${worldBadge}
          <span class="amp-sender" style="color:${fromColor}">${esc(shortName(msg.fromName))}</span>
          <span class="amp-arrow">&#9654;</span>
          <span class="amp-recipient">${esc(shortName(msg.toName))}</span>
          <span class="amp-time">${formatTime(msg.timestamp)}</span>
        </div>
        <div class="amp-msg-body">
          <div class="amp-msg-subject">
            ${esc(msg.subject || "(no subject)")}
            <span style="flex:1"></span>
            ${replyTag} ${priorityTag} ${typeTag}
          </div>
          <div class="amp-msg-content ${isLong ? "amp-long" : ""}">${bodyText}</div>
        </div>
        ${contextHtml}
      </div>
    `
  }

  function renderFeed() {
    const msgs = getVisible()

    if (msgs.length === 0) {
      feed.innerHTML = `
        <div class="amp-empty">
          <div class="amp-empty-icon">&#9889;</div>
          <div class="amp-empty-title">${activeFilter ? "No messages for " + esc(shortName(activeFilter)) : "Waiting for messages..."}</div>
          <div class="amp-empty-sub">Messages will appear here in real-time</div>
        </div>
      `
      updateStats()
      return
    }

    let html = ""
    let lastDate = ""
    for (const msg of msgs) {
      const d = formatDate(msg.timestamp)
      if (d !== lastDate) {
        lastDate = d
        html += `<div class="amp-date-sep"><span>${esc(d)}</span></div>`
      }
      html += renderBubble(msg)
    }

    feed.innerHTML = html
    updateStats()
    attachExpanders()
    if (autoScroll) feed.scrollTop = feed.scrollHeight
  }

  function appendLive(msg: AmpMessage) {
    const visible =
      !activeFilter || msg.fromName === activeFilter || msg.toName === activeFilter
    if (!visible) return

    // Remove empty state
    const empty = feed.querySelector(".amp-empty")
    if (empty) empty.remove()

    // Date separator
    const msgs = getVisible()
    const prev = msgs.length > 1 ? msgs[msgs.length - 2] : null
    const lastDate = prev ? formatDate(prev.timestamp) : ""
    const thisDate = formatDate(msg.timestamp)

    let html = ""
    if (thisDate !== lastDate) {
      html += `<div class="amp-date-sep"><span>${esc(thisDate)}</span></div>`
    }
    html += renderBubble(msg)
    feed.insertAdjacentHTML("beforeend", html)

    // Attach expander to new element
    const newEl = feed.querySelector(`[data-id="${msg.id}"] .amp-long`) as HTMLElement | null
    if (newEl) newEl.addEventListener("click", () => newEl.classList.toggle("amp-expanded"))

    updateStats()
    if (autoScroll) feed.scrollTop = feed.scrollHeight
  }

  function attachExpanders() {
    feed.querySelectorAll(".amp-long").forEach((el) => {
      el.addEventListener("click", () => el.classList.toggle("amp-expanded"))
    })
  }

  // ── Filter bar ──────────────────────────────────
  function renderFilters() {
    const names = [...agents.keys()].sort()
    let html = `<button class="amp-filter ${!activeFilter ? "active" : ""}" data-agent="">All</button>`
    for (const name of names) {
      const a = agents.get(name)!
      const isActive = activeFilter === name
      html += `<button class="amp-filter ${isActive ? "active" : ""}" data-agent="${esc(name)}" style="--agent-color:${a.color}">
        <span class="amp-filter-dot" style="background:${a.color}"></span>
        ${esc(shortName(name))}
      </button>`
    }
    filtersEl.innerHTML = html

    filtersEl.querySelectorAll(".amp-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        const agent = (btn as HTMLElement).dataset.agent || ""
        activeFilter = agent || null
        renderFilters()
        renderFeed()
      })
    })
  }

  // ── Data ingestion ──────────────────────────────
  function ingest(msg: AmpMessage, isLive: boolean): boolean {
    if (!msg || !msg.id || seenIds.has(msg.id)) return false
    seenIds.add(msg.id)
    allMessages.push(msg)
    agentColor(msg.fromName)
    agentColor(msg.toName)
    if (isLive) liveCount++
    return true
  }

  // ── SSE ─────────────────────────────────────────
  const es = new EventSource("/api/amp/events")

  es.addEventListener("connected", () => {
    connDot.classList.add("on")
    connText.textContent = "connected"
  })

  es.addEventListener("message", (e: MessageEvent) => {
    try {
      const msg = JSON.parse(e.data) as AmpMessage
      if (ingest(msg, true)) {
        renderFilters()
        appendLive(msg)
      }
    } catch {}
  })

  es.onerror = () => {
    connDot.classList.remove("on")
    connText.textContent = "reconnecting..."
  }

  // Cleanup on SPA navigation
  window.addCleanup(() => es.close())

  // ── Load history ────────────────────────────────
  fetch("/api/amp/messages?limit=200")
    .then((r) => r.json())
    .then((msgs: AmpMessage[]) => {
      let added = 0
      for (const msg of msgs) {
        if (ingest(msg, false)) added++
      }
      allMessages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      if (added > 0) {
        renderFilters()
        renderFeed()
      }
    })
    .catch(() => {})

  // ── UI events ───────────────────────────────────
  btnScroll.addEventListener("click", () => {
    autoScroll = !autoScroll
    btnScroll.classList.toggle("active", autoScroll)
    if (autoScroll) feed.scrollTop = feed.scrollHeight
  })

  btnClear.addEventListener("click", () => {
    allMessages.length = 0
    seenIds.clear()
    liveCount = 0
    renderFeed()
    renderFilters()
  })
})
