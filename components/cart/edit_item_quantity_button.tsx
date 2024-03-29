"use client";

import { updateItemQuantity } from "@/components/cart/actions";
import MinusIcon from "@/components/icons/minus_icon";
import PlusIcon from "@/components/icons/plus_icon";
import LoadingDots from "@/components/loading_dots";
import { CartItem } from "@/types/shopify";
import clsx from "clsx";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton({ type }: { type: "plus" | "minus" }) {
  const { pending } = useFormStatus();

  const buttonClasses =
    "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:scale-125";
  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={type === "plus" ? "Increase item quantity" : "Reduce item quantity"}
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        "cursor-not-allowed": pending,
        "ml-auto": type === "minus",
      })}
    >
      {pending ? (
        <LoadingDots className="bg-black" />
      ) : type === "plus" ? (
        <PlusIcon />
      ) : (
        <MinusIcon />
      )}
    </button>
  );
}

export function EditItemQuantityButton({ item, type }: { item: CartItem; type: "plus" | "minus" }) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const payload = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form action={actionWithVariant}>
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
