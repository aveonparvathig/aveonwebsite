import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind Aveon Infotech — engineers, implementation specialists and support staff dedicated to education technology.",
};

const departments = [
  {
    title: "Engineering",
    text: "Product engineers building and evolving the nine product Aveon platform.",
  },
  {
    title: "Implementation",
    text: "Specialists who handle data migration, configuration and go live for every campus.",
  },
  {
    title: "Customer Success",
    text: "Dedicated support teams answering institutions through phone email and on-site visits.",
  },
  {
    title: "Aveon Academy",
    text: "Trainers who upskill administrators faculty and staff on the platform.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind the Platform"
        description="A team of engineers, trainers and education specialists working with campuses every day."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card"
            >
              <h3 className="font-heading text-lg font-bold text-navy-900">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{d.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-navy-600">
          Want to join us?{" "}
          <a href="/careers" className="font-semibold text-primary-600 hover:text-primary-700">
            See open positions →
          </a>
        </p>
      </section>

      <CTASection />
    </>
  );
}
