import Announcements from "./components/announcements";
import BestSellers from "./components/best_sellers";
import CategoriesList from "./components/categories_list";
import CollectionCards from "./components/collection_cards";
import Hero from "./components/hero";
import ProductShowcase from "./components/product_showcase";
import MarqueeText from "./components/marquee_text";
import NavBar from "./components/nav_bar";
import CollectionsMediaGrid from "./components/collections_media_grid";
import SliderSection from "./components/slider_section";
import Reviews from "./components/reviews";
import ProductShowcaseWithHotspots from "./components/product_showcase_with_hotspots";
import AboutUs from "./components/about_us";
import FeaturedProduct from "./components/featured_product";
import CompareProducts from "./components/compare_products";
import ImageReveal from "./components/image_reveal";
import Story from "./components/story";
import FAQ from "./components/FAQ";
import AdditionalBenefits from "./components/additional_benefits";
import Footer from "./components/footer";
import { client } from "@/sanity/lib/client";
import { Announcement, NavBarData, SanityArray } from "../types/definition";

const getData = async () => {
  const data = await client.fetch<{
    navBarData: NavBarData;
    announcements: SanityArray<Announcement>;
  }>(
    `
    {
      'navBarData': *[_type == "navBarData"][0],
      'announcements': *[_type == "announcement"]
    }
  `,
  );
  return data;
};

export default async function Home() {
  const { announcements, navBarData } = await getData();

  return (
    <>
      <Announcements announcements={announcements} />
      <div className="relative">
        <NavBar data={navBarData} />
        <Hero />
      </div>
      <CategoriesList />
      <MarqueeText />
      <CollectionCards />
      <BestSellers />
      <ProductShowcase />
      <CollectionsMediaGrid />
      <SliderSection />
      <Reviews />
      <ProductShowcaseWithHotspots />
      <AboutUs />
      <FeaturedProduct />
      <CompareProducts />
      <ImageReveal />
      <div className="bg-main-bg">
        <Story />
        <FAQ />
        <AdditionalBenefits />
      </div>
      <Footer />
    </>
  );
}
