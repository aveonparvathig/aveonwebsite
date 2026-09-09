import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Aveon Infotech — reseller, implementation and technology partnerships for education ERP.",
};

const models = [
  {
    title: "Reseller Partners",
    text: "Bring Aveon ERP to institutions in your region with sales enablement, marketing support and attractive margins.",
  },
  {
    title: "Implementation Partners",
    text: "Certified partners who deliver data migration, configuration and training for campuses on our platform.",
  },
  {
    title: "Technology Partners",
    text: "Integrate your product with the Aveon platform payment gateways, biometric devices, SMS/WhatsApp and more.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Partners
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Grow With the Aveon Ecosystem
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              We work with resellers, implementation specialists and technology providers across India and beyond.
            </p>
          </div>
          <Image
            src="/products/part.jpg"
            alt="Aveon Partners"
            width={600}
            height={400}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {models.map((m) => (
            <div key={m.title} className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
              <h2 className="font-heading text-xl font-bold text-navy-900">{m.title}</h2>
              <p className="mt-3 leading-relaxed text-navy-600">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Become a Partner
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-600">
            Tell us about your organization and the partnership model you&apos;re
            interested in our partnerships team will get back within two
            business days.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-700"
          >
            Start the Conversation →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
