export function convertStringToTitleCase(str: string) {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(" ");
}
