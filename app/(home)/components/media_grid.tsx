import { urlForImage } from "@/sanity/lib/image";
import { ImageLink, SanityArray } from "@/types/sanity";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  gridItems: SanityArray<ImageLink>;
};
export default function MediaGrid({ gridItems }: Props) {
  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 grid-flow-dense auto-rows-[150px] md:auto-rows-[calc(100vw_/_5)] grid-cols-2 md:grid-cols-4 grid-rows grid gap-2.5 lg:gap-6">
      {gridItems.map((gridItem, itemIndex) => (
        <Link
          key={gridItem._key}
          href={gridItem.url}
          className={clsx("flex flex-col rounded-xl overflow-hidden relative group", {
            // set height of grid item based on position (first is the largest, next two are the smallest,
            // and the 4th (last) item is a rectangular)
            "col-span-2 row-span-2 justify-center md:justify-end p-[8%]": itemIndex === 0,
            "justify-end p-4 md:p-8 lg:p-[8%]": itemIndex > 0,
            "col-span-2": itemIndex === 3,
          })}
        >
          <Image
            src={urlForImage(gridItem.image)}
            alt=""
            fill
            className="object-cover object-center group-hover:scale-105 duration-[1.5s]"
          />
          <span
            className={clsx("font-bold text-white z-10 relative", {
              "text-center md:text-left": itemIndex === 0,
              "text-2xl md:text-[32px]": itemIndex === 0 || itemIndex === 3,
              "text-lg leading-tight md:text-xl": itemIndex === 1 || itemIndex === 2,
            })}
          >
            {gridItem.name}
          </span>
        </Link>
      ))}
    </section>
  );
}
