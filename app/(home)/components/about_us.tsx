"use client";

import Image from "next/image";
import ArrowRightIcon from "@/components/icons/arrow_right_icon";
import { useState } from "react";
import clsx from "clsx";

export default function AboutUs() {
  // TODO: Maybe move to useSlideSHow hook
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevState) => (prevState === 0 ? 1 : prevState - 1));
  };
  const goToNextSlide = () => {
    setCurrentSlideIndex((prevState) => (prevState + 1) % 2);
  };

  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-[580px] lg:max-w-none flex flex-col lg:grid lg:grid-cols-[1fr_0.7fr] gap-8 md:gap-12 lg:gap-24 mx-auto">
        <div className="grid grid-cols-[3fr_4fr] items-center">
          <Image
            src="/images/mw07-about.jpg"
            alt=""
            width={500}
            height={600}
            className="w-full h-auto rounded-md -rotate-[2deg] z-10"
          />
          <Image
            src="/images/mh40-about.jpg"
            width={500}
            height={600}
            alt=""
            className="w-full h-auto rounded-md rotate-[2deg]"
          />
        </div>
        <div>
          <div>
            <div className={clsx(currentSlideIndex !== 0 && "hidden")}>
              <p className="font-bold mb-4 md:mb-8 text-sm md:text-base text-center lg:text-left">
                About us
              </p>
              <h2 className="text-[2.5rem] md:text-5xl font-bold text-center lg:text-left leading-[1.1] mb-5 md:mb-6">
                Designed & developed in New York City
              </h2>
              <p className="text-sm md:text-base leading-normal text-center lg:text-left">
                Founder Jonathan Levine was first drawn to headphones after building a recording
                studio in his office to support his shared passion with his music-mad son, Robert,
                an emerging DJ/music producer. Jonathan, a serial consumer products entrepreneur,
                envisioned headphones with both premium sound quality and elevated design that his
                son could use.
              </p>
            </div>

            <div className={clsx(currentSlideIndex !== 1 && "hidden")}>
              <p className="font-bold mb-4 md:mb-8 text-sm md:text-base text-center lg:text-left">
                What we do
              </p>
              <h2 className="text-[2.5rem] md:text-5xl font-bold text-center lg:text-left leading-[1.1] mb-5 md:mb-6">
                Superior design and craftmanship
              </h2>
              <p className="text-sm md:text-base leading-normal text-center lg:text-left">
                Brilliant sound and design motivate everything we do. We have a deep passion for
                building beautifully crafted, technically sophisticated sound tools. Only the finest
                materials supporting comfort, aesthetics and functionality. Designing the ultimate
                sound experience, while delivering best-in-class performance at every touch point.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-8 md:mt-12">
            <button
              type="button"
              onClick={goToPreviousSlide}
              className="w-12 h-12 rounded-full border grid place-items-center group hover:bg-text/5 transition-all duration-300"
            >
              <ArrowRightIcon className="w-2 h-auto rotate-180 group-hover:scale-110" />
              <span className="sr-only">Previous review</span>
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
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
