import CartIcon from "@/components/icons/cart_icon";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const CartButton = forwardRef<HTMLButtonElement>(function CartButton(
  { className, ...restProps }: ComponentProps<"button">,
  ref
) {
  return (
    <button
      className={twMerge("hover:scale-105 inline-block", className)}
      aria-label="Open Cart"
      {...restProps}
      ref={ref}
    >
      <CartIcon />
    </button>
  );
});

export default CartButton;
