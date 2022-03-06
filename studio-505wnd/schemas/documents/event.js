import { format } from "date-fns";

export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "eventAt",
      type: "datetime",
      title: "Event date",
      description: "Event Date ",
    },
    {
        name: "location",
        type: "string",
        title: "Location",
        description:
          "This is for place or city of event",
      },
    
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    
    {
      name: "body",
      title: "Body",
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
        name: "categories",
        type: "array",
        title: "Categories",
        of: [
          {
            type: "reference",
            to: {
              type: "category",
            },
          },
        ],
      },
  ],
  orderings: [
    {
      name: "eventAtAsc",
      title: "Event date new–>old",
      by: [
        {
          field: "eventAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "eventDateDesc",
      title: "Event date old->new",
      by: [
        {
          field: "eventAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      eventAt: "eventAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", eventAt, slug = {}, media }) {
      const dateSegment = format(new Date(eventAt), "yyyy/MM");
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: eventAt ? path : "Missing event date",
      };
    },
  },
};
