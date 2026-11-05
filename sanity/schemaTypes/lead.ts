import { defineField, defineType } from "sanity";

/**
 * Inbound lead captured from the demo form, contact form or chatbot.
 * Persisted on every submission so leads are never lost even when the
 * notification email can't be delivered. Studio doubles as the lead inbox.
 */
export const leadSchema = defineType({
  name: "lead",
  title: "Lead",
  type: "document",
  // Newest first in the Studio list.
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({
      name: "interest",
      title: "Interested in",
      type: "string",
      description: "Product/service selected or inferred.",
    }),
    defineField({ name: "institution", title: "Institution / Company", type: "string" }),
    defineField({ name: "city", title: "City / Country", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 3 }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: [
          { title: "Demo form", value: "demo_form" },
          { title: "Contact form", value: "contact_form" },
          { title: "Chatbot (Ava)", value: "chatbot" },
          { title: "Lead magnet", value: "magnet" },
          { title: "Other", value: "other" },
        ],
      },
      initialValue: "other",
    }),
    defineField({
      name: "leadScore",
      title: "Lead score",
      type: "number",
      description: "0–100. Higher = more sales-ready (phone + institution + product intent).",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Qualified", value: "qualified" },
          { title: "Proposal", value: "proposal" },
          { title: "Won", value: "won" },
          { title: "Lost", value: "lost" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    }),
    defineField({
      name: "createdAt",
      title: "Received at",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "emailDelivered",
      title: "Notification email delivered",
      type: "boolean",
      readOnly: true,
      description: "False when Resend was unconfigured or failed — follow up manually.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "source", score: "leadScore", status: "status" },
    prepare({ title, subtitle, score, status }) {
      return {
        title: title || "(no name)",
        subtitle: [subtitle, status, score != null ? `score ${score}` : null]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});
