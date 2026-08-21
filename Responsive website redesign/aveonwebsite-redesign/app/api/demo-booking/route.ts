import { NextResponse } from "next/server";
import { demoBookingSchema } from "@/lib/validations";
import { sendNotification } from "@/lib/email";
import { getProduct } from "@/lib/data/products";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = demoBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, product, institute, city } = parsed.data;
  try {
    await sendNotification(`[Website] Demo request: ${getProduct(product)?.title ?? product}`, {
      Name: name,
      Email: email,
      Phone: phone,
      Product: getProduct(product)?.title ?? product,
      Institute: institute,
      "City / Country": city,
    });
  } catch (err) {
    console.error("Demo booking email failed:", err);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
