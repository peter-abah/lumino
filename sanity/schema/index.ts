import { type SchemaTypeDefinition } from "sanity";
import { announcement, navBarData } from "./home";
import { productLink, promoLink, featuredProduct } from "./objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [announcement, navBarData, productLink, promoLink, featuredProduct],
};
