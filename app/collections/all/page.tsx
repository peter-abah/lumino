import NavBar from "@/components/nav_bar";
import Products from "@/components/products";
import { getProducts } from "@/lib/shopify";
import { Metadata } from "next";

type Props = {
  params: {
    handle: string;
  };
};
export default async function Page({ params }: Props) {
  const products = await getProducts({});
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-6xl font-bold text-center py-8 md:py-16">All</h1>
      </div>
      <Products products={products} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All",
  };
}
