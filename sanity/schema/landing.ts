import { type Rule } from "sanity";

export const announcement = {
  name: "announcement",
  type: "document",
  title: "Announcement",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Text",
    },
    {
      name: "url",
      type: "string",
      title: "Link",
    },
  ],
};

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

export const navBarData = {
  name: "navBarData",
  type: "document",
  title: "Nav Bar Data",
  fields: [
    {
      name: "Name",
      type: "string",
      initialValue: "Main NavBar Data",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "headphonesLinks",
      title: "Headphones Links",
      type: "array",
      of: [{ type: "productLink" }],
    },
    {
      name: "earphonesLinks",
      title: "Earphones Links",
      type: "array",
      of: [{ type: "productLink" }],
    },
    {
      name: "shopPromoProducts",
      title: "Shop Promo Products",
      type: "array",
      of: [{ type: "promoLink" }],
    },
    {
      name: "collaborationsPromoProducts",
      title: "Collaborations Promo Products",
      type: "array",
      of: [{ type: "promoLink" }],
    },
    {
      name: "newCollaborations",
      title: "New Collaborations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "url", type: "string", title: "Url" },
          ],
        },
      ],
    },
    {
      name: "collaborationsFeaturedProduct",
      title: "Collaborations Featured Product",
      type: "featuredProduct",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
