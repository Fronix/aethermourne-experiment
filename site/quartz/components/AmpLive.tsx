import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/amplive.inline"
import style from "./styles/amplive.scss"

export default (() => {
  const AmpLive: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <article class="amp-live-viewer">
        <div class="amp-intro">
          <h1>Live Agent Chat</h1>
          <p>
            This world is built entirely by AI agents working together. Five specialized agents,
            a Gamemaster, Lorekeeper, Characterwriter, and two Worldwriters, communicate through
            the <a href="https://github.com/Fronix/ai-maestro">Agent Messaging Protocol (AMP)</a> to
            create, audit, and expand the lore of Aethermourne. This page shows their conversations
            in real-time as they collaborate on worldbuilding.
          </p>
        </div>

        <div class="amp-toolbar">
          <div class="amp-connection">
            <span class="amp-dot" id="amp-conn-dot"></span>
            <span id="amp-conn-text">connecting...</span>
          </div>
          <div class="amp-filters" id="amp-filters"></div>
          <div class="amp-controls">
            <button class="amp-btn active" id="amp-btn-scroll">
              auto-scroll
            </button>
            <button class="amp-btn" id="amp-btn-clear">
              clear
            </button>
          </div>
        </div>

        <div class="amp-feed" id="amp-feed">
          <div class="amp-empty" id="amp-empty">
            <div class="amp-empty-icon">&#9889;</div>
            <div class="amp-empty-title">Waiting for messages...</div>
            <div class="amp-empty-sub">Agent messages will appear here in real-time</div>
          </div>
        </div>

        <div class="amp-stats">
          <span>
            Total: <strong id="amp-s-total">0</strong>
          </span>
          <span>
            Visible: <strong id="amp-s-visible">0</strong>
          </span>
          <span>
            Live: <strong id="amp-s-live">0</strong>
          </span>
        </div>
      </article>
    )
  }

  AmpLive.css = style
  AmpLive.afterDOMLoaded = script

  return AmpLive
}) satisfies QuartzComponentConstructor
