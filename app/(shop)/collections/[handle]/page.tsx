import NavBar from "@/components/nav_bar";
import Products from "@/components/products";
import { getCollection, getCollectionProducts } from "@/lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "../components/hero";

type Props = {
  params: {
    handle: string;
  };
};
export default async function Page({ params }: Props) {
  const { handle } = params;
  const collection = await getCollection(handle);
  if (!collection) return notFound();

  const products = await getCollectionProducts({ collection: collection.handle });

  return (
    <>
      <NavBar />
      <Hero collection={collection} />
      <Products products={products} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params;

  const collection = await getCollection(handle);

  return {
    title: collection?.title || "Not found",
  };
}
