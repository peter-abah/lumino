import { type Rule } from "sanity";

const socialLink = {
  name: "socialLink",
  title: "Social Link",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule: Rule) => Rule.required() },
    { name: "url", title: "URL", type: "string", validation: (Rule: Rule) => Rule.required() },
    {
      name: "iconID",
      title: "Icon ID",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default socialLink;
