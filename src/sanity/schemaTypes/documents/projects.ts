import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "projectContent",
      title: "Project Content",
      type: "blockContent"
    }),
    defineField({
      name: "assets",
      title: "Assets",
      type: "array",
      of: [defineArrayMember({ type: "projectImage" }), defineArrayMember({ type: "projectVideo" })]
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [defineArrayMember({ type: "link" })]
    })
  ]
});
