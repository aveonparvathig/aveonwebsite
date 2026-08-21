import { z } from "zod";
import { products } from "./data/products";

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
});

export const demoBookingSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  product: z.enum(
    products.map((p) => p.slug) as [string, ...string[]],
    { message: "Please select a product" },
  ),
  institute: z.string().min(2, "Please enter your institute name"),
  city: z.string().min(2, "Please enter your city / country"),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type DemoBookingInput = z.infer<typeof demoBookingSchema>;
