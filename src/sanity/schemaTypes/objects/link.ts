import { defineType, defineField } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url"
    })
  ]
});
