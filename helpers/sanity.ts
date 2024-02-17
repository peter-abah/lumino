export interface AssetData {
  id: string;
  width: number;
  height: number;
  format: string;
}

// Parses image asset id to get asset data
// Adapted from `parseAssetId.js` in `@sanity/image-url` package
const EXAMPLE = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
export function parseAssetID(ref: string): AssetData {
  let [_, id, dimensionString, format] = ref.split("-");
  if (!id || !dimensionString || !format) {
    throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${EXAMPLE}".'`);
  }

  let [imgWidthStr, imgHeightStr] = dimensionString.split("x");

  let width = Number(imgWidthStr);
  let height = Number(imgHeightStr);
  let isValidAssetId = isFinite(width) && isFinite(height);

  if (!isValidAssetId) {
    throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${EXAMPLE}".'`);
  }

  return { id, width, height, format };
}
