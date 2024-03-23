import Link from "next/link";
import CartIcon from "../icons/cart_icon";
import CloseButton from "./close_button";

export default function EmptyCart() {
  return (
    <div className="flex flex-col justify-center h-full relative p-10">
      <CloseButton className="absolute right-0 top-0" />
      <div className="flex flex-col items-center">
      <CartIcon width={48} height={48} />
        <p className="text-lg md:text-xl font-bold mt-8">Your cart is empty</p>
        <Link href="/collections/all" className="bg-black text-white rounded-button py-4 px-10 font-bold mt-8">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
