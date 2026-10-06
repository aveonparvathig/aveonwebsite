import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sustainable Development Goals | UNSDG Tracker",
  description:
    "Map your institution's programmes, research and outreach to all 17 UN Sustainable Development Goals and report your contribution with ease.",
};

const goals = [
  { num: "01", color: "#E5243B", title: "No Poverty", desc: "Track scholarships, fee waivers and financial aid extended to students in need." },
  { num: "02", color: "#DDA63A", title: "Zero Hunger", desc: "Monitor canteen nutrition programmes and food support initiatives on campus." },
  { num: "03", color: "#4C9F38", title: "Good Health & Well-being", desc: "Maintain student and staff health records, counselling and wellness activity logs." },
  { num: "04", color: "#C5192D", title: "Quality Education", desc: "Track learning outcomes, curriculum design and academic performance across programmes." },
  { num: "05", color: "#FF3A21", title: "Gender Equality", desc: "Report enrolment, faculty and leadership gender ratios across the institution." },
  { num: "06", color: "#26BDE2", title: "Clean Water & Sanitation", desc: "Record campus water quality, sanitation facilities and maintenance compliance." },
  { num: "07", color: "#FCC30B", title: "Affordable & Clean Energy", desc: "Track renewable energy use, solar installations and energy-saving initiatives." },
  { num: "08", color: "#A21942", title: "Decent Work & Economic Growth", desc: "Monitor placements, internships and employability outcomes for every batch." },
  { num: "09", color: "#FD6925", title: "Industry, Innovation & Infrastructure", desc: "Log research projects, patents and industry collaborations in one place." },
  { num: "10", color: "#DD1367", title: "Reduced Inequalities", desc: "Track inclusive admissions, scholarships and support for underrepresented groups." },
  { num: "11", color: "#FD9D24", title: "Sustainable Cities & Communities", desc: "Record community outreach, extension activities and local partnerships." },
  { num: "12", color: "#BF8B2E", title: "Responsible Consumption & Production", desc: "Track paperless operations, waste management and resource efficiency on campus." },
  { num: "13", color: "#3F7E44", title: "Climate Action", desc: "Log sustainability drives, carbon-reduction initiatives and green campus programmes." },
  { num: "14", color: "#0A97D9", title: "Life Below Water", desc: "Capture environmental research and awareness programmes on aquatic ecosystems." },
  { num: "15", color: "#56C02B", title: "Life on Land", desc: "Track tree plantation drives, green cover and biodiversity initiatives on campus." },
  { num: "16", color: "#00689D", title: "Peace, Justice & Strong Institutions", desc: "Manage grievance redressal, governance records and institutional transparency." },
  { num: "17", color: "#19486A", title: "Partnerships for the Goals", desc: "Track MoUs, industry tie-ups and academic partnerships that extend your impact." },
];

export default function UnsdgPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-purple-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px] px-4 pt-14 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pt-20 lg:pb-14">
          <div className="mb-8">
            <Link
              href="/products/iqac-naac-nba"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-purple-700 hover:text-purple-800"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to IQAC, NAAC &amp; NBA
            </Link>
          </div>

          <span className="inline-block rounded-full bg-purple-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-purple-700">
            UNSDG
          </span>
          <h1 className="mt-5 max-w-[820px] text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.08] text-navy-900">
            Aligned with the UN Sustainable Development Goals
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-navy-700">
            Map your institution&apos;s programmes, research and outreach to all 17 UN Sustainable Development Goals and report your contribution with ease.
          </p>
        </div>
      </section>

      {/* SDG chart */}
      <section className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-2xl bg-white p-2 shadow-[0_26px_60px_-34px_rgb(88_28_135_/_0.4)] sm:p-3">
            <Image
              src="/products/unsdg-goals.png"
              alt="The 17 United Nations Sustainable Development Goals"
              width={1714}
              height={854}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Goal-by-goal detail */}
      <section className="bg-navy-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-extrabold leading-tight text-navy-900">
              How Aveon Tracks Every Goal
            </h2>
            <p className="mt-3.5 text-[16px] leading-relaxed text-navy-700">
              Each of the 17 goals maps to data your institution already generates, so reporting is automatic, not extra work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((g) => (
              <div key={g.num} className="flex gap-4 rounded-2xl border border-navy-900/8 bg-white p-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[13px] font-extrabold text-white"
                  style={{ backgroundColor: g.color }}
                >
                  {g.num}
                </span>
                <div>
                  <h3 className="text-[15px] font-extrabold text-navy-900">{g.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-navy-700">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
