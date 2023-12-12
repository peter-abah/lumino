import { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import ShowcaseHotspot from "./showcase_hotspot";
import { ProductHotspot } from "@/app/types/definition";

const SHOWCASE_PRODUCT = {
  title: "MW08 Sport: inspire movement",
  text: "Designed with shatter-resistant sapphire glass and a custom Kevlar® fiber charging case.",
  link: "#",
  linkText: "Learn more",
  image: "/images/mw08-showcase-hotspot.png",
  imageAspectRatio: "25 / 8",
  hotspots: [
    {
      location: {
        x: "47%",
        y: "31%",
      },
      heading: "External Aluminum Antennas",
      text: "Coupled with Bluetooth 5.2 connectivity, aluminum antennas provide a secure wireless connection and prevent drops for a seamless wireless experience.",
    },
    {
      location: {
        x: "49%",
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
    <section
      style={
        {
          "--gradient": "linear-gradient(90deg, rgba(77, 82, 60, 1), rgba(133, 141, 103, 1) 100%)",
        } as CSSProperties
      }
      className="bg-gradient"
    >
      <div
        className="p-12 text-white relative"
        style={{ aspectRatio: SHOWCASE_PRODUCT.imageAspectRatio }}
      >
        <div className="max-w-[330px]">
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
          src={SHOWCASE_PRODUCT.image}
          alt={SHOWCASE_PRODUCT.title}
          fill
          className="object-contain object-center"
        />

        {SHOWCASE_PRODUCT.hotspots.map((hotspot, index) => (
          <ShowcaseHotspot key={index} hotspot={hotspot} />
        ))}
      </div>
      <div className="px-12 py-[4.5rem] grid grid-cols-[1fr_auto_1fr] gap-12 text-white text-center">
        <div>
          <h2 className="text-[calc(15vw_*_.75)] mb-[.2em] leading-none">6</h2>
          <h3 className="text-[26px] font-bold mb-6">Microphone talk solution</h3>
          <p>
            A proprietary wind-reduction microphone array means clearer calls wherever you are -
            focus only on the sound you want.
          </p>
        </div>
        <span className="h-full w-px bg-white/10"></span>
        <div>
          <h2 className="text-[calc(15vw_*_.75)] mb-[.2em] leading-none">5.2</h2>
          <h3 className="text-[26px] font-bold mb-6">Bluetooth connectivityn</h3>
          <p>Seamless true wireless Bluetooth listening experience up to a range of 100ft/30m.</p>
        </div>
      </div>
    </section>
  );
}
