// Polls /api/amp/status every 30s to show green dot when relay is live
document.addEventListener("nav", () => {
  const dot = document.getElementById("amp-live-dot")
  if (!dot) return

  let timer: ReturnType<typeof setInterval> | null = null

  async function check() {
    try {
      const res = await fetch("/api/amp/status")
      if (res.ok) {
        const data = await res.json()
        dot.classList.toggle("live", data.live)
      } else {
        dot.classList.remove("live")
      }
    } catch {
      dot.classList.remove("live")
    }
  }

  check()
  timer = setInterval(check, 30000)

  window.addCleanup(() => {
    if (timer) clearInterval(timer)
    dot.classList.remove("live")
  })
})
