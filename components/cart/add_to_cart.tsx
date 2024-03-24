"use client";

import { addItem } from "@/components/cart/actions";
import { SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND } from "@/lib/constants";
import { ProductVariant } from "@/types/shopify";
import clsx from "clsx";
import { useMemo } from "react";
import { useFormState, useFormStatus } from "react-dom";
import LoadingDots from "../loading_dots";

function SubmitButton({
  availableForSale,
  selectedVariantId,
  variants,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  variants: ProductVariant[];
}) {
  const { pending } = useFormStatus();

  const selectedVariant = useMemo(
    () => variants.find((v) => v.id === selectedVariantId),
    [selectedVariantId, variants]
  );
  const buttonStyle = {
    background: SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND.get(selectedVariant?.title || ""),
  };
  const buttonClasses =
    "px-8 md:px-10 py-4 md:py-4.5 w-full max-w-72 mx-auto rounded-button grid place-items-center text-white bg-black w-full font-bold text-sm md:text-base";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)} style={buttonStyle}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
        style={buttonStyle}
      >
        Add To Cart
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      style={buttonStyle}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        "hover:opacity-90": true,
        disabledClasses: pending,
      })}
    >
      {pending ? <LoadingDots className="my-auto bg-white" /> : <span>Add To Cart</span>}
    </button>
  );
}

export default function AddToCart({
  availableForSale,
  selectedVariantID,
  variants,
  quantity,
}: {
  availableForSale: boolean;
  selectedVariantID: string;
  variants: ProductVariant[];
  quantity: number;
}) {
  const [message, formAction] = useFormState(addItem, null);

  const actionWithVariant = formAction.bind(null, [selectedVariantID, quantity]);

  return (
    <form action={actionWithVariant} className="w-full">
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantID} variants={variants} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>  
    </form>
  );
}
