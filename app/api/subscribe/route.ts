import { NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/validations";
import { saveLead } from "@/lib/leads";

/**
 * Newsletter / lead-magnet email capture. Stores the email as a lead
 * (source "newsletter" or the magnet slug) so it lands in the same inbox
 * and list as every other lead. Low-friction: only an email is required.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot filled → silently accept.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const { email, name, source, attribution } = parsed.data;
  const isMagnet = Boolean(source && source !== "newsletter");

  const { ok } = await saveLead({
    name: name?.trim() || "(email subscriber)",
    email,
    interest: isMagnet ? source : "Newsletter",
    source: isMagnet ? "magnet" : "newsletter",
    attribution,
    notifySubject: isMagnet
      ? `[Website] Lead magnet: ${source}`
      : "[Website] Newsletter signup",
  });

  if (!ok) {
    return NextResponse.json(
      { error: "Couldn't sign you up right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
