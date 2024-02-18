"use client";

import ArrowRightIcon from "@/components/icons/arrow_right_icon";
import useSlideShow from "@/lib/hooks/use_slide_show";
import { urlForImage } from "@/sanity/lib/image";
import { HomePage } from "@/types/sanity";
import clsx from "clsx";
import Image from "next/image";

const MAX_LENGTH_OF_DATA = 3;
type Props = {
  data: HomePage["textWithMultipleImages"];
};
export default function TextWithMultipleImages({ data }: Props) {
  data = data.slice(0, MAX_LENGTH_OF_DATA);
  const { currentIndex, goToNext, goToPrev } = useSlideShow(data.length);

  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-[580px] lg:max-w-none flex flex-col items-center lg:grid lg:grid-cols-[fit-content(60%)_40%] justify-center gap-8 md:gap-12 lg:gap-24 mx-auto">
        <div
          className={clsx("grid items-center", {
            // DIfferent grid depending on number of items
            "grid-cols-1": data.length === 1,
            "grid-cols-[3fr_4fr]": data.length > 1,
            "auto-rows-auto": data.length === 3,
          })}
        >
          {data.map(({ image, _key }, index) => (
            <Image
              key={_key}
              src={urlForImage(image)}
              alt=""
              width={500}
              height={600}
              className={clsx("w-full h-auto rounded-md z-10 max-w-[500px]", {
                "col-start-2 row-start-1 row-span-2": data.length === 3 && index === 0,
                "-rotate-[2deg]": index === 0,
                "rotate-[1.5deg]": index === 1,
              })}
            />
          ))}
        </div>
        <div>
          <div>
            {data.map((item, index) => (
              <div className={clsx(currentIndex !== index && "hidden")} key={item._key}>
                <p className="font-bold mb-4 md:mb-8 text-sm md:text-base text-center lg:text-left">
                  {item.subheading}
                </p>
                <h2 className="text-[2.5rem] md:text-5xl font-bold text-center lg:text-left leading-[1.1] mb-5 md:mb-6">
                  {item.heading}
                </h2>
                <p className="text-sm md:text-base leading-normal text-center lg:text-left">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mt-8 md:mt-12">
            <button
              type="button"
              onClick={goToPrev}
              className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
            >
              <ArrowRightIcon className="w-2 h-auto rotate-180 group-hover:scale-110" />
              <span className="sr-only">Previous review</span>
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
            >
              <ArrowRightIcon className="w-2 h-auto group-hover:scale-110" />
              <span className="sr-only">Previous review</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
