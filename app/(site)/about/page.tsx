import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
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
      <PageHero
        eyebrow="About Us"
        title="We Build the Operating System for Education"
        description="Aveon Infotech is an education technology company from Coimbatore, India — helping universities, colleges and schools run smarter campuses."
      />

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
                schools across India — managing academics, admissions,
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
