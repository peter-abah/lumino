import { type SchemaTypeDefinition } from "sanity";
import {
  announcement,
  navBarData,
  productLink,
  promoLink,
  featuredProduct,
} from "./landing";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [announcement, navBarData, productLink, promoLink, featuredProduct],
};
