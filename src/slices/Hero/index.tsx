import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <PrismicRichText field={slice.primary.title} components={{heading1:({text})=>(<h1 className=" font-display text-6xl">{text}</h1>)}} />
    <PrismicRichText field={slice.primary.body} />
    <PrismicNextLink field={slice.primary.cta_button} >{slice.primary.button_text}</PrismicNextLink>
    <PrismicNextImage className="max-w-32 max-h-28" alt="" field={slice.primary.hero_image} />
    </section>
  );
};

export default Hero;
