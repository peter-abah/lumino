import { type SchemaTypeDefinition } from "sanity";
import announcement from "./announcement";
import homePage from "./home";
import infoPanel from "./info_panel";
import navBarData from "./nav_bar";
import socialLink from "./social_link";

import {
  featureChart,
  featuredProduct,
  heroSlide,
  hotspot,
  imageLink,
  linkWithIcon,
  menu,
  newsletter,
  quote,
  spotlight,
  timeline,
} from "./objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document schemas
    announcement,
    socialLink,
    navBarData,
    homePage,
    infoPanel,

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
