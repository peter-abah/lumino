import { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import ShowcaseHotspot from "./showcase_hotspot";
import { HomePage } from "@/types/sanity";
import { urlForImage } from "@/sanity/lib/image";
import { parseAssetID } from "@/helpers/sanity";

// const SHOWCASE_PRODUCT = {
//   title: "MW08 Sport: inspire movement",
//   text: "Designed with shatter-resistant sapphire glass and a custom Kevlar® fiber charging case.",
//   link: "#",
//   linkText: "Learn more",
//   images: {
//     desktop: "/images/mw08-showcase-hotspot.png",
//     mobile: "/images/mw08-showcase-hotspot-mobile.png",
//   },
//   imageAspectRatio: {
//     desktop: "25 / 8",
//     mobile: "15 / 8",
//   },
//   hotspots: [
//     {
//       location: {
//         x: "45%",
//         y: "28%",
//       },
//       heading: "External Aluminum Antennas",
//       text: "Coupled with Bluetooth 5.2 connectivity, aluminum antennas provide a secure wireless connection and prevent drops for a seamless wireless experience.",
//     },
//     {
//       location: {
//         x: "51%",
//         y: "53%",
//       },
//       heading: "External Aluminum Antennas",
//       text: "Coupled with Bluetooth 5.2 connectivity, aluminum antennas provide a secure wireless connection and prevent drops for a seamless wireless experience.",
//     },
//     {
//       location: {
//         x: "45%",
//         y: "86%",
//       },
//       heading: "External Aluminum Antennas",
//       text: "Coupled with Bluetooth 5.2 connectivity, aluminum antennas provide a secure wireless connection and prevent drops for a seamless wireless experience.",
//     },
//   ] as ProductHotspot[],
// };

type Props = {
  data: HomePage["hotspots"];
};
// TODO: some buttons/links have similar styles (like the one in the file), move them to a component
export default function ProductShowcaseWithHotspots({ data }: Props) {
  const imageData = parseAssetID(data.image.asset?._ref || "");
  const mobileImageData = parseAssetID(data.mobileImage.asset?._ref || "");

  return (
    <section>
      <div className="lg:hidden px-5 pb-8 md:px-8 md:pb-12">
        <h3 className="font-bold text-[2rem] md:text-[2.5rem] mb-5 md:mb-6 leading-none">
          {data.heading}
        </h3>
        <p className="mb-6 md:mb-8 text-sm md:text-base">{data.content}</p>
        <Link
          href={data.buttonURL}
          className="inline-block px-6 md:px-8 py-3.5 bg-black text-white rounded-button font-bold text-sm md:text-base"
        >
          {data.buttonText}
        </Link>
      </div>
      <div className="bg-[linear-gradient(90deg,_rgba(77,_82,_60,_1),_rgba(133,_141,_103,_1)_100%)]">
        <div className="text-white relative">
          <div className="max-w-[330px] hidden lg:block absolute top-12 left-12">
            <h3 className="font-bold text-[2.5rem] mb-6 leading-none">{data.heading}</h3>
            <p className="mb-8">{data.content}</p>
            <Link              href={data.buttonURL}
              className="px-8 py-3.5 bg-white text-[rgb(77_82_60)] rounded-button font-bold"
            >
              {data.buttonText}
            </Link>
          </div>

          <Image
            src={urlForImage(data.image)}
            alt={data.image.alt || ""}
            width={imageData.width}
            height={imageData.height}
            className="object-contain object-center hidden lg:block"
          />
          <Image
            src={urlForImage(data.mobileImage)}
            alt={data.image.alt || ""}
            width={mobileImageData.width}
            height={mobileImageData.height}
            className="object-contain object-center lg:hidden"
          />

          {data.hotspots.map((hotspot, index) => (
            <ShowcaseHotspot key={index} hotspot={hotspot} />
          ))}
        </div>
      </div>
    </section>
  );
}
