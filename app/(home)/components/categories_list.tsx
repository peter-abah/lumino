import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { ImageLink, SanityArray } from "@/types/sanity";
import clsx from "clsx";

// const CATEGORIES = [
//   {
//     name: "Headphones",
//     link: "#",
//     imageLink: "/images/category-headphones.jpg",
//   },
//   { name: "Earphones", link: "#", imageLink: "/images/category-earphones.jpg" },
//   { name: "Speakers", link: "#", imageLink: "/images/category-speakers.jpg" },
//   {
//     name: "Collaborations",
//     link: "#",
//     imageLink: "/images/category-collaborations.jpg",
//     styles: { name: "text-white" },
//   },
//   {
//     name: "Accessories",
//     link: "#",
//     imageLink: "/images/category-accessories.jpg",
//   },
// ];

const DEFAULT_BACKGROUND = '#004';

type Props = {
  imageLinks: SanityArray<ImageLink>;
};

// TODO: rename to ImageLInks
export default function CategoriesList({ imageLinks }: Props) {

  return (
    <section className="px-5 md:px-8 lg:px-12 py-12 md:16 lg:py-20">
      <ul className="flex overflow-auto gap-2 md:gap-6 no-scrollbar snap-x snap-mandarory">
        {imageLinks.map((imageLink) => (
          <li key={imageLink.name} className="snap-start">
            {/* TODO: move arbitary values to tailwind config */}
            <Link
              href={imageLink.url}
              className="inline-block relative w-[48vw] md:w-[26vw] aspect-square rounded-lg overflow-hidden"
              style={{
                background: imageLink.colors?.background || DEFAULT_BACKGROUND,
              }}
            >
              <Image
                src={urlForImage(imageLink.image)}
                className="hover:scale-105 duration-[1.5s]"
                alt=""
                fill
                aria-hidden
              />
              <span
                className={clsx(
                  "text-sm md:text-base absolute bottom-6 left-5 font-bold"
                )}
                style={{
                  color: imageLink.colors?.textColor || "current",
                }}
              >
                {imageLink.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
