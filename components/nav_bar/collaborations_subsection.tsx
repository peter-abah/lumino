import { formatPriceToUserLocale } from "@/lib";
import { BLUR_DATA_URL } from "@/lib/constants";
import { urlForImage } from "@/sanity/lib/image";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";
import ArrowDownIcon from "../icons/arrow_down_icon";
import { NavBarData } from "./nav_bar";

type Props = {
  data: NavBarData;
  handleMenuChange: (open: boolean) => void;
  containerRef: RefObject<HTMLDivElement>;
};
export default function CollaborationsSubsection({ data, handleMenuChange, containerRef }: Props) {
  const { newCollaborations, collaborationsPromoProducts, collaborationsFeaturedProduct } = data;

  return (
    <Dialog.Root modal onOpenChange={handleMenuChange}>
      <Dialog.Trigger asChild>
        <button type="button" className="flex gap-2.5 items-center hover:opacity-70">
          Collaboration <ArrowDownIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal container={containerRef.current}>
        <Dialog.Content className="absolute top-full w-full z-50 border-t-[1px] py-10 shadow-overlay bg-main-bg text-text flex gap-12 px-12 max-h-[calc(100vh_-_96px_-_20px)] justify-between overflow-y-auto overflow-x-hidden data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut">
          {/* New Collaborations */}
          <div className="min-w-[240px]">
            <h3 className="mb-4">New</h3>
            <ul className="flex flex-col gap-2">
              {newCollaborations.map((newCollaboration) => (
                <li key={newCollaboration._key}>
                  <Link
                    href={newCollaboration.url}
                    className="font-bold text-xl fancy-hover-underline"
                  >
                    {newCollaboration.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/collections/all" className="font-bold text-xl fancy-hover-underline">
                  View all
                </Link>
              </li>
            </ul>
          </div>

          {/* Collaboration Promo products */}
          <div>
            <div className="grid grid-cols-[repeat(3,300px)] gap-4">
              {collaborationsPromoProducts.map((product) => (
                <Link
                  key={product._key}
                  href={product.url}
                  className="relative aspect-square p-8 flex items-end rounded-md overflow-hidden group"
                >
                  <span className="font-bold text-2xl z-10 text-white">{product.name}</span>
                  <Image
                    src={urlForImage(product.image)}
                    fill
                    alt=""
                    aria-hidden
                    blurDataURL={BLUR_DATA_URL}
                    placeholder="blur"
                    className="group-hover:scale-110"
                  />
                </Link>
              ))}

              {/* Product card */}
              {collaborationsFeaturedProduct && (
                <div className="rounded-md p-8 bg-white">
                  <Link
                    href={`/products/${collaborationsFeaturedProduct.handle}`}
                    className="flex justify-center mx-9 mb-4"
                  >
                    <Image
                      src={collaborationsFeaturedProduct.featuredImage.url}
                      alt={collaborationsFeaturedProduct.featuredImage.altText}
                      width={160}
                      height={160}
                      aria-hidden
                      blurDataURL={BLUR_DATA_URL}
                      placeholder="blur"
                    />
                  </Link>
                  <div className="flex flex-col gap-0.5 text-center">
                    <Link
                      href={`/products/${collaborationsFeaturedProduct.handle}`}
                      className="font-bold"
                    >
                      {collaborationsFeaturedProduct.title}
                    </Link>
                    <span className="text-text/70 flex justify-center gap-1">
                      <span>
                        {collaborationsFeaturedProduct.priceRange.maxVariantPrice.currencyCode}
                      </span>
                      <span>
                        {formatPriceToUserLocale(
                          collaborationsFeaturedProduct.priceRange.maxVariantPrice.amount
                        )}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
