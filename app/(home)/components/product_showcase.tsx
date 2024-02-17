import { urlForImage } from "@/sanity/lib/image";
import { Spotlight } from "@/types/sanity";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

// const SHOWCASE_PRODUCT = {
//   name: "MW08",
//   pageTitle: "A leap forward in sound and design",
//   infoText:
//     "Crafted from ceramic and stainless steel, the MW08 wireless earbuds features Hybrid Active Noise-Cancellation, a streamlined form designed for comfort, and a new wind-reducing talk solution with 6 microphones.",
//   link: "#",
//   linkText: "Shop MW08 Sport",
//   images: {
//     desktop: "/images/mw08-showcase.png",
//     mobile: "/images/mw08-showcase-mobile.png",
//   },
// };

type Props = {
  spotlight: Spotlight;
};
export default function ProductShowcase({ spotlight }: Props) {
  return (
    <section>
      <div className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20 text-center flex flex-col">
        <h2
          style={
            {
              "--gradient":
                "linear-gradient(180deg, rgba(26, 26, 26, 0.2), rgba(26, 26, 26, 0) 100%)",
            } as CSSProperties
          }
          className="text-gradient text-[min(4rem,20vw)] md:text-[15vw] font-bold mb-[.2em] leading-none"
        >
          {spotlight.spotlightText}
        </h2>

        <div className="max-w-[750px] mx-auto">
          <h3 className="text-2xl font-bold mb-5">{spotlight.subheading}</h3>
          <p className="mb-6 md:mb-8 text-sm md:text-base">
            {spotlight.content}
          </p>
          {spotlight.buttonURL && (
            <Link
              href={spotlight.buttonURL}
              className="inline-block px-8 md:px-10 py-4 md:py-4.5 rounded-button bg-button-bg text-white font-bold "
            >
              {spotlight.buttonText}
            </Link>
          )}
        </div>
      </div>

      <div className="w-full aspect-[2/1] md:aspect-[13/4] relative">
        <Image
          src={urlForImage(spotlight.image)}
          alt=""
          fill
          className="hidden md:block"
        />

        {/* image for mobile, add mobile image to sanity schema */}
        <Image
          src={urlForImage(spotlight.image)}
          alt=""
          fill
          className="md:hidden"
        />
      </div>
    </section>
  );
}
