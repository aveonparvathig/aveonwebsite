import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/constants";

export type ChatMessage = { role: "user" | "assistant"; content: string };

/** Services that have a dedicated page (slug → route). */
const SERVICE_PAGES = new Set([
  "process-automation",
  "mobile-app-development",
  "custom-software-development",
  "order-management-system",
  "warehouse-management-system",
  "offshore-team",
]);
const serviceRoute = (slug: string) =>
  slug === "process-automation" ? "/services/ai-process-automation" : `/services/${slug}`;

/** A compact text catalogue used in the system prompt and the scripted matcher. */
function catalogText(): string {
  const prod = products
    .map((p) => `- ${p.title} (/products/${p.slug}): ${p.description}`)
    .join("\n");
  const svc = services
    .map((s) => `- ${s.title}${SERVICE_PAGES.has(s.slug) ? ` (${serviceRoute(s.slug)})` : ""}: ${s.text}`)
    .join("\n");
  return `PRODUCTS (Education & Campus ERP):\n${prod}\n\nSERVICES (Software Development):\n${svc}`;
}

/** System prompt for the (optional) LLM brain — persona + knowledge + lead-conversion goals. */
export const SYSTEM_PROMPT = `You are "Ava", the friendly, sharp assistant for Aveon Infotech (${siteConfig.url}).

WHO AVEON IS
Aveon Infotech builds education & campus ERP (University, College, School, HRM & Payroll, COE, Library, Hostel & Mess, Inventory) and delivers software services (AI process automation, mobile apps, custom software, order & warehouse management, offshore teams). Contact: ${siteConfig.phone} · ${siteConfig.email}.

CATALOGUE
${catalogText()}

YOUR JOB
- Be genuinely helpful, warm and concise (2-4 short sentences; never a wall of text).
- Answer questions using ONLY the catalogue above. Never invent features, integrations, prices or claims.
- Always look for a natural moment to move the visitor toward booking a free demo or talking to the team.
- If asked about pricing, explain it's tailored to the institution/business and offer a personalized quote via a demo — do not quote numbers.
- When the visitor shows buying intent (asks about a product/service, timelines, "how do I start", "get a demo", "pricing"), invite them to book a demo and tell them they can tap the "Book a Demo" button to leave their details.
- If you don't know something, say so briefly and offer to connect them with the team.
- Never claim to be human. You are Aveon's AI assistant.
- Keep a confident, respectful, benefit-led tone. Use the visitor's words back to them.`;

/* ──────────────────────────────────────────────────────────────
   Scripted fallback brain (no API key required)
   ────────────────────────────────────────────────────────────── */

type Reply = { reply: string; quickReplies?: { label: string; value: string }[] };

const DEMO_QR = [
  { label: "📅 Book a Demo", value: "__demo" },
  { label: "💬 Talk to Sales", value: "__contact" },
];

/** A deterministic, keyword-matched reply used when no LLM provider is configured. */
export function scriptedReply(text: string): Reply {
  const q = (text || "").toLowerCase();

  // Direct product/service match
  const product = products.find((p) => q.includes(p.title.toLowerCase()) || matchKeywords(q, p.slug, p.title));
  if (product) {
    return {
      reply: `${product.title} — ${product.description} You can see the full breakdown at /products/${product.slug}. Want a personalized walkthrough?`,
      quickReplies: DEMO_QR,
    };
  }
  const service = services.find((s) => q.includes(s.title.toLowerCase()) || matchKeywords(q, s.slug, s.title));
  if (service) {
    const link = SERVICE_PAGES.has(service.slug) ? ` See ${serviceRoute(service.slug)}.` : "";
    return { reply: `${service.title} — ${service.text}${link} Shall we set up a quick chat with our team?`, quickReplies: DEMO_QR };
  }

  // Intents
  if (/\b(price|pricing|cost|quote|how much|budget)\b/.test(q)) {
    return {
      reply: "Pricing is tailored to your institution or business — it depends on the modules, users and scope. The fastest way is a short demo where we scope it and share a personalized quote. Want me to set that up?",
      quickReplies: DEMO_QR,
    };
  }
  if (/\b(demo|trial|book|schedule|meeting|call me|get started|start)\b/.test(q)) {
    return { reply: "Love it — let's get you a demo. Tap the button below and drop your details; our team reaches out within one business day.", quickReplies: [{ label: "📅 Book a Demo", value: "__demo" }] };
  }
  if (/\b(contact|phone|call|email|reach|sales|talk)\b/.test(q)) {
    return { reply: `You can reach us at ${siteConfig.phone} or ${siteConfig.email} — or leave your details and we'll call you.`, quickReplies: [{ label: "📅 Leave my details", value: "__demo" }] };
  }
  if (/\b(who|about|company|aveon|do you do|what do)\b/.test(q)) {
    return {
      reply: "Aveon Infotech builds campus ERP for universities, colleges and schools — plus software services like AI automation, mobile apps and custom development. What are you exploring?",
      quickReplies: [
        { label: "🎓 Products", value: "__products" },
        { label: "🛠 Services", value: "__services" },
        { label: "📅 Book a Demo", value: "__demo" },
      ],
    };
  }
  if (/\b(hi|hello|hey|good (morning|afternoon|evening))\b/.test(q)) {
    return {
      reply: "Hi there! 👋 I'm Ava, Aveon's assistant. Are you exploring a campus ERP, a software service, or would you like a quick demo?",
      quickReplies: [
        { label: "🎓 Products", value: "__products" },
        { label: "🛠 Services", value: "__services" },
        { label: "📅 Book a Demo", value: "__demo" },
      ],
    };
  }

  // Default
  return {
    reply: "I can help with our campus ERP (University, College, School, HRM, COE, Library, Hostel, Inventory) and software services — or get you a demo. What would you like to explore?",
    quickReplies: [
      { label: "🎓 Products", value: "__products" },
      { label: "🛠 Services", value: "__services" },
      { label: "📅 Book a Demo", value: "__demo" },
    ],
  };
}

function matchKeywords(q: string, slug: string, title: string): boolean {
  const words = `${slug} ${title}`.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3);
  return words.some((w) => q.includes(w));
}

/* ──────────────────────────────────────────────────────────────
   Optional LLM brain — provider-agnostic seam
   ────────────────────────────────────────────────────────────── */

/**
 * Generate a reply from an LLM. Returns null when no provider is configured,
 * so the caller falls back to `scriptedReply`.
 *
 * ── Provider seam ──────────────────────────────────────────────
 * This is deliberately provider-agnostic. The reference implementation below
 * calls Anthropic's Messages API over fetch (no SDK dependency) when
 * ANTHROPIC_API_KEY is set. To use a different provider (OpenAI, Azure, a
 * self-hosted model, …), replace the body of this function — the rest of the
 * app only depends on `(messages) => Promise<string | null>`.
 */
export async function generateAiReply(messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null; // no provider configured → scripted fallback

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      // Model is overridable via CHAT_MODEL. For a high-volume website widget,
      // "claude-haiku-4-5" is a good low-cost default; "claude-opus-5" is the
      // most capable. Pick per your cost/quality preference.
      body: JSON.stringify({
        model: process.env.CHAT_MODEL || "claude-haiku-4-5",
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });
    if (!res.ok) {
      console.error("Chat LLM error:", res.status, await res.text());
      return null;
    }
    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const text = (data.content ?? [])
      .filter((b) => b.type === "text" && b.text)
      .map((b) => b.text)
      .join("\n")
      .trim();
    return text || null;
  } catch (err) {
    console.error("Chat LLM request failed:", err);
    return null;
  }
}
