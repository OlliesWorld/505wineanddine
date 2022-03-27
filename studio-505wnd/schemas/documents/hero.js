export default {
    name: "hero",
    type: "document",
    title: "Hero",
    description: "Image at the top of the home page",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Title of Hero section, ie Fall Hero or Specials Hero",
        maxLength: 96,
      },
    {
        name: "leftImage",
        type: "image",
        title: "Left image",
      },
      {
        name: "leftImageCaption",
        type: "string",
        title: "Left image Caption",
        maxLength: 56,
      },
      {
        name: "centerImage",
        type: "image",
        title: "Center image",
      },
      {
        name: "centerImageCaption",
        type: "string",
        title: "Center image Caption",
      },
      {
        name: "rightImage",
        type: "image",
        title: "Right image",
      },
      {
        name: "rightImageCaption",
        type: "string",
        title: "Right image Caption",
      },
    ],
    preview: {
      select: {
        title: "title",
      
      },
     
    },
  };