import NavBar from "@/components/nav_bar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="py-40 md:py-80 flex flex-col items-center relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Page not found</h2>
        <Link href="/collections/all" className="font-bold bg-black text-white px-10 py-4.5 rounded-button">
          Continue Shopping
        </Link>
        <p
          aria-hidden
          className="absolute font-bold opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[400px]"
        >
          404
        </p>
      </div>
    </>
  );
}
