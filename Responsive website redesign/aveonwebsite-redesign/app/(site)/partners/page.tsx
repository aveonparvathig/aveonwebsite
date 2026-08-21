import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
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
      <PageHero
        eyebrow="Partners"
        title="Grow With the Aveon Ecosystem"
        description="We work with resellers, implementation specialists and technology providers across India and beyond."
      />

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
