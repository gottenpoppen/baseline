import Brands from "@components/Brands"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeroProps = { title: string; text: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Hero = async ({ title, text }: HeroProps) => {
  const { css } = useCSS({ meta: import.meta })
  const brandsItem = await Brands({
    title: "Brands",
    text: "Brands",
  })

  const textSecondary =
    "It is a simple, fast, and light framework which does things."
  const the = "The"

  return (
    <section class={useName}>
      <style>{css}</style>
      <article class="hero-panel">
        <div class="intro">
          <section class="title-wrap">
            <h2 class="title">
              <em class="words word-first">{the + " "}</em>
              {title}
            </h2>
          </section>
          <aside class="text">
            <p>{text}</p>
            <p>{textSecondary}</p>
            <a href="#liam" class="link-button">
              Learn More
            </a>
          </aside>
        </div>
        {brandsItem}
      </article>
    </section>
  )
}

export default Hero
