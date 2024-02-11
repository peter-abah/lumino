import { type Rule } from "sanity";

const announcement = {
  name: "announcement",
  type: "document",
  title: "Announcement",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "url",
      type: "string",
      title: "URL",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default announcement;
