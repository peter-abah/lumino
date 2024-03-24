import ArrowLeftCircleIcon from "@/components/icons/arrow_left_circle_icon";
import { urlForImage } from "@/sanity/lib/image";
import { ImageLink, SanityArray } from "@/types/sanity";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const DEFAULT_BACKGROUND = "#004";

type Props = {
  imageLinks: SanityArray<ImageLink>;
};

export default function ImageLinks({ imageLinks }: Props) {
  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:16 lg:py-20">
      <ul className="flex overflow-auto gap-2 md:gap-6 no-scrollbar snap-x snap-mandarory">
        {imageLinks.map((imageLink) => (
          <li key={imageLink.name} className="snap-start">
            <Link
              href={imageLink.url}
              className="inline-block relative md:w-[20vw] aspect-square rounded-lg overflow-hidden group"
              style={{
                background: imageLink.colors?.background || DEFAULT_BACKGROUND,
              }}
            >
              <Image
                src={urlForImage(imageLink.image)}
                className="hover:scale-105 duration-[500ms]"
                alt=""
                fill
                aria-hidden
              />

              <div
                className="absolute bottom-6 left-5 flex justify-between w-[calc(100%_-_40px)]"
                style={{
                  color: imageLink.colors?.textColor || "current",
                }}
              >
                <span className={clsx("text-sm md:text-base font-bold")}>{imageLink.name}</span>
                <ArrowLeftCircleIcon className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
