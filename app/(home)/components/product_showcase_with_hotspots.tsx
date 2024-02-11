import { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import ShowcaseHotspot from "./showcase_hotspot";
import { ProductHotspot } from "@/types/definition";

const SHOWCASE_PRODUCT = {
  title: "MW08 Sport: inspire movement",
  text: "Designed with shatter-resistant sapphire glass and a custom Kevlar® fiber charging case.",
  link: "#",
  linkText: "Learn more",
  images: {
    desktop: "/images/mw08-showcase-hotspot.png",
    mobile: "/images/mw08-showcase-hotspot-mobile.png",
  },
  imageAspectRatio: {
    desktop: "25 / 8",
    mobile: "15 / 8",
  },
  hotspots: [
    {
      location: {
        x: "45%",
        y: "28%",
      },
      heading: "External Aluminum Antennas",
      text: "Coupled with Bluetooth 5.2 connectivity, aluminum antennas provide a secure wireless connection and prevent drops for a seamless wireless experience.",
    },
    {
      location: {
        x: "51%",
        y: "53%",
      },
      heading: "External Aluminum Antennas",
      text: "Coupled with Bluetooth 5.2 connectivity, aluminum antennas provide a secure wireless connection and prevent drops for a seamless wireless experience.",
    },
    {
      location: {
        x: "45%",
        y: "86%",
      },
      heading: "External Aluminum Antennas",
      text: "Coupled with Bluetooth 5.2 connectivity, aluminum antennas provide a secure wireless connection and prevent drops for a seamless wireless experience.",
    },
  ] as ProductHotspot[],
};

// TODO: some buttons/links have similar styles (like the one in the file), move them to a component
export default function ProductShowcaseWithHotspots() {
  return (
    <section>
      <div className="lg:hidden px-5 pb-8 md:px-8 md:pb-12">
        <h3 className="font-bold text-[2rem] md:text-[2.5rem] mb-5 md:mb-6 leading-none">
          {SHOWCASE_PRODUCT.title}
        </h3>
        <p className="mb-6 md:mb-8 text-sm md:text-base">{SHOWCASE_PRODUCT.text}</p>
        <Link
          href={SHOWCASE_PRODUCT.link}
          className="inline-block px-6 md:px-8 py-3.5 bg-black text-white rounded-button font-bold text-sm md:text-base"
        >
          {SHOWCASE_PRODUCT.linkText}
        </Link>
      </div>
      <div
        style={
          {
            "--gradient":
              "linear-gradient(90deg, rgba(77, 82, 60, 1), rgba(133, 141, 103, 1) 100%)",
          } as CSSProperties
        }
        className="bg-gradient"
      >
        <div
          className="lg:p-12 text-white relative aspect-[var(--aspect-ratio-mobile)] lg:aspect-[var(--aspect-ratio-desktop)]"
          style={
            {
              "--aspect-ratio-desktop": SHOWCASE_PRODUCT.imageAspectRatio.desktop,
              "--aspect-ratio-mobile": SHOWCASE_PRODUCT.imageAspectRatio.mobile,
            } as CSSProperties
          }
        >
          <div className="max-w-[330px] hidden lg:block">
            <h3 className="font-bold text-[2.5rem] mb-6 leading-none">{SHOWCASE_PRODUCT.title}</h3>
            <p className="mb-8">{SHOWCASE_PRODUCT.text}</p>
            <Link
              href={SHOWCASE_PRODUCT.link}
              className="px-8 py-3.5 bg-white text-[rgb(77_82_60)] rounded-button font-bold"
            >
              {SHOWCASE_PRODUCT.linkText}
            </Link>
          </div>
          <Image
            src={SHOWCASE_PRODUCT.images.desktop}
            alt={SHOWCASE_PRODUCT.title}
            fill
            className="object-contain object-center hidden lg:block"
          />
          <Image
            src={SHOWCASE_PRODUCT.images.mobile}
            alt={SHOWCASE_PRODUCT.title}
            fill
            className="object-contain object-center lg:hidden"
          />

          {SHOWCASE_PRODUCT.hotspots.map((hotspot, index) => (
            <ShowcaseHotspot key={index} hotspot={hotspot} />
          ))}
        </div>
        <div className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-[4.5rem] flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-10 md:gap-12 text-white text-center">
          <div>
            <h2 className="text-[calc(min(20vw,4rem)_*_1.5)] md:text-[calc(15vw_*_.75)] font-bold mb-[.2em] leading-none">
              6
            </h2>
            <h3 className="text-[22px] md:text-[26px] font-bold mb-5 md:mb-6 leading-none">
              Microphone talk solution
            </h3>
            <p className="text-sm md:text-base leading-normal">
              A proprietary wind-reduction microphone array means clearer calls wherever you are -
              focus only on the sound you want.
            </p>
          </div>
          <span className="hidden lg:block h-full w-px bg-white/10"></span>
          <div>
            <h2 className="text-[calc(min(20vw,4rem)_*_1.5)] md:text-[calc(15vw_*_.75)] font-bold mb-[.2em] leading-none">
              5.2
            </h2>
            <h3 className="text-[22px] md:text-[26px] font-bold mb-5 md:mb-6 leading-none">
              Bluetooth connectivityn
            </h3>
            <p className="text-sm md:text-base leading-normal">
              Seamless true wireless Bluetooth listening experience up to a range of 100ft/30m.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
