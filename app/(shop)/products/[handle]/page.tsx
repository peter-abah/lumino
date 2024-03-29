import FeaturedProduct from "@/components/featured_product";
import NavBar from "@/components/nav_bar";
import { getProduct } from "@/lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    handle: string;
  };
};
export default async function Page({ params }: Props) {
  const { handle } = params;

  const product = await getProduct(handle);
  if (!product) return notFound();

  return (
    <>
      <NavBar />
      <FeaturedProduct product={product} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params;

  const product = await getProduct(handle);

  return {
    title: product?.title || "Not found",
  };
}
