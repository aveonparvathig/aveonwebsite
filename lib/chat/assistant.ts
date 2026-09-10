import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
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

/**
 * The reasons a visitor should choose Aveon — kept separate from raw features so
 * both brains can lead with outcomes, not module lists. Grounded in the site's
 * own content (testimonials, product taglines); do not add claims we can't back.
 */
const DIFFERENTIATORS = [
  "One connected platform, not a stack of disconnected systems — a single student/employee record from admission to alumni, so data is entered once and reporting is instant.",
  "Built for Indian campuses: OBE, CBCS, COE and NAAC/AICTE data are first-class, not bolt-ons.",
  "Fast, low-pain rollout — teams typically train in about a week and go live, instead of the multi-year horror stories.",
  "An implementation team that already knows campus workflows (admissions, internals, attendance, fees), based in Coimbatore.",
];

/** Concrete proof points pulled from real testimonials — use to back up claims. */
function proofText(): string {
  return testimonials
    .map((t) => `- ${t.role}, ${t.institution}: "${t.text}"`)
    .join("\n");
}

/**
 * A compact but *deep* text catalogue: each product carries its positioning and
 * top capabilities so the assistant can genuinely explain it, not just name it.
 */
function catalogText(): string {
  const prod = products
    .map(
      (p) =>
        `- ${p.title} (/products/${p.slug}) — ${p.tagline}. ${p.description}\n    Key modules: ${p.features.join("; ")}.`,
    )
    .join("\n");
  const svc = services
    .map((s) => `- ${s.title}${SERVICE_PAGES.has(s.slug) ? ` (${serviceRoute(s.slug)})` : ""}: ${s.text}`)
    .join("\n");
  return `PRODUCTS (Education & Campus ERP):\n${prod}\n\nSERVICES (Software Development):\n${svc}`;
}

/** System prompt for the (optional) LLM brain — persona + knowledge + consultative-selling playbook. */
export const SYSTEM_PROMPT = `You are "Ava", the friendly, sharp sales assistant for Aveon Infotech (${siteConfig.url}). Your goal is to help visitors find the right fit and move genuinely interested ones toward a free demo — by being useful, not pushy.

WHO AVEON IS
Aveon Infotech builds education & campus ERP (University, College, School, HRM & Payroll, COE, Library, Hostel & Mess, Inventory) and delivers software services (AI process automation, mobile apps, custom software, order & warehouse management, offshore teams). Based in Coimbatore, Tamil Nadu. Contact: ${siteConfig.phone} · ${siteConfig.email}.

CATALOGUE (your only source of product facts)
${catalogText()}

WHY INSTITUTIONS CHOOSE AVEON (lead with these outcomes, not feature lists)
${DIFFERENTIATORS.map((d) => `- ${d}`).join("\n")}

PROOF YOU CAN CITE (real customer results — quote briefly and naturally, never fabricate new ones)
${proofText()}

HOW TO SELL (consultative — helpful first)
1. DISCOVER before you pitch. On a broad or first question, ask ONE sharp qualifying question (e.g. "Is this for a university, college or school?" / "What's the biggest headache today — exams, fees, admissions?"). Don't interrogate; one question at a time.
2. EXPLAIN with outcomes, not module dumps. Pattern: capability → the benefit it delivers → a proof point when one fits. Name 2-3 relevant modules, not the whole list.
3. HANDLE objections calmly, using the reasons above:
   - Price → "It's tailored to your size and modules, so a short demo lets us scope it and share an exact quote." Never invent numbers.
   - "Rollout will be painful" → most teams train in about a week and go live; cite the one-week testimonial.
   - "We already have a system" → the win is ONE connected platform replacing disconnected tools, so data is entered once and NAAC/AICTE reporting is instant.
   - Data migration / trust → the implementation team already knows campus workflows and handles the move; offer to walk them through it on a call.
4. ADVANCE every exchange toward a next step. When the visitor shows any buying intent (asks about a product, timelines, "how do I start", pricing, a demo), invite them warmly to book a free demo and tell them to tap the "Book a Demo" button to leave their details — the team reaches out within one business day.

STYLE & GUARDRAILS
- Warm, confident, concise: 2-4 short sentences, never a wall of text. Mirror the visitor's own words.
- Use ONLY the catalogue and proof above. Never invent features, integrations, prices, clients or claims.
- If you don't know something, say so briefly and offer to connect them with the team.
- Never claim to be human. You are Aveon's AI assistant.`;

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

  // Direct product match — lead with positioning + top modules + a proof-backed nudge.
  const product = products.find((p) => q.includes(p.title.toLowerCase()) || matchKeywords(q, p.slug, p.title));
  if (product) {
    const top = product.features.slice(0, 3).join(", ");
    return {
      reply: `${product.title} is our ${product.tagline.toLowerCase()} — ${product.description} It brings ${top} into one connected platform, so data's entered once and reporting is instant. Full breakdown at /products/${product.slug}. Want a personalized walkthrough of it?`,
      quickReplies: DEMO_QR,
    };
  }
  const service = services.find((s) => q.includes(s.title.toLowerCase()) || matchKeywords(q, s.slug, s.title));
  if (service) {
    const link = SERVICE_PAGES.has(service.slug) ? ` See ${serviceRoute(service.slug)}.` : "";
    return { reply: `${service.title} — ${service.text}${link} Shall we set up a quick chat to scope it for you?`, quickReplies: DEMO_QR };
  }

  // Intents
  if (/\b(price|pricing|cost|quote|how much|budget|expensive|afford)\b/.test(q)) {
    return {
      reply: "Pricing is tailored to your institution — it depends on the modules, users and scope, so we don't quote a flat number. A short demo lets us scope it precisely and share an exact quote for your campus. Want me to set that up?",
      quickReplies: DEMO_QR,
    };
  }
  // Objection: rollout will be slow / painful.
  if (/\b(implement|rollout|roll out|migrat|how long|time to|onboard|training|go live|deploy)\b/.test(q)) {
    return {
      reply: "Rollout is the part institutions worry about most — with us it's fast. Most teams train in about a week and go live, and our implementation team handles moving your existing data. Want to see a live campus setup in a demo?",
      quickReplies: DEMO_QR,
    };
  }
  // Objection: we already have a system / why change.
  if (/\b(already have|existing|current system|replace|why (should|change|switch)|different|better than|compet)\b/.test(q)) {
    return {
      reply: "Totally fair. The real win is one connected platform replacing several disconnected tools — one student record from admission to alumni, entered once, with NAAC/AICTE reporting instant instead of stitched together. One university closed exams in 4 days that used to take 3 weeks. Want us to show the difference on your workflows?",
      quickReplies: DEMO_QR,
    };
  }
  if (/\b(demo|trial|book|schedule|meeting|call me|get started|start)\b/.test(q)) {
    return { reply: "Love it — let's get you a demo. Tap the button below and drop your details; our team reaches out within one business day.", quickReplies: [{ label: "📅 Book a Demo", value: "__demo" }] };
  }
  if (/\b(contact|phone|call|email|reach|sales|talk)\b/.test(q)) {
    return { reply: `You can reach us at ${siteConfig.phone} or ${siteConfig.email} — or leave your details and we'll call you.`, quickReplies: [{ label: "📅 Leave my details", value: "__demo" }] };
  }
  if (/\b(who|about|company|aveon|do you do|what do|trust|proof|clients|reviews|testimonial)\b/.test(q)) {
    return {
      reply: "Aveon Infotech builds campus ERP for universities, colleges and schools — plus software services like AI automation, mobile apps and custom development. Campuses pick us to replace disconnected systems with one connected platform; one university now closes exams in 4 days instead of 3 weeks. What are you exploring?",
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

/** Generic words shared across many titles/slugs — too weak to identify a product. */
const KEYWORD_STOPWORDS = new Set([
  "system", "management", "managment", "development", "service", "services",
  "software", "online", "digital", "campus", "platform", "team", "chatbot",
]);

function matchKeywords(q: string, slug: string, title: string): boolean {
  const words = `${slug} ${title}`
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length > 3 && !KEYWORD_STOPWORDS.has(w));
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
