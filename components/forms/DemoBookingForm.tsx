"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoBookingSchema, type DemoBookingInput } from "@/lib/validations";
import { products } from "@/lib/data/products";

const inputClass =
  "w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100";

export default function DemoBookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoBookingInput>({
    resolver: zodResolver(demoBookingSchema),
  });

  async function onSubmit(data: DemoBookingInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/demo-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
        <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">
          Demo request received!
        </h3>
        <p className="mt-2 text-sm text-navy-600">
          Our team will reach out within one business day to schedule your
          personalized demo.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot */}
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
          <input placeholder="Name *" className={inputClass} {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <input placeholder="Email *" type="email" className={inputClass} {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input placeholder="Contact Number *" type="tel" className={inputClass} {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <select className={inputClass} defaultValue="" {...register("product")}>
            <option value="" disabled>
              Select a Product *
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
          {errors.product && <p className="mt-1 text-xs text-red-600">{errors.product.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input placeholder="Institute *" className={inputClass} {...register("institute")} />
          {errors.institute && (
            <p className="mt-1 text-xs text-red-600">{errors.institute.message}</p>
          )}
        </div>
        <div>
          <input placeholder="City / Country *" className={inputClass} {...register("city")} />
          {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
        </div>
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Book My Demo"}
      </button>
    </form>
  );
}
