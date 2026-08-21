import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
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
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Short Description", type: "text" }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "icon", title: "Icon", type: "image" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "ERP", value: "erp" },
          { title: "LMS", value: "lms" },
          { title: "Management", value: "management" },
        ],
      },
    }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["active", "inactive", "coming-soon"] },
      initialValue: "active",
    }),
  ],
});
