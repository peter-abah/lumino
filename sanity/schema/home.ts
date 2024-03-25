import { type Rule } from "sanity";

const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "heroSlides",
      title: "Hero Slides",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [{ type: "heroSlide" }],
    },
    {
      name: "imageLinks",
      title: "Image Links",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [{ type: "imageLink" }],
    },
    {
      name: "scrollingText",
      title: "Scrolling Text",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "collectionList",
      title: "Collection List",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [{ type: "imageLink" }],
    },
    {
      name: "spotlight",
      title: "Spotlight",
      type: "spotlight",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "mediaGrid",
      title: "Media Grid",
      type: "array",
      validation: (Rule: Rule) => Rule.required().length(4),
      of: [{ type: "imageLink" }],
    },
    {
      name: "compareSection",
      title: "Compare Product",
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
          name: "beforeText",
          title: "Before text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "beforeImage",
          title: "Before image",
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
          name: "afterText",
          title: "After text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "afterImage",
          title: "After image",
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
    },
    {
      name: "press",
      title: "Press",
      type: "array",
      validation: (Rule: Rule) => Rule.required().min(1),
      of: [{ type: "quote" }],
    },
    {
      name: "hotspots",
      title: "Hotspots",
      type: "object",
      fields: [
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
          name: "mobileImage",
          title: "Mobile image",
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
        {
          name: "hotspots",
          title: "Hotspots",
          type: "array",
          validation: (Rule: Rule) => Rule.required().min(1),
          of: [{ type: "hotspot" }],
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "twoColumnSpotlight",
      title: "Spotlight (Two Column)",
      type: "array",
      validation: (Rule: Rule) => Rule.required().length(2),
      of: [{ type: "spotlight" }],
    },
    {
      name: "textWithMultipleImages",
      title: "Text with multiple images",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: "textWithMultipleImagesItem",
          title: "Text with multiple images item",
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
              name: "image",
              title: "Image",
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
        },
      ],
    },
    {
      name: "featureChart",
      title: "Feature Chart",
      type: "featureChart",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "revealedImageOnScroll",
      title: "Revealed Image On Scroll",
      type: "object",
      validation: (Rule: Rule) => Rule.required(),
      fields: [
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
      ],
    },
    {
      name: "timeline",
      title: "Timeline",
      type: "timeline",
    },
    {
      name: "faq",
      title: "FAQ",
      type: "object",
      validation: (Rule: Rule) => Rule.required(),
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
        },
        {
          name: "content",
          title: "Content",
          type: "text",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "supportOperatingHoursText",
          title: "Support operating hours text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "avgResponseTimeText",
          title: "Average response time text",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: "teamAvatar",
          title: "Image",
          type: "image",
          description: "700 X 160px .jpg recommended",
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
          name: "questions",
          title: "Questions",
          type: "array",
          validation: (Rule: Rule) => Rule.required(),
          of: [
            {
              name: "question",
              title: "Question",
              type: "object",
              fields: [
                {
                  name: "question",
                  title: "Question",
                  type: "string",
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: "answer",
                  title: "Answer",
                  type: "string",
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  initialValue: {
    name: "Home Page",
  },
};

export default homePage;
