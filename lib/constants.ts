import MapWithDefault, { DEFAULT } from "./map_with_default";

export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";

export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};

export const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";

// Maps color option to value
export const SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND = new MapWithDefault<string, string>([
  [DEFAULT, "linear-gradient(135deg, black 50%, lightgrey 50%)"],
  ["Silver Metal / Burgundy Coated Canvas", "#461A1B"],
  ["Silver Metal / Brown Coated Canvas", "#B87550"],
  ["Silver Metal / Navy Coated Canvas", "#1C293B"],
]);

export const BLUR_DATA_URL =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNsXQsAAb0BNOcBLYcAAAAASUVORK5CYII=";
