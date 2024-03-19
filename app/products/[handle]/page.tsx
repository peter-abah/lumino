import Announcements from "@/components/announcements";
import FeaturedProduct from "@/components/featured_product";
import Footer from "@/components/footer";
import InfoPanel from "@/components/info_panel";
import NavBar from "@/components/nav_bar";
import { getProduct } from "@/lib/shopify";
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
      <Announcements />
      <NavBar />
      <FeaturedProduct product={product} />
      <InfoPanel />
      <Footer />
    </>
  );
}
