import Announcements from "./components/announcements";
import BestSellers from "./components/best_sellers";
import CategoriesList from "./components/categories_list";
import CollectionCards from "./components/collection_cards";
import Hero from "./components/hero";
import ProductShowcase from "./components/product_showcase";
import MarqueeText from "./components/marquee_text";
import NavBar from "./components/nav_bar";
import { NavBarStickyProvider } from "./contexts/nav_bar_sticky_context";
import CollectionsMediaGrid from "./components/collections_media_grid";
import SliderSection from "./components/slider_section";
import Reviews from "./components/reviews";
import ProductShowcaseWithHotspots from "./components/product_showcase_with_hotspots";
import AboutUs from "./components/about_us";

export default function Home() {
  return (
    <>
      <Announcements />
      <NavBarStickyProvider>
        <div className="relative">
          <NavBar />
          <Hero />
        </div>
        <CategoriesList />
      </NavBarStickyProvider>
      <MarqueeText />
      <CollectionCards />
      <BestSellers />
      <ProductShowcase />
      <CollectionsMediaGrid />
      <SliderSection />
      <Reviews />
      <ProductShowcaseWithHotspots />
      <AboutUs />
    </>
  );
}
