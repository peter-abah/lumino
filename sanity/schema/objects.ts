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
