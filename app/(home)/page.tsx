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
import {
  Announcement,
  NavBarData,
  HomePage as SanityHomePage,
  SocialLink,
} from "../../types/sanity";
import TwoColumnSpotlight from "./components/two_column_spotlight";

const getData = async () => {
  const data = await client.fetch<{
    navBarData: NavBarData;
    announcements: Announcement[];
    homePage: SanityHomePage;
    socialLinks: SocialLink[];
  }>(
    `
    {
      'navBarData': *[_type == "navBarData"][0],
      'announcements': *[_type == "announcement"],
      'homePage': *[_type == "homePage"][0],
      'socialLinks': *[_type == "socialLink"],
    }
  `
  );
  return data;
};

export default async function Home() {
  const { announcements, navBarData, homePage, socialLinks } = await getData();

  return (
    <>
      <Announcements announcements={announcements} />
      <div className="relative">
        <NavBar data={navBarData} />
        <Hero slides={homePage.heroSlides} />
      </div>
      {/* TODO: Rename to Image links */}
      <CategoriesList imageLinks={homePage.imageLinks} />
      <MarqueeText scrollingText={homePage.scrollingText} />
      <CollectionCards collections={homePage.collectionList} />
      <BestSellers />
      {/* TODO: rename to spotlight */}
      <ProductShowcase spotlight={homePage.spotlight} />
      {/* TODO: rename to media grid */}
      <CollectionsMediaGrid gridItems={homePage.mediaGrid} />

      {/* TODO: ranme to compare section */}
      <SliderSection data={homePage.compareSection} />
      <Reviews data={homePage.press} />

      {/* TODO: rename to Hotspots */}
      <ProductShowcaseWithHotspots data={homePage.hotspots} />
      <TwoColumnSpotlight data={homePage.twoColumnSpotlight} />
      {/* TODO: Rename to text with multiple images */}
      <AboutUs data={homePage.textWithMultipleImages} />
      <FeaturedProduct />
      {/* TODO: rename */}
      <CompareProducts data={homePage.featureChart} />
      <ImageReveal data={homePage.revealedImageOnScroll} />
      <div className="bg-main-bg">
        {/* TODO: Rename to Timeline */}
        <Story data={homePage.timeline} />
        <FAQ data={homePage.faq} />
        {/* TODO: Rename to TextWithICons */}
        <AdditionalBenefits data={homePage.textWithIcons} />
      </div>
      <Footer footer={homePage.footer} socialLinks={socialLinks} />
    </>
  );
}
