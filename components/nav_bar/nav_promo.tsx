import ArrowRight from "@/components/icons/arrow_right_icon";
import useSlideShow from "@/lib/hooks/use_slide_show";
import { urlForImage } from "@/sanity/lib/image";
import { ImageLink, SanityArray } from "@/types/sanity";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: SanityArray<ImageLink>;
};
export default function NavigationPromo({ products }: Props) {
  const { currentIndex, goToNext, goToPrev } = useSlideShow(products.length);

  return (
    <div className="mt-4 relative">
      {products.map((product, index) => (
        <Link
          href={product.url}
          key={product._key}
          className={clsx(
            "group relative aspect-square text-white px-8 py-6 flex items-end rounded-md overflow-hidden",
            currentIndex !== index && "hidden"
          )}
        >
          <span className="text-2xl font-bold max-w-[75%] z-10">{product.name}</span>
          <Image
            src={urlForImage(product.image)}
            fill
            alt=""
            className="group-hover:scale-105 duration-300"
            aria-hidden
          />
        </Link>
      ))}

      <div className="absolute bottom-6 right-8 flex gap-2">
        <button
          type="button"
          aria-label="Go to Previous"
          onClick={goToPrev}
          className="w-7 h-7 bg-white grid place-items-center rounded-full hover:scale-110"
        >
          <ArrowRight className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Go to Next"
          onClick={goToNext}
          className="w-7 h-7 bg-white grid place-items-center rounded-full hover:scale-110"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
