import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectVideo",
  title: "Project Video",
  type: "file",
  fields: [
    defineField({
      name: "discription",
      title: "Description",
      type: "string"
    })
  ]
});
