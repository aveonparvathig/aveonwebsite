"use client";

import { useState, type FormEvent } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventType } from "@/lib/analytics";

interface NewsletterSignupProps {
  /** "newsletter" for the footer, or a magnet slug for a gated resource. */
  source?: string;
  /** Visual treatment. */
  variant?: "footer" | "inline";
  buttonLabel?: string;
  placeholder?: string;
  /** Shown after a successful signup. */
  successText?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignup({
  source = "newsletter",
  variant = "footer",
  buttonLabel = "Subscribe",
  placeholder = "Your work email",
  successText = "You're in! Check your inbox soon.",
}: NewsletterSignupProps) {
  const { trackEvent, trackLead } = useAnalytics();
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    trackEvent(EventType.FORM_SUBMIT, { form_name: "newsletter", source });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      trackLead({ leadType: "email", source, value: 10 });
      if (source !== "newsletter") {
        trackEvent(EventType.RESOURCE_DOWNLOAD, { resource: source });
      }
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const isFooter = variant === "footer";

  if (status === "success") {
    return (
      <p className={isFooter ? "text-sm font-semibold text-primary-700" : "rounded-xl bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-700"}>
        ✓ {successText}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder={placeholder}
        aria-label="Email address"
        className="min-w-0 flex-1 rounded-full border border-navy-200 bg-white px-4 py-3 text-base sm:text-sm text-navy-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="shrink-0 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 px-6 py-3 text-sm font-bold text-white transition hover:to-primary-600 disabled:opacity-60"
      >
        {status === "submitting" ? "…" : buttonLabel}
      </button>
      {status === "error" && (
        <span className="w-full text-xs text-red-500 sm:order-last sm:basis-full">
          Please enter a valid email and try again.
        </span>
      )}
    </form>
  );
}
