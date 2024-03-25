"use client";

import ArrowRightIcon from "@/components/icons/arrow_right_icon";
import { BLUR_DATA_URL } from "@/lib/constants";
import useSlideShow from "@/lib/hooks/use_slide_show";
import { urlForImage } from "@/sanity/lib/image";
import { Timeline as ISanityTimeline } from "@/types/sanity";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  data: ISanityTimeline;
};

export default function Timeline({ data }: Props) {
  const {
    currentIndex: currentStoryIndex,
    setCurrentIndex: setCurrentStoryIndex,
    goToNext: goToNextStory,
    goToPrev: goToPreviousStory,
  } = useSlideShow(data.length);

  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20" id="story">
      {data.map(({ _key, heading, subheading, image }, index) => (
        <div
          key={_key}
          className={twMerge("lg:grid lg:grid-cols-2", index !== currentStoryIndex && "!hidden")}
        >
          <div className="max-w-[25rem] lg:max-w-none mx-auto lg:pr-[16.5%] w-full mb-6 lg:mb-0">
            <div className="w-full relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={urlForImage(image)}
                fill
                blurDataURL={BLUR_DATA_URL}
                placeholder="blur"
                alt=""
              />
            </div>
          </div>

          <div className="min-[1200px]:pr-[16.5%] min-[1200px]:pl-0 md:px-14 text-center lg:text-start">
            <p className="font-bold text-sm md:text-base">{subheading}</p>
            <h2 className="mt-4 md:mt-6 text-[2rem] md:text-[2.5rem] leading-heading font-bold">
              {heading}
            </h2>
          </div>
        </div>
      ))}

      <div className="mt-14 flex gap-10 items-start overflow-x-auto no-scrollbar">
        <div className="relative flex w-full min-w-[600px]">
          <span className="absolute w-full bg-text/10 h-0.5 top-2 md:top-2.5  left-0"></span>

          {data.map(({ _key, navLabel }, index) => (
            <button
              key={_key}
              onClick={() => setCurrentStoryIndex(index)}
              className={twMerge(
                "z-10 flex flex-col gap-3 w-full text-left font-bold before:w-4 md:before:w-5 before:aspect-square before:border-2 before:rounded-full before:box-border before:bg-main-bg",
                index === currentStoryIndex && "before:bg-black before:border-black"
              )}
            >
              <span
                className={twMerge(
                  "font-bold text-xs md:text-sm opacity-50",
                  index === currentStoryIndex && "opacity-100"
                )}
              >
                {navLabel}
              </span>
            </button>
          ))}
        </div>

        <div className="lg:flex lg:gap-4 hidden">
          <button
            type="button"
            onClick={goToPreviousStory}
            className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
          >
            <ArrowRightIcon className="w-2 h-auto rotate-180 group-hover:scale-110" />
            <span className="sr-only">Previous review</span>
          </button>

          <button
            type="button"
            onClick={goToNextStory}
            className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
          >
            <ArrowRightIcon className="w-2 h-auto group-hover:scale-110" />
            <span className="sr-only">Previous review</span>
          </button>
        </div>
      </div>
    </section>
  );
}
