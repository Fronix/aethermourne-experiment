import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/amplivelink.inline"
import style from "./styles/amplivelink.scss"

export default (() => {
  const AmpLiveLink: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <a
        href="/amp-live"
        class={classNames(displayClass, "amp-live-link")}
      >
        <span class="amp-live-dot" id="amp-live-dot"></span>
        Live Agent Chat
      </a>
    )
  }

  AmpLiveLink.css = style
  AmpLiveLink.afterDOMLoaded = script

  return AmpLiveLink
}) satisfies QuartzComponentConstructor
