"use client";

import { useCallback, useId, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  demoBookingSchema,
  demoBookingShortSchema,
  type DemoBookingShortInput,
} from "@/lib/validations";
import { products } from "@/lib/data/products";
import { useFormLock } from "@/components/forms/FormLockContext";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventType } from "@/lib/analytics";
import { trackConversion } from "@/lib/analytics-conversions";
import { getAttribution } from "@/lib/attribution";

// text-base on mobile prevents iOS Safari's auto-zoom-on-focus (triggered below 16px); sm: restores the original size on larger screens.
const inputClass =
  "w-full rounded-xl border border-navy-200 bg-navy-50/50 px-4 py-3.5 text-base sm:text-sm text-navy-900 placeholder:text-navy-400 transition hover:border-primary-300 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100";

// Labeled variant (used on the paid landing page): visible labels above each field,
// higher-contrast borders and a blue submit button. The default keeps the compact
// placeholder-only look used on the contact and pricing pages.
const labeledInputClass =
  "w-full rounded-xl border border-navy-400 bg-white px-4 py-3 text-base sm:text-[15px] text-navy-900 transition hover:border-primary-500 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100";
const labelClass = "mb-1.5 block text-[13px] font-bold text-navy-700";

interface DemoBookingFormProps {
  /** Visible labels above each field (paid landing pages). */
  labeled?: boolean;
  /**
   * Short variant for ad traffic: email and city become optional and move to
   * the last row. Name, phone, product and institute stay required.
   */
  short?: boolean;
  /** Product slug to preselect, so a visitor from a product ad need not choose. */
  defaultProduct?: string;
}

export default function DemoBookingForm({
  labeled = false,
  short = false,
  defaultProduct = "",
}: DemoBookingFormProps) {
  const uid = useId();
  const fieldClass = labeled ? labeledInputClass : inputClass;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { trackEvent, trackLead } = useAnalytics();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<DemoBookingShortInput>({
    // The full schema only tightens email and city, so its resolver fits the
    // short form's field types.
    resolver: (short
      ? zodResolver(demoBookingShortSchema)
      : zodResolver(demoBookingSchema)) as Resolver<DemoBookingShortInput>,
    defaultValues: { product: defaultProduct },
  });

  const watchedData = watch();
  // A preselected product is not the visitor's input, so it doesn't count as dirty.
  const isDirty = Object.entries(watchedData).some(
    ([k, v]) =>
      k !== "website" &&
      typeof v === "string" &&
      v.trim() !== "" &&
      !(k === "product" && v === defaultProduct),
  );
  const clearSelf = useCallback(() => {
    reset();
    setStatus("idle");
  }, [reset]);
  const { isLocked, clearOther } = useFormLock("demo", isDirty, clearSelf);

  // Track form start (first interaction)
  const handleFormFocus = useCallback(() => {
    if (status === "idle" && isDirty === false) {
      trackEvent(EventType.FORM_START, {
        form_name: "demo_booking",
      });
    }
    isLocked && clearOther();
  }, [status, isDirty, isLocked, clearOther, trackEvent]);

  async function onSubmit(data: DemoBookingShortInput) {
    setStatus("submitting");

    // Track form submission attempt
    trackEvent(EventType.FORM_SUBMIT, {
      form_name: "demo_booking",
      product: data.product,
      institute_type: "unknown",
    });

    try {
      const res = await fetch("/api/demo-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, attribution: getAttribution() }),
      });
      if (!res.ok) throw new Error(await res.text());

      setStatus("success");

      // Track successful lead capture
      trackLead({
        leadType: "form",
        source: "demo_booking_form",
        value: 50,
        properties: {
          product: data.product,
          city: data.city,
          institute: data.institute,
        },
      });

      // Track demo request event
      trackEvent(EventType.DEMO_REQUEST, {
        form_name: "demo_booking",
        product: data.product,
        institute_name: data.institute,
        city: data.city,
      });

      // Fire paid-channel conversion (Google Ads + Meta)
      trackConversion("demo_lead", 50);

      reset();
    } catch (error) {
      setStatus("error");

      // Track form error
      trackEvent(EventType.FORM_ERROR, {
        form_name: "demo_booking",
        error_message: error instanceof Error ? error.message : "Unknown error",
      });
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

  const optional = short ? " (optional)" : "";
  const star = short ? "" : " *";

  const nameField = (
    <div>
      {labeled && <label htmlFor={`${uid}-name`} className={labelClass}>Name</label>}
      <input id={`${uid}-name`} placeholder={labeled ? undefined : "Name *"} autoComplete="off" className={fieldClass} {...register("name")} />
      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
    </div>
  );
  const emailField = (
    <div>
      {labeled && <label htmlFor={`${uid}-email`} className={labelClass}>Work email{optional}</label>}
      <input id={`${uid}-email`} placeholder={labeled ? undefined : `Email${star}`} type="email" autoComplete="off" className={fieldClass} {...register("email")} />
      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
    </div>
  );
  const phoneField = (
    <div>
      {labeled && <label htmlFor={`${uid}-phone`} className={labelClass}>Contact number</label>}
      <input id={`${uid}-phone`} placeholder={labeled ? undefined : "Contact Number *"} type="tel" autoComplete="off" className={fieldClass} {...register("phone")} />
      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
    </div>
  );
  const productField = (
    <div>
      {labeled && <label htmlFor={`${uid}-product`} className={labelClass}>Product</label>}
      <select id={`${uid}-product`} className={fieldClass} {...register("product")}>
        <option value="" disabled>
          {labeled ? "Select a product" : "Select a Product *"}
        </option>
        {products.map((p) => (
          <option key={p.slug} value={p.slug}>
            {p.title}
          </option>
        ))}
      </select>
      {errors.product && <p className="mt-1 text-xs text-red-600">{errors.product.message}</p>}
    </div>
  );
  const instituteField = (
    <div>
      {labeled && <label htmlFor={`${uid}-institute`} className={labelClass}>Institute</label>}
      <input id={`${uid}-institute`} placeholder={labeled ? undefined : "Institute *"} autoComplete="off" className={fieldClass} {...register("institute")} />
      {errors.institute && <p className="mt-1 text-xs text-red-600">{errors.institute.message}</p>}
    </div>
  );
  const cityField = (
    <div>
      {labeled && <label htmlFor={`${uid}-city`} className={labelClass}>City / Country{optional}</label>}
      <input id={`${uid}-city`} placeholder={labeled ? undefined : `City / Country${star}`} autoComplete="off" className={fieldClass} {...register("city")} />
      {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
    </div>
  );

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">
    <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={handleFormFocus} noValidate autoComplete="off" className="flex flex-1 flex-col justify-between gap-4">
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
        {nameField}
        {short ? phoneField : emailField}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {short ? instituteField : phoneField}
        {productField}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {short ? emailField : instituteField}
        {cityField}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={
          labeled
            ? "w-full rounded-xl bg-primary-700 py-3.5 text-base font-extrabold text-white transition-colors hover:bg-primary-800 disabled:opacity-60"
            : "w-full rounded-full bg-accent-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-60"
        }
      >
        {status === "submitting" ? "Submitting…" : "Book My Demo"}
      </button>
    </form>
      </div>
    </div>
  );
}
