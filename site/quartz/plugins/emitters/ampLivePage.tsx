import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { FullSlug } from "../../util/path"
import { sharedPageComponents, defaultContentPageLayout } from "../../../quartz.layout"
import HeaderConstructor from "../../components/Header"
import AmpLive from "../../components/AmpLive"
import { defaultProcessedContent } from "../vfile"
import { write } from "./helpers"

export const AmpLivePage: QuartzEmitterPlugin = () => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    pageBody: AmpLive(),
    beforeBody: [],
    left: defaultContentPageLayout.left,
    right: [],
  }

  const { head: Head, header, pageBody, left, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "AmpLivePage",
    getQuartzComponents() {
      return [Head, Header, Body, ...header, pageBody, ...(left ?? []), Footer]
    },
    async *emit(ctx, _content, resources) {
      const cfg = ctx.cfg.configuration
      const slug = "amp-live" as FullSlug

      const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
      const path = url.pathname as FullSlug
      const [tree, vfile] = defaultProcessedContent({
        slug,
        text: "AMP Live Viewer",
        description: "Live agent message feed",
        frontmatter: { title: "AMP Live", tags: [] },
      })
      const externalResources = pageResources(path, resources)
      const componentData: QuartzComponentProps = {
        ctx,
        fileData: vfile.data,
        externalResources,
        cfg,
        children: [],
        tree,
        allFiles: [],
      }

      yield write({
        ctx,
        content: renderPage(cfg, slug, componentData, opts, externalResources),
        slug,
        ext: ".html",
      })
    },
    async *partialEmit() {},
  }
}
