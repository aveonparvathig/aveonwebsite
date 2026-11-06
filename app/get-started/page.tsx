import type { Metadata } from "next";
import Link from "next/link";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import { ContactFormsProvider } from "@/components/forms/FormLockContext";
import ClientLogosCarousel from "@/components/sections/ClientLogosCarousel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BookingsLink } from "@/components/ui/BookingsLink";
import { siteConfig } from "@/lib/constants";

// Paid-ad landing page: kept out of the (site) layout so there's no global nav,
// footer or chat widget to pull attention off the form. Not indexed — it exists
// for ad traffic and must not compete with the organic pages.
export const metadata: Metadata = {
  // absolute: this page is under the root layout, whose title template would
  // otherwise append "| Aveon Infotech" a second time.
  title: { absolute: "Book a Free College ERP Demo | Aveon Infotech" },
  description:
    "See Aveon's campus ERP in action. Trusted by 200+ institutions and 1M+ students. Book a free, personalized demo — our team responds within one business day.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/get-started" },
};

const OUTCOMES: { title: string; text: string }[] = [
  {
    title: "One platform, fourteen modules",
    text: "Admissions, academics, examinations, fees, hostel, library, HR & payroll — on one database, one login.",
  },
  {
    title: "Live in about 30 days",
    text: "Data migration, configuration, role-based training and a supervised go-live for a single campus.",
  },
  {
    title: "NAAC / NBA / AICTE ready",
    text: "Accreditation reports and outcome-based education (OBE) built in — not bolted on at audit time.",
  },
  {
    title: "Affiliated or autonomous",
    text: "Configured for your university's exam and academic workflow, from Anna University to Bharathiar.",
  },
];

const tel = siteConfig.phone.replace(/\s/g, "");

export default function GetStartedPage() {
  return (
    <main className="flex min-h-full flex-col bg-white">
      {/* Minimal top bar — logo + direct contact only, no nav */}
      <header className="border-b border-navy-900/8 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3.5 sm:px-6">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-navy-900">
            Aveon<span className="text-primary-600"> Infotech</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${tel}`}
              className="hidden items-center gap-2 rounded-full border border-navy-900/12 px-4 py-2 text-sm font-bold text-navy-900 transition hover:border-primary-600 hover:text-primary-600 sm:inline-flex"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
            <WhatsAppButton variant="solid" label="WhatsApp" className="px-4 py-2 text-sm" />
          </div>
        </div>
      </header>

      {/* Hero + form above the fold */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f8ff] via-white to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1180px] items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
          {/* Left: pitch */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-white py-1.5 pl-2.5 pr-3.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-primary-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Free personalized demo
            </span>

            <h1 className="mt-5 max-w-[560px] text-[clamp(32px,4.6vw,52px)] font-extrabold leading-[1.1] text-navy-900">
              The campus ERP built for{" "}
              <span className="text-primary-600">Indian colleges &amp; universities</span>
            </h1>

            <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-navy-700">
              See exactly how Aveon runs admissions, academics, examinations, fees and
              accreditation on one platform — tailored to your institution in a 30-minute walkthrough.
            </p>

            {/* Trust stats */}
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { k: siteConfig.stats.institutions, v: "institutions" },
                { k: siteConfig.stats.students, v: "students" },
                { k: `${siteConfig.stats.yearsExperience}`, v: "years" },
                { k: "4.2★", v: "on Google (54 reviews)" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-extrabold text-navy-900">{s.k}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-navy-500">{s.v}</div>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {OUTCOMES.map((o) => (
                <li key={o.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-navy-900">{o.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-navy-600">{o.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <blockquote className="mt-8 max-w-[520px] rounded-2xl border border-navy-900/8 bg-white p-5 shadow-[0_18px_50px_-32px_rgb(16_26_51_/_0.45)]">
              <p className="text-[15px] italic leading-relaxed text-navy-700">
                “Aveon brought our admissions, examinations and accreditation reporting onto one
                system. The team understood how an Indian college actually runs.”
              </p>
              <footer className="mt-3 text-sm font-bold text-navy-900">
                Dr. K. A. Chinnaraju
                <span className="block text-xs font-medium text-navy-500">Director, CIET, Coimbatore</span>
              </footer>
            </blockquote>
          </div>

          {/* Right: the form */}
          <div className="lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-[0_30px_70px_-34px_rgb(16_26_51_/_0.5)]">
              <div className="h-1.5 bg-gradient-to-r from-accent-500 to-accent-600" />
              <div className="bg-gradient-to-br from-accent-50 to-white px-6 py-5 sm:px-7">
                <h2 className="text-xl font-extrabold text-navy-900">Book your free demo</h2>
                <p className="mt-1 text-sm text-navy-600">
                  No cost, no obligation. We respond within one business day.
                </p>
              </div>
              <div className="p-6 sm:p-7">
                <ContactFormsProvider>
                  <DemoBookingForm />
                </ContactFormsProvider>
                <p className="mt-4 text-center text-xs text-navy-500">
                  Prefer to talk now? Call{" "}
                  <a href={`tel:${tel}`} className="font-semibold text-primary-600">
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

      {/* Social proof */}
      <ClientLogosCarousel />

      {/* Slim footer */}
      <footer className="mt-auto border-t border-navy-900/8 bg-white">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-navy-500 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} {siteConfig.location.legalName}. Coimbatore, India.</span>
          <span className="flex items-center gap-4">
            <a href={`tel:${tel}`} className="font-semibold text-navy-700 hover:text-primary-600">{siteConfig.phone}</a>
            <Link href="/privacy" className="hover:text-primary-600">Privacy</Link>
          </span>
        </div>
      </footer>
    </main>
  );
}
