import { type Rule } from "sanity";

export const imageLink = {
  name: "imageLink",
  title: "Image Link",
  type: "object",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "url", type: "string", title: "Url" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "colors",
      title: "Colors",
      type: "object",
      fields: [
        {
          name: "textColor",
          title: "Text Color",
          description: "Must be a valid CSS color",
          type: "string",
        },
        {
          name: "background",
          title: "Background",
          description: "Must be a valid CSS color",
          type: "string",
        },
      ],
    },
  ],
};

export const linkWithIcon = {
  name: "linkWithIcon",
  title: "Link With Icon",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "url",
      type: "string",
      title: "Url",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "imageIcon",
      title: "Image Icon",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export const featuredProduct = {
  name: "featuredProduct",
  title: "Featured Product",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "url",
      type: "string",
      title: "Url",
      validation: (Rule: Rule) => Rule.required(),
    },

    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export const heroSlide = {
  name: "heroSlide",
  title: "Hero Slide",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "buttonURL",
      title: "Button URL",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "colors",
      title: "Colors",
      type: "object",
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: "backgroundGradient",
          title: "Background Gradient",
          type: "string",
          description: "Value should be a valid CSS gradient.",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "buttonBackground",
          title: "Button Background",
          type: "string",
          description: "Value should be a valid CSS color.",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "buttonTextColor",
          title: "Button Text Color",
          type: "string",
          description: "Value should be a valid CSS color.",
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
  ],
};

export const spotlight = {
  name: "spotlight",
  title: "Spotlight",
  type: "object",
  validation: (Rule: Rule) => Rule.required(),
  fields: [
    {
      name: "spotlightText",
      title: "Spotlight Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonURL",
      title: "Button URL",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export const quote = {
  name: "quote",
  title: "Quote",
  type: "object",
  fields: [
    {
      name: "quote",
      type: "string",
      title: "Quote",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule: Rule) => Rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export const hotspot = {
  name: "hotspot",
  title: "Hotspot",
  type: "object",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      type: "text",
      title: "Content",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "xPosition",
      type: "number",
      title: "X Position",
      description:
        "Horizontal position of hotspot on image. Value is in percentage",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "xPositionMobile",
      type: "number",
      title: "X Position (Mobile)",
      description:
        "Horizontal position of hotspot on mobile image. Value is in percentage",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "yPosition",
      type: "number",
      title: "Y Position",
      description:
        "Vertical position of hotspot on image. Value is in percentage",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "yPositionMobile",
      type: "number",
      title: "Y Position (Mobile)",
      description:
        "Vertical position of hotspot on mobile image. Value is in percentage",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export const featureChart = {
  name: "featureChart",
  title: "Feature Chart",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "buttonURL",
      title: "Button URL",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "headings",
      title: "Row headings",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule: Rule) => Rule.required().min(1),
        },
      ],
    },
    {
      name: "valuesColumns",
      title: "Values Columns",
      type: "array",
      validation: (Rule: Rule) => Rule.required().min(2).max(3),
      of: [
        {
          name: "values",
          title: "Values",
          type: "object", // Using an object because sanity doesn't currently support nested arrays
          fields: [
            { name: "productSKU", type: "string", title: "Product SKU" },
            {
              name: "array",
              type: "array",
              validation: (Rule: Rule) => Rule.required().min(1),
              of: [
                {
                  name: "value",
                  title: "value",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const timeline = {
  name: "timeline",
  title: "Timeline",
  type: "array",
  validation: (Rule: Rule) => Rule.required().min(1),
  of: [
    {
      name: "timelineSlide",
      title: "Timeline Slide",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "subheading",
          title: "Subheading",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "content",
          title: "Content",
          type: "text",
        },
        {
          name: "navLabel",
          title: "Navigation Label",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          validation: (Rule: Rule) => Rule.required(),
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export const newsletter = {
  name: "newsletter",
  title: "Title",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export const menu = {
  name: "menu",
  title: "Menu",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
