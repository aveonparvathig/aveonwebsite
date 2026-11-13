import { z } from "zod";
import { products } from "./data/products";
import { ATTRIBUTION_FIELDS, ATTRIBUTION_MAX_LEN, type AttributionField } from "./attribution";

/**
 * Ad-click attribution sent along with a lead (see lib/attribution.ts). Every
 * field is optional and length-capped; unknown keys are stripped.
 */
export const attributionSchema = z
  .object(
    Object.fromEntries(
      ATTRIBUTION_FIELDS.map((f) => [f, z.string().max(ATTRIBUTION_MAX_LEN).optional()]),
    ) as Record<AttributionField, z.ZodOptional<z.ZodString>>,
  )
  .optional();

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please tell us a bit more (min 10 characters)"),
  /** Honeypot — must stay empty. */
  website: z.string().max(0).optional().or(z.literal("")),
  attribution: attributionSchema,
});

const demoBookingBase = {
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  product: z.enum(
    products.map((p) => p.slug) as [string, ...string[]],
    { message: "Please select a product" },
  ),
  institute: z.string().min(2, "Please enter your institute name"),
  website: z.string().max(0).optional().or(z.literal("")),
  attribution: attributionSchema,
};

/** Full demo form (contact and pricing pages): every field required. */
export const demoBookingSchema = z.object({
  ...demoBookingBase,
  email: z.string().email("Please enter a valid email"),
  city: z.string().min(2, "Please enter your city / country"),
});

/**
 * Short demo form (paid-ad landing pages): name, phone, product and institute
 * are required; email and city are optional. The API validates against this
 * one, since it accepts everything the full form sends.
 */
export const demoBookingShortSchema = z.object({
  ...demoBookingBase,
  email: z.union([z.literal(""), z.string().email("Please enter a valid email")]).optional(),
  city: z.string().max(120).optional(),
});

export const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  name: z.string().max(120).optional().or(z.literal("")),
  /** Where the signup happened, e.g. "newsletter" or a lead-magnet slug. */
  source: z.string().max(60).optional(),
  /** Honeypot — must stay empty. */
  website: z.string().max(0).optional().or(z.literal("")),
  attribution: attributionSchema,
});

export type ContactInput = z.infer<typeof contactSchema>;
export type DemoBookingInput = z.infer<typeof demoBookingSchema>;
export type DemoBookingShortInput = z.infer<typeof demoBookingShortSchema>;
export type SubscribeInput = z.infer<typeof subscribeSchema>;
