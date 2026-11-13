import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import { ContactFormsProvider } from "@/components/forms/FormLockContext";
import ClientLogosCarousel from "@/components/sections/ClientLogosCarousel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BookingsLink } from "@/components/ui/BookingsLink";
import { ViewContentTracker } from "@/components/analytics/ViewContentTracker";
import { siteConfig } from "@/lib/constants";
import type { LandingVariant } from "./variants";

// Paid-ad landing page layout. Kept out of the (site) layout so there's no
// global nav, footer or chat widget to pull attention off the form. The copy
// comes from a LandingVariant, so every ad theme gets its own page.

const iconProps = {
  className: "h-[22px] w-[22px]",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

// Paired by position with the variant's four reasons.
const REASON_ICONS: ReactNode[] = [
  <svg key="grid" {...iconProps}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>,
  <svg key="calendar" {...iconProps}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" />
  </svg>,
  <svg key="shield" {...iconProps}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="cap" {...iconProps}>
    <path d="M3 9l9-5 9 5-9 5z" />
    <path d="M7 11.5V16c1.5 1.5 3.2 2 5 2s3.500-.5 5-2v-4.5M21 9v6" />
  </svg>,
];

const PHONE_ICON_PATH =
  "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.500A2.25 2.25 0 002.25 4.500v2.25z";

const tel = siteConfig.phone.replace(/\s/g, "");

const eyebrow = "text-[13px] font-extrabold uppercase tracking-[0.1em] text-accent-700";
const sectionTitle =
  "text-[clamp(26px,3vw,38px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy-900";

export default function LandingPage({ variant }: { variant: LandingVariant }) {
  const stats = [
    { k: siteConfig.stats.institutions, v: "institutions run on Aveon" },
    { k: siteConfig.stats.students, v: "students on the platform" },
    { k: siteConfig.stats.yearsExperience, v: "years building campus software" },
    { k: "30 days", v: "typical go-live for one campus" },
  ];

  const steps = [
    {
      title: "Book your demo",
      text: "Fill in the form. Our team responds within one business day to fix a time.",
    },
    {
      title: "See it on your workflow",
      text: "A 30-minute walkthrough tailored to your institution, with your questions answered live.",
    },
    variant.goLiveStep,
  ];

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(variant.whatsappMessage)}`;

  return (
    // Bottom padding on small screens keeps the fixed contact bar off the footer.
    <main className="flex min-h-full flex-col bg-white pb-[68px] md:pb-0">
      <ViewContentTracker name={variant.trackingName} />

      {/* Minimal top bar — logo + direct contact only, no nav */}
      <header className="border-b border-navy-100 bg-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="flex min-h-11 shrink-0 items-center" aria-label="Aveon Infotech home">
            <Image
              src="/images/aveon-logo-dark.svg"
              alt="Aveon Infotech"
              width={167}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${tel}`}
              className="hidden min-h-11 items-center gap-2 rounded-full border border-navy-400 px-[18px] text-[15px] font-bold text-navy-900 transition hover:border-primary-700 hover:text-primary-700 sm:inline-flex"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d={PHONE_ICON_PATH} />
              </svg>
              {siteConfig.phone}
            </a>
            <WhatsAppButton
              variant="solid"
              label="WhatsApp"
              message={variant.whatsappMessage}
              className="px-4 py-2 text-sm"
            />
          </div>
        </div>
      </header>

      {/* Hero + form above the fold */}
      <section className="bg-navy-50">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-16">
          {/* Left: pitch */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-navy-200 bg-white py-1.5 pl-2.5 pr-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-accent-700">
              <span aria-hidden className="h-2 w-2 rounded-full bg-accent-500" />
              Free 30-minute demo
            </span>

            <h1 className="max-w-[600px] text-[clamp(34px,4.4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-navy-900">
              {variant.headlineLead}{" "}
              <span className="text-primary-700">{variant.headlineHighlight}</span>
            </h1>

            <p className="max-w-[540px] text-lg leading-relaxed text-navy-700">{variant.intro}</p>

            <ul className="flex flex-col gap-3.5">
              {variant.heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base font-semibold text-navy-900">
                  <svg
                    className="mt-px h-[22px] w-[22px] shrink-0 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M7.5 12.5l3 3 6-6.5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-2 text-[15px] text-navy-700">
              <svg className="h-5 w-5 text-accent-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.500l6.1-.9z" />
              </svg>
              <span>
                <strong className="text-navy-900">4.2 on Google</strong> from 54 reviews
              </span>
              <span aria-hidden className="text-navy-400">|</span>
              <span>Coimbatore based since {siteConfig.stats.foundedYear}</span>
            </div>
          </div>

          {/* Right: the form */}
          <div id="demo" className="scroll-mt-6 lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-[20px] border border-navy-200 bg-white shadow-[0_24px_48px_-28px_rgb(16_26_51_/_0.35)]">
              <div className="h-1.5 bg-primary-700" />
              <div className="p-6 sm:p-7">
                <h2 className="text-2xl font-extrabold tracking-[-0.01em] text-navy-900">Book your free demo</h2>
                <p className="mt-1 text-[15px] text-navy-600">
                  No cost, no obligation. We respond within one business day.
                </p>
                <div className="mt-5">
                  <ContactFormsProvider>
                    <DemoBookingForm labeled short defaultProduct={variant.product} />
                  </ContactFormsProvider>
                </div>
                <p className="mt-4 text-center text-sm text-navy-600">
                  Prefer to talk now? Call{" "}
                  <a href={`tel:${tel}`} className="font-bold text-primary-700 hover:text-navy-900">
                    {siteConfig.phone}
                  </a>{" "}
                  or message us on WhatsApp.
                </p>
                <div className="mt-3 text-center">
                  <BookingsLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy-900">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="text-[clamp(30px,3.4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
                {s.k}
              </div>
              <div className="mt-1 text-sm font-semibold text-navy-200">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <ClientLogosCarousel />

      {/* Why Aveon */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:py-[88px]">
          <div className="max-w-[640px]">
            <p className={eyebrow}>Why institutions choose Aveon</p>
            <h2 className={`mt-3 ${sectionTitle}`}>{variant.reasonsTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {variant.reasons.map((r, i) => (
              <div key={r.title} className="flex flex-col gap-3.5 rounded-2xl border border-navy-200 bg-white p-[26px]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  {REASON_ICONS[i % REASON_ICONS.length]}
                </span>
                <h3 className="text-lg font-extrabold text-navy-900">{r.title}</h3>
                <p className="text-[15px] leading-relaxed text-navy-700">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-navy-50">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-[88px]">
          <div className="flex flex-col gap-4">
            <p className={eyebrow}>{variant.modulesEyebrow}</p>
            <h2 className={sectionTitle}>{variant.modulesTitle}</h2>
            <p className="max-w-[480px] text-[17px] leading-relaxed text-navy-700">{variant.modulesText}</p>
            <a
              href="#demo"
              className="inline-flex min-h-12 items-center gap-2 self-start rounded-xl bg-primary-700 px-[22px] text-[15px] font-extrabold text-white transition hover:bg-primary-800"
            >
              See it in a demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {variant.modules.map((m) => (
              <li key={m} className="rounded-xl border border-navy-200 bg-white px-[18px] py-4 text-[15px] font-bold text-navy-900">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:py-[88px]">
          <div className="max-w-[640px]">
            <p className={eyebrow}>What happens next</p>
            <h2 className={`mt-3 ${sectionTitle}`}>From this form to go-live in three steps</h2>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-3 rounded-2xl bg-navy-50 p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-base font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="text-[19px] font-extrabold text-navy-900">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-navy-700">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonial */}
      {variant.showTestimonial && (
        <section className="bg-navy-900">
          <figure className="mx-auto flex max-w-[900px] flex-col gap-6 px-4 py-16 sm:px-6 lg:py-20">
            <svg className="h-10 w-10 text-accent-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4 17v-5c0-3.300 2-6 5.500-7l.8 1.800C8.300 7.700 7.400 9 7.200 10.500H10V17zm10 0v-5c0-3.300 2-6 5.500-7l.8 1.800c-2 .9-2.900 2.200-3.100 3.700H20V17z" />
            </svg>
            <blockquote className="text-[clamp(20px,2.4vw,28px)] font-semibold leading-[1.45] text-white">
              Aveon brought our admissions, examinations and accreditation reporting onto one system. The
              team understood how an Indian college actually runs.
            </blockquote>
            <figcaption>
              <span className="block text-base font-extrabold text-white">Dr. K. A. Chinnaraju</span>
              <span className="block text-sm text-navy-200">Director, CIET, Coimbatore</span>
            </figcaption>
          </figure>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6 lg:py-[88px]">
          <h2 className={sectionTitle}>Questions before you book</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {variant.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-navy-200 px-[26px] py-6">
                <h3 className="text-[17px] font-extrabold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:py-[72px]">
          <div className="flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-primary-700 p-8 sm:p-11">
            <div className="min-w-0 flex-[1_1_420px]">
              <h2 className="text-[clamp(24px,2.8vw,34px)] font-extrabold leading-tight tracking-[-0.01em] text-white">
                {variant.closingTitle}
              </h2>
              <p className="mt-2.5 text-[17px] leading-relaxed text-white">
                Put your questions to us directly in a 30-minute walkthrough tailored to your institution.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="inline-flex min-h-[52px] items-center rounded-xl bg-white px-[26px] text-base font-extrabold text-navy-900 transition hover:bg-navy-50"
              >
                Book my free demo
              </a>
              <a
                href={`tel:${tel}`}
                className="inline-flex min-h-[52px] items-center rounded-xl border border-white px-[22px] text-base font-bold text-white transition hover:bg-white/10"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Slim footer */}
      <footer className="mt-auto border-t border-navy-100 bg-white">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 px-4 py-7 text-sm text-navy-600 sm:flex-row sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Image src="/images/aveon-logo-dark.svg" alt="Aveon Infotech" width={130} height={28} className="h-7 w-auto" />
            <span>© {new Date().getFullYear()} {siteConfig.location.legalName}. Coimbatore, India.</span>
          </div>
          <span className="flex items-center gap-5">
            <a href={`tel:${tel}`} className="inline-flex min-h-11 items-center font-bold text-navy-700 hover:text-primary-700">
              {siteConfig.phone}
            </a>
            <Link href="/privacy" className="inline-flex min-h-11 items-center text-navy-700 underline hover:text-primary-700">
              Privacy
            </Link>
          </span>
        </div>
      </footer>

      {/* Fixed contact bar on phones and small tablets, where about half the ad
          clicks arrive and the form sits below the pitch. Taps on tel: and wa.me
          links are reported by LeadSignals in the root layout. */}
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-200 bg-white px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-16px_rgb(16_26_51_/_0.35)] md:hidden"
      >
        <div className="mx-auto grid max-w-[520px] grid-cols-3 gap-2">
          <a
            href={`tel:${tel}`}
            className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-navy-400 text-[15px] font-extrabold text-navy-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d={PHONE_ICON_PATH} />
            </svg>
            Call
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1a8f4a] text-[15px] font-extrabold text-white"
          >
            WhatsApp
          </a>
          <a
            href="#demo"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary-700 text-[15px] font-extrabold text-white"
          >
            Book demo
          </a>
        </div>
      </nav>
    </main>
  );
}
