import MapWithDefault from "./map_with_default";

export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";

export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};

export const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";

// Maps color option to value
// TODO: add color options or move to sanity CMS
export const SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND = new MapWithDefault<string, string>(
  "linear-gradient(135deg, black 50%, lightgrey 50%)"
);
