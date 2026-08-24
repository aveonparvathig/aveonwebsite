"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";

type QuickReply = { label: string; value: string };
type Msg = { id: number; role: "user" | "bot"; text: string; quickReplies?: QuickReply[]; typing?: boolean };

const GREETING: Msg = {
  id: 0,
  role: "bot",
  text: "Hi there! 👋 I'm Ava, Aveon's assistant. Are you exploring a campus ERP, a software service, or would you like a quick demo?",
  quickReplies: [
    { label: "🎓 Products", value: "__products" },
    { label: "🛠 Services", value: "__services" },
    { label: "📅 Book a Demo", value: "__demo" },
  ],
};

const INTEREST_OPTIONS = [
  ...products.map((p) => p.title),
  ...services.map((s) => s.title),
  "Not sure yet",
];

let uid = 1;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  // Lead form
  const [showLead, setShowLead] = useState(false);
  const [leadDone, setLeadDone] = useState(false);
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [lead, setLead] = useState({ name: "", email: "", phone: "", company: "", interest: "", message: "", website: "" });

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // One-time teaser nudge
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => setTeaser(true), 6000);
    return () => clearTimeout(t);
  }, [open]);

  // Seed greeting on first open + focus input
  useEffect(() => {
    if (open && messages.length === 0) setMessages([GREETING]);
    if (open) {
      setTeaser(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open, messages.length]);

  // Autoscroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showLead, leadDone]);

  const push = (m: Omit<Msg, "id">) => setMessages((prev) => [...prev, { ...m, id: uid++ }]);

  function botSay(text: string, quickReplies?: QuickReply[]) {
    push({ role: "bot", text, quickReplies });
  }

  async function sendText(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;
    push({ role: "user", text: trimmed });
    setInput("");
    setSending(true);
    const typingId = uid++;
    setMessages((prev) => [...prev, { id: typingId, role: "bot", text: "", typing: true }]);

    // Build history from current messages (excluding the typing bubble)
    const history = [...messages, { id: -1, role: "user" as const, text: trimmed }]
      .filter((m) => !m.typing && m.text)
      .map((m) => ({ role: m.role === "user" ? "user" : "assistant", content: m.text }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "message", messages: history }),
      });
      const data = await res.json();
      setMessages((prev) => prev.filter((m) => m.id !== typingId));
      botSay(data.reply ?? "Sorry, I didn't catch that — could you rephrase?", data.quickReplies);
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== typingId));
      botSay(`Sorry, I'm having trouble connecting. You can reach us at contact@aveoninfotech.com.`);
    } finally {
      setSending(false);
    }
  }

  function handleQuickReply(qr: QuickReply) {
    const v = qr.value;
    push({ role: "user", text: qr.label.replace(/^[^\w]+/, "").trim() || qr.label });

    if (v === "__products") {
      botSay("Here's what we build for campuses — tap any to learn more:", products.map((p) => ({ label: p.title, value: `prod:${p.slug}` })));
      return;
    }
    if (v === "__services") {
      botSay("Our software development services — tap any to learn more:", services.map((s) => ({ label: s.title, value: `svc:${s.slug}` })));
      return;
    }
    if (v === "__demo") {
      botSay("Great — let's set up your free demo. Pop your details in below and our team will reach out within one business day. 👇");
      setShowLead(true);
      return;
    }
    if (v === "__contact") {
      botSay("You can reach our team at +91 87540 06483 or contact@aveoninfotech.com — or leave your details and we'll call you.", [{ label: "📅 Leave my details", value: "__demo" }]);
      return;
    }
    if (v.startsWith("prod:")) {
      const p = products.find((x) => x.slug === v.slice(5));
      if (p) {
        setLead((l) => ({ ...l, interest: l.interest || p.title }));
        botSay(`${p.title} — ${p.description}\n\nSee the full page at /products/${p.slug}. Want a personalized walkthrough?`, [
          { label: "📅 Book a Demo", value: "__demo" },
          { label: "↩ Back to products", value: "__products" },
        ]);
      }
      return;
    }
    if (v.startsWith("svc:")) {
      const s = services.find((x) => x.slug === v.slice(4));
      if (s) {
        setLead((l) => ({ ...l, interest: l.interest || s.title }));
        botSay(`${s.title} — ${s.text} Shall we set up a quick chat with our team?`, [
          { label: "📅 Book a Demo", value: "__demo" },
          { label: "↩ Back to services", value: "__services" },
        ]);
      }
      return;
    }
    // Fallback: treat label as a question
    void sendText(qr.label);
  }

  async function submitLead(e: FormEvent) {
    e.preventDefault();
    setLeadError("");
    if (!lead.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      setLeadError("Please add your name and a valid email.");
      return;
    }
    setLeadSubmitting(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "lead", data: lead }),
      });
      if (!res.ok) throw new Error();
      setShowLead(false);
      setLeadDone(true);
      botSay(`Thanks, ${lead.name.split(" ")[0]}! 🎉 Your request is in — our team will reach out within one business day. Anything else I can help with?`, [
        { label: "🎓 Products", value: "__products" },
        { label: "🛠 Services", value: "__services" },
      ]);
    } catch {
      setLeadError("Couldn't submit right now — please try again, or email contact@aveoninfotech.com.");
    } finally {
      setLeadSubmitting(false);
    }
  }

  const lastQuickReplies = !showLead ? messages[messages.length - 1]?.quickReplies : undefined;

  return (
    <div className="fixed bottom-5 right-5 z-[80] print:hidden">
      {/* Teaser */}
      {teaser && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="animate-fade-in absolute bottom-16 right-0 mb-1 w-56 rounded-2xl rounded-br-sm border border-navy-100 bg-white p-3.5 text-left text-sm text-navy-700 shadow-[0_20px_50px_-20px_rgb(16_26_51_/_0.4)]"
        >
          <span className="font-semibold text-navy-900">Need help choosing? 👋</span>
          <span className="mt-0.5 block text-navy-600">Ask me anything or book a quick demo.</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="animate-fade-in mb-3 flex h-[min(560px,80vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[22px] border border-navy-100 bg-white shadow-[0_40px_90px_-30px_rgb(16_26_51_/_0.5)]">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-primary-700 to-primary-600 px-4 py-3.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base font-extrabold">A</span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold leading-tight">Ava · Aveon Assistant</span>
              <span className="flex items-center gap-1.5 text-[11px] text-primary-50">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Online — replies in seconds
              </span>
            </span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-navy-50 px-3.5 py-4">
            {messages.map((m) =>
              m.typing ? (
                <div key={m.id} className="flex">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-navy-100 bg-white px-3.5 py-3 shadow-sm">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-300 [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-300 [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-300" />
                  </div>
                </div>
              ) : (
                <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex"}>
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "rounded-br-sm bg-primary-600 text-white"
                        : "rounded-bl-sm border border-navy-100 bg-white text-navy-800"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ),
            )}

            {/* Quick replies (from last bot message) */}
            {lastQuickReplies && lastQuickReplies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-0.5">
                {lastQuickReplies.map((qr) => (
                  <button
                    key={qr.value}
                    type="button"
                    onClick={() => handleQuickReply(qr)}
                    className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-semibold text-primary-700 transition hover:border-primary-400 hover:bg-primary-50"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Lead form */}
            {showLead && !leadDone && (
              <form onSubmit={submitLead} className="rounded-2xl border border-navy-100 bg-white p-3.5 shadow-sm">
                <div className="grid gap-2.5">
                  <input required value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Your name*" className="rounded-lg border border-navy-200 px-3 py-2 text-sm outline-none focus:border-primary-400" />
                  <input required type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Email*" className="rounded-lg border border-navy-200 px-3 py-2 text-sm outline-none focus:border-primary-400" />
                  <input value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Phone (optional)" className="rounded-lg border border-navy-200 px-3 py-2 text-sm outline-none focus:border-primary-400" />
                  <input value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} placeholder="Institution / Company" className="rounded-lg border border-navy-200 px-3 py-2 text-sm outline-none focus:border-primary-400" />
                  <select value={lead.interest} onChange={(e) => setLead({ ...lead, interest: e.target.value })} className="rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-700 outline-none focus:border-primary-400">
                    <option value="">Interested in… (optional)</option>
                    {INTEREST_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {/* Honeypot */}
                  <input tabIndex={-1} autoComplete="off" value={lead.website} onChange={(e) => setLead({ ...lead, website: e.target.value })} className="hidden" aria-hidden />
                  {leadError && <p className="text-xs text-red-500">{leadError}</p>}
                  <button type="submit" disabled={leadSubmitting} className="rounded-full bg-primary-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700 disabled:opacity-60">
                    {leadSubmitting ? "Sending…" : "Book my free demo →"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-navy-100 bg-white p-2.5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void sendText(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="min-w-0 flex-1 rounded-full border border-navy-200 px-4 py-2.5 text-sm outline-none focus:border-primary-400"
              />
              <button type="submit" disabled={!input.trim() || sending} aria-label="Send" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white transition hover:bg-primary-700 disabled:opacity-50">
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.77 59.77 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Bubble */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-[0_18px_40px_-12px_rgb(29_111_242_/_0.7)] transition hover:scale-105 hover:bg-primary-700"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="relative">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <span aria-hidden className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-primary-600 bg-green-400" />
          </span>
        )}
      </button>
    </div>
  );
}
