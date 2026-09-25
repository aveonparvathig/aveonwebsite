"use client";

import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { useFormLock } from "@/components/forms/FormLockContext";

const inputClass =
  "w-full rounded-xl border border-navy-200 bg-navy-50/50 px-4 py-3.5 text-sm text-navy-900 placeholder:text-navy-400 transition hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const { ref: registerMessageRef, ...messageField } = register("message");

  const resetMessageHeight = useCallback(() => {
    if (messageRef.current) messageRef.current.style.height = "";
  }, []);

  const autoResizeMessage = useCallback((el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 260)}px`;
  }, []);


  const isDirty = Object.entries(watch()).some(([k, v]) => k !== "website" && typeof v === "string" && v.trim() !== "");
  const clearSelf = useCallback(() => {
    reset();
    setStatus("idle");
    resetMessageHeight();
  }, [reset, resetMessageHeight]);
  const { isLocked, clearOther } = useFormLock("contact", isDirty, clearSelf);

  async function onSubmit(data: ContactInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      reset();
      resetMessageHeight();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-navy-900">
          Message sent!
        </h3>
        <p className="mt-2 text-sm text-navy-600">
          Thanks for reaching out: we&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">
    <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={() => isLocked && clearOther()} noValidate autoComplete="off" className="flex flex-1 flex-col justify-between gap-4">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        {...register("website")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input placeholder="Name *" autoComplete="off" className={inputClass} {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <input placeholder="Email *" type="email" autoComplete="off" className={inputClass} {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input placeholder="Phone *" type="tel" autoComplete="off" className={inputClass} {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <input placeholder="Subject *" autoComplete="off" className={inputClass} {...register("subject")} />
          {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <textarea
          placeholder="Your message *"
          rows={3}
          autoComplete="off"
          className={`${inputClass} resize-none overflow-y-auto transition-[height] duration-150`}
          {...messageField}
          ref={(el) => {
            registerMessageRef(el);
            messageRef.current = el;
          }}
          onInput={(e) => autoResizeMessage(e.currentTarget)}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
      </div>
    </div>
  );
}
