import { ProductVariant } from "@/types/shopify";

export function convertStringToTitleCase(str: string) {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(" ");
}

export function nullFunction() {
  return null;
}

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

export function formatPriceToUserLocale(priceString: string) {
  const priceNumber = parseFloat(priceString);

  // Format the number according to the user's locale
  const formattedPrice = priceNumber.toLocaleString();

  return formattedPrice;
}

export function getVariantOption(variant: ProductVariant, option: string) {
  return variant.selectedOptions.find(({ name }) => name === option);
}
