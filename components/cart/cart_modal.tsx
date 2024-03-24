"use client";

import { formatPriceToUserLocale } from "@/lib";
import { BLUR_DATA_URL } from "@/lib/constants";
import { Cart, CartItem as ICartItem } from "@/types/shopify";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CartButton from "./cart_button";
import CloseButton from "./close_button";
import { DeleteItemButton } from "./delete_item_button";
import { EditItemQuantityButton } from "./edit_item_quantity_button";
import EmptyCart from "./empty_cart";

type Props = {
  cart: Cart | undefined;
};

export default function CartModal({ cart }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={quantityRef.current} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 z-50 fixed inset-0 h-screen" />
        <Dialog.Content className="fixed z-[100] p-4 w-full h-full max-w-[680px] right-0 top-0 data-[state=open]:animate-scaleXOpen data-[state=closed]:animate-scaleXClose origin-right">
          <div className="bg-white rounded-md h-full">
            {!cart || cart.totalQuantity === 0 ? (
              <EmptyCart />
            ) : (
              <div className="flex flex-col h-full">
                <div className="flex flex-col p-10 overflow-y-auto">
                  <div className="flex justify-between border-b-4 pb-4 border-black">
                    <h2 className="flex gap-2.5">
                      <span className="text-xl font-bold">Cart</span>
                      <div className="rounded-full w-6 h-6 bg-black text-white grid place-items-center text-xs font-bold leading-none">
                        {cart.totalQuantity}
                      </div>
                    </h2>

                    <CloseButton />
                  </div>

                  <ul>
                    {cart.lines.map((cartItem) => (
                      <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))}
                  </ul>
                </div>

                <div className="p-10 border-t shrink-0 mt-auto">
                  <p className="text-xl font-bold flex justify-between pb-6">
                    <span>Total</span>
                    <span>
                      {cart.cost.subtotalAmount.currencyCode}{" "}
                      {formatPriceToUserLocale(cart.cost.subtotalAmount.amount)}
                    </span>
                  </p>

                  <a
                    href={cart.checkoutUrl}
                    className="bg-black text-white hover:opacity-70 transition-opacity duration-500 font-bold rounded-button px-10 py-4.5 flex justify-center max-w-72 w-full mx-auto"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CartItem({ cartItem }: { cartItem: ICartItem }) {
  const { product, selectedOptions } = cartItem.merchandise;
  const image = product.featuredImage;
  const price = cartItem.cost.totalAmount;
  const optionsText = selectedOptions.map((option) => option.value).join(" / ");

  return (
    <li className="flex items-center gap-5 pt-6">
      <div className="w-24 relative h-24">
        <Image
          src={image.url}
          alt={image.altText}
          fill
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
        />
      </div>

      <div className="grow">
        <Link className="font-bold fancy-hover-underline" href={`/products/${product.handle}`}>
          {product.title}
        </Link>
        <p className="flex gap-1 text-text/70">
          <span>{price.currencyCode}</span>
          <span>{formatPriceToUserLocale(price.amount)}</span>
        </p>
        <p className="text-text/70 text-sm">{optionsText}</p>
      </div>

      <div className="flex flex-col items-center gap-2 text-sm text-text/70">
        <div className="rounded-lg flex px-5 py-3 border gap-2 items-center">
          <EditItemQuantityButton type="minus" item={cartItem} />
          <span className="font-bold leading-none">{cartItem.quantity}</span>
          <EditItemQuantityButton type="plus" item={cartItem} />
        </div>

        <DeleteItemButton item={cartItem} />
      </div>
    </li>
  );
}
