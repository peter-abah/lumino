import ArrowLeftCircleIcon from "@/components/icons/arrow_left_circle_icon";
import { BLUR_DATA_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/lib/image";
import { ImageLink, SanityArray } from "@/types/sanity";
import Image from "next/image";

type Props = {
  collections: SanityArray<ImageLink>;
};

// TODO: Show arrow on hover
export default function CollectionCards({ collections }: Props) {
  return (
    <section className="px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20 ">
      <div className="overflow-x-scroll no-scrollbar">
        <ul className="grid grid-cols-[repeat(3,72vw)] md:grid-cols-[repeat(3,36vw)] lg:grid-cols-[repeat(3,28vw)] gap-6 snap-x snap-mandatory">
          {collections.map((collection) => (
            <li
              key={collection._key}
              className="relative aspect-[9/10] rounded-md overflow-hidden snap-center snap-always"
            >
              <a
                href={collection.url}
                className=" h-full text-white text-2xl md:text-[2rem] font-bold p-5 lg:p-12 flex flex-col justify-end group"
              >
                <Image
                  src={urlForImage(collection.image)}
                  alt=""
                  aria-hidden
                  blurDataURL={BLUR_DATA_URL}
                  placeholder="blur"
                  fill
                  className="group-hover:scale-105 duration-500 ease-out"
                />

                <div className="flex flex-col gap-3 z-10">
                  <ArrowLeftCircleIcon className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative leading-tight">{collection.name}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
