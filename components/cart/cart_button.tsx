import CartIcon from "@/components/icons/cart_icon";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {
  quantity?: number;
}
const CartButton = forwardRef<HTMLButtonElement, Props>(function CartButton(
  { className, quantity, ...restProps },
  ref
) {
  return (
    <button
      className={twMerge("hover:scale-105 inline-block relative", className)}
      aria-label="Open Cart"
      {...restProps}
      ref={ref}
    >
      <CartIcon />
      {quantity && (
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-[9px] font-bold grid place-items-center rounded-full">
          {quantity}
        </span>
      )}
    </button>
  );
});

export default CartButton;
