"use client";

import clsx from "clsx";
import Image from "next/image";

const CATEGORIES = [
  { name: "Headphones", link: "#", imageLink: "/images/category-headphones.jpg" },
  { name: "Earphones", link: "#", imageLink: "/images/category-earphones.jpg" },
  { name: "Speakers", link: "#", imageLink: "/images/category-speakers.jpg" },
  {
    name: "Collaborations",
    link: "#",
    imageLink: "/images/category-collaborations.jpg",
    styles: { name: "text-white" },
  },
  { name: "Accessories", link: "#", imageLink: "/images/category-accessories.jpg" },
];

export default function CategoriesList() {
  return (
    <section className="px-12 py-20">
      <ul className="flex overflow-auto gap-6 no-scrollbar snap-x snap-mandatory">
        {CATEGORIES.map((category) => (
          <li key={category.name} className="snap-start">
            {/* TODO: move arbitary values to tailwind config */}
            <a
              href={category.link}
              className="inline-block relative w-[300px] h-[300px] rounded-lg overflow-hidden"
            >
              <Image
                src={category.imageLink}
                className="hover:scale-105 duration-[1.5s]"
                alt=""
                fill
                aria-hidden
              />
              <span className={clsx("absolute bottom-6 left-5 font-bold", category.styles?.name)}>
                {category.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
