import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Aveon Infotech — build education technology used by hundreds of institutions and over a million students.",
};

const perks = [
  { title: "Meaningful Work", text: "Software you ship reaches a million+ students and the educators who teach them." },
  { title: "Learn Fast", text: "Small teams, real ownership, and exposure across the full product lifecycle." },
  { title: "Grow With Us", text: "Structured mentoring and Aveon Academy training for every role." },
  { title: "Coimbatore Roots", text: "A stable, growing product company in one of India's friendliest tech cities." },
];

const openings = [
  { role: "Full-stack Developer", type: "Full-time · Coimbatore", dept: "Engineering" },
  { role: "Implementation Consultant", type: "Full-time · Coimbatore / Travel", dept: "Implementation" },
  { role: "Customer Support Executive", type: "Full-time · Coimbatore", dept: "Customer Success" },
  { role: "Business Development Executive", type: "Full-time · Coimbatore", dept: "Sales" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do Career-Defining Work in EdTech"
        description="Help hundreds of institutions and a million+ students run on software you build."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="font-heading text-lg font-bold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-3xl font-extrabold text-navy-900">Open Positions</h2>
        <div className="mt-8 divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-card">
          {openings.map((job) => (
            <div
              key={job.role}
              className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-900">{job.role}</h3>
                <p className="mt-1 text-sm text-navy-600">
                  {job.dept} · {job.type}
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}?subject=Application: ${encodeURIComponent(job.role)}`}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-200 px-6 py-2.5 text-sm font-semibold text-primary-600 hover:bg-primary-50"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-navy-600">
          Don&apos;t see your role?{" "}
          <Link href="/contact" className="font-semibold text-primary-600 hover:text-primary-700">
            Send us your profile
          </Link>{" "}
          — we&apos;re always looking for good people.
        </p>
      </section>
    </>
  );
}
