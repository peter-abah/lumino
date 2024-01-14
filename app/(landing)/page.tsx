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

export default function Home() {
  return (
    <>
      <Announcements />
      <div className="relative">
        <NavBar />
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
