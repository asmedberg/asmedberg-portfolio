import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectImage",
  title: "Project Image",
  type: "image",
  fields: [
    defineField({
      name: "altText",
      title: "Alternative Text",
      type: "string"
    })
  ]
});
