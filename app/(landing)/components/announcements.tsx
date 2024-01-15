"use client";

import ArrowRight from "@/app/components/icons/arrow_right_icon";
import useSlideShow from "@/app/hooks/use_slide_show";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const announcements = [
  "Free standard shipping on all orders",
  "A question? Visit our contact page to send us a message",
  "Discount: Use the code IMPACT20 to receive a 20% discount on your order",
  "New Collaboration: Master & Dynamic x Paris Saint-Germain",
];

export default function Announcements() {
  const { currentIndex, goToNext, goToPrev } = useSlideShow(announcements.length);

  return (
    <section className="bg-black text-white px-4 py-3.5">
      <div className="flex gap-4 max-w-[32rem] justify-between mx-auto">
        <button
          type="button"
          aria-controls="announcement-bar"
          aria-label="Previous"
          onClick={goToPrev}
          className="p-1"
        >
          <ArrowRight className="rotate-180 w-2 h-auto" />
        </button>
        <div id="announcement-bar" className="grid grid-cols-1 grid-rows-1 place-items-center">
          {announcements.map((announcement, index) => (
            <p
              key={announcement}
              className={twMerge(
                "text-xs font-bold text-center w-full opacity-0 invisible row-start-1 row-span-1 col-start-1 col-span-1 transition-all duration-1000 -translate-3",
                currentIndex === index && "opacity-100 visible translate-y-0"
              )}
            >
              {announcement}
            </p>
          ))}
        </div>
        <button
          type="button"
          aria-controls="announcement-bar"
          aria-label="Next"
          onClick={goToNext}
          className="p-1"
        >
          <ArrowRight className="w-2 h-auto" />
        </button>
      </div>
    </section>
  );
}
