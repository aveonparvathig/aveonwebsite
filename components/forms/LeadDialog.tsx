"use client";

import { useEffect, useId, useRef } from "react";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import ContactForm from "@/components/forms/ContactForm";
import { ContactFormsProvider } from "@/components/forms/FormLockContext";
import { products } from "@/lib/data/products";
import { siteConfig } from "@/lib/constants";

export type LeadTab = "demo" | "message";

interface LeadDialogProps {
  open: boolean;
  tab: LeadTab;
  onTabChange: (tab: LeadTab) => void;
  onClose: () => void;
  /** First path segment under /products/, if the visitor is on a product page. */
  pageProduct?: string;
  /** Subject carried by the link that opened the popup (careers "Apply" links). */
  defaultSubject?: string;
}

const tabs: { id: LeadTab; label: string; intro: string }[] = [
  {
    id: "demo",
    label: "Book a Demo",
    intro: "See the product in action. We call back within one business day.",
  },
  {
    id: "message",
    label: "Send a Message",
    intro: "For everything else, including support, partnerships and careers.",
  },
];

/**
 * The enquiry popup: the same demo and contact forms as the contact page, so
 * every lead and conversion event fires exactly as it does there. Opened by
 * LeadDialogHost, which loads this file only when a visitor first needs it.
 */
export default function LeadDialog({
  open,
  tab,
  onTabChange,
  onClose,
  pageProduct,
  defaultSubject,
}: LeadDialogProps) {
  const uid = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const defaultProduct =
    pageProduct && products.some((p) => p.slug === pageProduct) ? pageProduct : "";
  const active = tabs.find((t) => t.id === tab) ?? tabs[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();

    // With a mouse or trackpad, start in the first field. On touch screens that
    // would raise the keyboard over the form before the visitor has read it.
    const firstField = dialog.querySelector<HTMLElement>(
      '[role="tabpanel"]:not([hidden]) :is(input, select, textarea):not([tabindex="-1"])',
    );
    if (window.matchMedia("(pointer: fine)").matches && firstField) firstField.focus();
    else titleRef.current?.focus();

    // Stop the page behind from scrolling, without the layout jumping sideways
    // when the scrollbar disappears.
    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const previous = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    return () => {
      body.style.overflow = previous.overflow;
      body.style.paddingRight = previous.paddingRight;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={`${uid}-title`}
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop is dispatched to the dialog element itself.
        const dialog = dialogRef.current;
        if (!dialog || event.target !== dialog) return;
        const box = dialog.getBoundingClientRect();
        const inside =
          event.clientX >= box.left &&
          event.clientX <= box.right &&
          event.clientY >= box.top &&
          event.clientY <= box.bottom;
        if (!inside) onClose();
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-hidden bg-white p-0 text-navy-900 backdrop:bg-navy-900/60 open:flex sm:m-auto sm:h-fit sm:max-h-[calc(100dvh-3rem)] sm:max-w-xl sm:rounded-3xl sm:shadow-[0_40px_90px_-30px_rgb(16_26_51_/_0.6)]"
    >
      <div className="h-1.5 shrink-0 bg-gradient-to-r from-accent-500 to-primary-600" />

      <div className="flex shrink-0 items-start justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-6">
        <div>
          <h2
            id={`${uid}-title`}
            ref={titleRef}
            tabIndex={-1}
            className="font-heading text-xl font-extrabold text-navy-900 outline-none sm:text-2xl"
          >
            {active.label}
          </h2>
          <p className="mt-1 text-sm text-navy-600">{active.intro}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="-mr-2 -mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy-500 transition-colors hover:bg-navy-100 hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        role="tablist"
        aria-label="Enquiry type"
        className="mx-5 mt-4 grid shrink-0 grid-cols-2 gap-1 rounded-full bg-navy-100 p-1 sm:mx-8"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${uid}-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`${uid}-panel-${t.id}`}
            onClick={() => onTabChange(t.id)}
            className={`min-h-11 rounded-full px-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
              tab === t.id
                ? "bg-white text-navy-900 shadow-sm"
                : "text-navy-600 hover:text-navy-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
        <ContactFormsProvider>
          <div
            role="tabpanel"
            id={`${uid}-panel-demo`}
            aria-labelledby={`${uid}-tab-demo`}
            hidden={tab !== "demo"}
          >
            <DemoBookingForm key={defaultProduct} short defaultProduct={defaultProduct} />
          </div>
          <div
            role="tabpanel"
            id={`${uid}-panel-message`}
            aria-labelledby={`${uid}-tab-message`}
            hidden={tab !== "message"}
          >
            <ContactForm key={defaultSubject ?? ""} defaultSubject={defaultSubject} />
          </div>
        </ContactFormsProvider>

        <p className="mt-5 text-center text-sm text-navy-600">
          Prefer to talk?{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="font-bold text-primary-700 underline-offset-2 hover:underline"
          >
            Call {siteConfig.phone}
          </a>
        </p>
      </div>
    </dialog>
  );
}
