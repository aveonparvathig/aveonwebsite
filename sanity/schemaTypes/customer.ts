import { defineField, defineType } from "sanity";

export const customerSchema = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Institution or company name shown in the 'Trusted by' strip.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Optional. When set, the logo is shown instead of the name.",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
  preview: { select: { title: "name", media: "logo" } },
});
