import { type SchemaTypeDefinition } from "sanity";
import { announcement, navBarData, homePage } from "./home";
import { productLink, promoLink, featuredProduct, heroSlide } from "./objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    announcement,
    navBarData,
    homePage,
    productLink,
    promoLink,
    featuredProduct,
    heroSlide,
  ],
};
