"use client";

import useSlideShow from "@/hooks/use_slide_show";
import {
  SanityArray,
  Announcement as TAnnouncement,
} from "@/types/definition";
import ArrowRight from "@/components/icons/arrow_right_icon";
import Announcement from "./announcement";

type Props = {
  announcements: SanityArray<TAnnouncement>;
};
export default function Announcements({ announcements }: Props) {
  const { currentIndex, goToNext, goToPrev } = useSlideShow(
    announcements.length
  );

  return (
    <section className="bg-black text-white p-2.5 md:px-4 md:py-3.5">
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

        <div
          id="announcement-bar"
          className="grid grid-cols-1 grid-rows-1 place-items-center"
        >
          {announcements.map((announcement, index) => (
            <Announcement
              announcement={announcement}
              key={announcement._key}
              isVisible={currentIndex === index}
            />
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
