import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendNotification } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot filled → silently accept without doing anything.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, subject, message } = parsed.data;
  try {
    await sendNotification(`[Website] Contact: ${subject}`, {
      Name: name,
      Email: email,
      Phone: phone,
      Subject: subject,
      Message: message,
    });
  } catch (err) {
    console.error("Contact form email failed:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
