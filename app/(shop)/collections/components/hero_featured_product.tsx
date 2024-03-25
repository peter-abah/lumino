import { formatPriceToUserLocale } from "@/lib";
import { BLUR_DATA_URL } from "@/lib/constants";
import { Product } from "@/types/shopify";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};
export default function HeroFeaturedProduct({ product }: Props) {
  return (
    <div className="absolute bottom-12 right-12 w-72 text-white hidden lg:block">
      <p className="absolute z-0 right-0 bottom-full py-1.5 px-4 text-xs font-bold rounded-t bg-text/20 backdrop:blur-3xl">
        Featured Product
      </p>

      <Link
        href={`/products/${product.handle}`}
        className="flex rounded rounded-tr-none gap-5 p-4 items-center bg-text/20 backdrop:blur-3xl"
      >
        <Image
          src={product.featuredImage.url}
          width={64}
          height={64}
          alt={product.featuredImage.altText}
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
        />
        <div className="text-sm flex flex-col gap-0.5">
          <p className="font-bold">
            {product.title} ({product.variants[0].title})
          </p>
          <p className="text-white/70">
            <span>{product.priceRange.maxVariantPrice.currencyCode}</span>
            <span>{formatPriceToUserLocale(product.variants[0].price.amount)}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
