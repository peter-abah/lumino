import { urlForImage } from "@/sanity/lib/image";
import { HomePage } from "@/types/sanity";
import { CSSProperties } from "react";

type Props = {
  data: HomePage["revealedImageOnScroll"];
};
export default function ImageReveal({ data }: Props) {
  const { image, heading, subheading } = data;
  return (
    <section
      style={
        {
          background: `#000 url(${urlForImage(image)}) no-repeat fixed center/cover`,
        } as CSSProperties
      }
      className="bg-fixed bg-cover bg-center text-white text-center px-12"
    >
      <div className="sticky py-[50vh] top-[50vh]">
        <p className="font-bold text-sm md:text-base">{subheading}</p>
        <p className="text-[3rem] lg:text-[4rem] leading-none font-bold mt-4 md:mt-8">{heading}</p>
      </div>
    </section>
  );
}
