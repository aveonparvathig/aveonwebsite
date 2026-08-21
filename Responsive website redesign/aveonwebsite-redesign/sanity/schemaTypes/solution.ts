import { defineField, defineType } from "sanity";

export const solutionSchema = defineType({
  name: "solution",
  title: "Solution",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "icon", title: "Icon", type: "image" }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: { list: ["university", "college", "school", "corporate"] },
    }),
  ],
});
