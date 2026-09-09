import type { Metadata } from "next";
import Image from "next/image";
import Stats from "@/components/sections/Stats";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Company",
  description:
    "Aveon Infotech is an education technology company building ERP solutions for universities, colleges and schools.",
};

const values = [
  {
    title: "Education First",
    text: "We build exclusively for educational institutions — every workflow, report and screen is designed around how campuses actually run.",
  },
  {
    title: "Integrated by Design",
    text: "One database, one login, nine products. Admissions data flows to accounts, attendance flows to exams — no re-entry, no silos.",
  },
  {
    title: "Partner, Not Vendor",
    text: "Implementation, training and support are part of the product. Our team stays with you from data migration to daily operations.",
  },
  {
    title: "Built to Last",
    text: "Institutions plan in decades. We invest in reliable technology, careful upgrades and long-term relationships.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              About Us
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              We Build the Operating System for Education
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Aveon Infotech is an education technology company from Coimbatore, India helping universities, colleges and schools run smarter campuses.
            </p>
          </div>
          <Image
            src="/products/erp1.jpg"
            alt="Aveon Operating System for Education"
            width={600}
            height={400}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
              From One Campus to Hundreds
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Aveon Infotech started with a simple observation: educational
                institutions were running world-class academics on
                spreadsheets, paper registers and disconnected software.
              </p>
              <p>
                Today our ERP platform powers universities, colleges and
                schools across India managing academics, admissions,
                examinations, finance, hostels, libraries and people, all from
                a single integrated system.
              </p>
              <p>
                With 150+ institutions and over a million students on the
                platform, we remain focused on one thing: software that lets
                educators spend less time on administration and more time on
                education.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTASection />
    </>
  );
}
