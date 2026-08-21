import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "institution", title: "Institution / Company", type: "string" }),
    defineField({
      name: "text",
      title: "Testimonial",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
