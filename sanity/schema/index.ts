import { type SchemaTypeDefinition } from "sanity";
import homePage from "./home";
import announcement from "./announcement";
import navBarData from "./nav_bar";
import socialLink from "./social_link";

import {
  linkWithIcon,
  imageLink,
  featuredProduct,
  heroSlide,
  hotspot,
  spotlight,
  quote,
  featureChart,
  timeline,
  newsletter,
  menu,
} from "./objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document schemas
    announcement,
    socialLink,
    navBarData,
    homePage,

    // Object schemas
    linkWithIcon,
    imageLink,
    featuredProduct,
    heroSlide,
    hotspot,
    spotlight,
    quote,
    featureChart,
    timeline,
    newsletter,
    menu,
  ],
};
