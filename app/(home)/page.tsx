import Announcements from "@/components/announcements";
import InfoPanel from "@/components/info_panel";
import NavBar from "@/components/nav_bar";
import { getProducts } from "@/lib/shopify";
import { client } from "@/sanity/lib/client";
import { HomePage as SanityHomePage, SocialLink } from "@/types/sanity";
import { Maybe, Product } from "@/types/shopify";
import FAQ from "./components/FAQ";
import BestSellers from "./components/best_sellers";
import CollectionCards from "./components/collection_cards";
import CompareProducts from "./components/compare_products";
import CompareSection from "./components/compare_section";
import FeaturedProduct from "./components/featured_product";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Hotspots from "./components/hotspots";
import ImageLinks from "./components/image_links";
import ImageReveal from "./components/image_reveal";
import MarqueeText from "./components/marquee_text";
import MediaGrid from "./components/media_grid";
import Reviews from "./components/reviews";
import Spotlight from "./components/spotlight";
import TextWithMultipleImages from "./components/text_with_multiple_images";
import Timeline from "./components/timeline";
import TwoColumnSpotlight from "./components/two_column_spotlight";

const getData = async () => {
  const sanityData = await client.fetch<{
    homePage: SanityHomePage;
    socialLinks: SocialLink[];
  }>(
    `
    {
      'homePage': *[_type == "homePage"][0],
      'socialLinks': *[_type == "socialLink"],
    }
  `
  );

  const homeFeaturedProduct = (
    await getProducts({ query: "tag:homepage-featured-product" })
  )[0] as Maybe<Product>;

  return {
    ...sanityData,
    homeFeaturedProduct,
  };
};

export default async function Home() {
  const { homePage, socialLinks, homeFeaturedProduct } = await getData();

  return (
    <>
      <Announcements />
      <div className="relative">
        <div className="absolute top-0 z-50 w-full">
          <NavBar isTransparent />
        </div>
        <Hero slides={homePage.heroSlides} />
      </div>
      <ImageLinks imageLinks={homePage.imageLinks} />
      <MarqueeText scrollingText={homePage.scrollingText} />
      <CollectionCards collections={homePage.collectionList} />
      <BestSellers />
      <Spotlight spotlight={homePage.spotlight} />
      <MediaGrid gridItems={homePage.mediaGrid} />
      <CompareSection data={homePage.compareSection} />
      <Reviews data={homePage.press} />
      <Hotspots data={homePage.hotspots} />
      <TwoColumnSpotlight data={homePage.twoColumnSpotlight} />
      <TextWithMultipleImages data={homePage.textWithMultipleImages} />
      <FeaturedProduct product={homeFeaturedProduct} />
      <CompareProducts data={homePage.featureChart} />
      <ImageReveal data={homePage.revealedImageOnScroll} />
      <div className="bg-main-bg">
        <Timeline data={homePage.timeline} />
        <FAQ data={homePage.faq} />
        <InfoPanel />
      </div>
      <Footer footer={homePage.footer} socialLinks={socialLinks} />
    </>
  );
}
