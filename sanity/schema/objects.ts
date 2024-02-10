import { type Rule } from "sanity";

export const promoLink = {
  name: "promoLink",
  title: "Promo Link",
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
  ],
};

export const productLink = {
  name: "productLink",
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
