import { NextResponse } from "next/server";
import { demoBookingShortSchema } from "@/lib/validations";
import { saveLead } from "@/lib/leads";
import { getProduct } from "@/lib/data/products";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // The short schema is the superset: the full form (contact, pricing) sends
  // email and city, the ad landing pages may leave them out.
  const parsed = demoBookingShortSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, product, institute, city, attribution } = parsed.data;
  const productTitle = getProduct(product)?.title ?? product;

  const { ok } = await saveLead({
    name,
    email: email?.trim() || undefined,
    phone,
    interest: productTitle,
    institution: institute,
    city: city?.trim() || undefined,
    source: "demo_form",
    attribution,
    notifySubject: `[Website] Demo request: ${productTitle}`,
  });

  if (!ok) {
    return NextResponse.json(
      { error: "Failed to submit request. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
