import { type Rule } from "sanity";

const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "newsletter",
      title: "Newsletter",
      type: "newsletter",
    },
    {
      name: "menus",
      title: "Menus",
      type: "array",
      of: [{ type: "menu" }],
    },
    {
      name: "copywright",
      title: "Copywright",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [{ type: "block" }],
    },
  ],
};

export default footer;
