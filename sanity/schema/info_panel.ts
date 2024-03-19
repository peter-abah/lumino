import { type Rule } from "sanity";

const infoPanel = {
  name: "infoPanel",
  title: "Info Panel",
  type: "document",
  fields: [
    {
      name: "infoList",
      description: "Info List",
      type: "array",
      validation: (Rule: Rule) => Rule.min(1).max(5),
      of: [
        {
          name: "textWithIcon",
          title: "Text with icon",
          type: "object",
          fields: [
            {
              name: "iconID",
              title: "Icon ID",
              type: "string",
              description:
                "Used in code to display appropriate icon, (TODO: include available icon IDs)",
            },
            {
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "content",
              title: "Content",
              type: "text",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};

export default infoPanel;
