import { NextResponse } from "next/server";
import { generateAiReply, scriptedReply, type ChatMessage } from "@/lib/chat/assistant";
import { saveLead } from "@/lib/leads";

const MAX_MSG_LEN = 1000;
const MAX_HISTORY = 24;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const action = (body as { action?: string })?.action;

  /* ── Lead capture ── */
  if (action === "lead") {
    const data = (body as { data?: Record<string, string> }).data ?? {};
    // Honeypot — bots fill hidden fields.
    if (data.website) return NextResponse.json({ ok: true });

    const name = (data.name ?? "").trim();
    const email = (data.email ?? "").trim();
    if (!name || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please share a valid name and email." }, { status: 422 });
    }

    const { ok } = await saveLead({
      name,
      email,
      phone: (data.phone ?? "").trim() || undefined,
      interest: (data.interest ?? "").trim() || undefined,
      institution: (data.company ?? "").trim() || undefined,
      message: (data.message ?? "").trim() || undefined,
      source: "chatbot",
      notifySubject: `[Chatbot] New lead: ${name}`,
    });

    if (!ok) {
      return NextResponse.json({ error: "Couldn't submit right now. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  /* ── Free-text message ── */
  if (action === "message") {
    const raw = Array.isArray((body as { messages?: unknown[] }).messages)
      ? ((body as { messages: unknown[] }).messages as { role?: string; content?: string }[])
      : [];
    const messages: ChatMessage[] = raw
      .slice(-MAX_HISTORY)
      .map((m) => ({
        role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
        content: String(m.content ?? "").slice(0, MAX_MSG_LEN),
      }))
      .filter((m) => m.content.trim().length > 0);

    if (!messages.length) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }

    const ai = await generateAiReply(messages);
    if (ai) {
      return NextResponse.json({ reply: ai, source: "ai" });
    }

    const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
    const scripted = scriptedReply(lastUser);
    return NextResponse.json({ reply: scripted.reply, quickReplies: scripted.quickReplies, source: "scripted" });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
