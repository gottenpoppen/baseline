import Footer from "@components/Footer"
import { GalleryIntro } from "@components/GalleryIntro"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import AppTheme from "@layouts/app"
import jsxFactory from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

const pageGalleryItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`} >
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <GalleryIntro slug={slug} />
          {/* <Articles /> */}
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGalleryItem