import type { Metadata } from "next";
import Image from "next/image";
import Stats from "@/components/sections/Stats";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Company",
  description:
    "Aveon Infotech is an education technology company building ERP solutions for universities, colleges and schools.",
};

const apps = [
  {
    name: "Aveon Student App",
    text: "Attendance, timetable, fees, exams and results, all in one app for students and parents.",
    glow: "bg-primary-600/20",
    icon: "/products/app-icon-student.png",
  },
  {
    name: "Aveon CMS App",
    text: "Attendance, academics, communication and administration for faculty and staff on the move.",
    glow: "bg-violet-600/20",
    icon: "/products/app-icon-cms.png",
  },
  {
    name: "Canteen App",
    text: "Digital ordering, prepaid wallet and menu management for campus canteens and cafeterias.",
    glow: "bg-accent-500/20",
    icon: "/products/app-icon-canteen.png",
  },
];

/** Small "GET IT ON Google Play" / "Download on the App Store" style badge. */
function StoreBadge({ store }: { store: "android" | "ios" }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[10px] bg-navy-900 px-3 py-1.5 transition-colors group-hover:bg-navy-800">
      {store === "android" ? (
        <svg className="h-4 w-4 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.61 20.5c-.34-.2-.61-.6-.61-1.06V4.56c0-.46.27-.86.61-1.06l10.99 9-10.99 9zm12.13-9.86l2.5-1.43 2.6 1.5c.5.29.5 1 0 1.29l-2.6 1.5-2.5-1.43L18 12l-2.26-1.36zM4.5 3l10.5 6.07-2.43 2.43L4.5 3zm0 18l8.07-8.5 2.43 2.43L4.5 21z" />
        </svg>
      ) : (
        <svg className="h-4 w-4 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.19 7.3c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.67 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      )}
      <span className="text-left leading-tight">
        <span className="block text-[7.5px] font-medium uppercase tracking-wide text-white/70">
          {store === "android" ? "Get it on" : "Download on the"}
        </span>
        <span className="block text-[11px] font-bold text-white">
          {store === "android" ? "Google Play" : "App Store"}
        </span>
      </span>
    </span>
  );
}

const values = [
  {
    title: "Education First",
    text: "We build exclusively for educational institutions: every workflow, report and screen is designed around how campuses actually run.",
    from: "from-primary-500",
    to: "to-primary-700",
    glow: "bg-primary-600/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443" />
      </svg>
    ),
  },
  {
    title: "Integrated by Design",
    text: "One database, one login, nine products. Admissions data flows to accounts, attendance flows to exams: no re-entry, no silos.",
    from: "from-violet-500",
    to: "to-violet-700",
    glow: "bg-violet-600/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Partner, Not Vendor",
    text: "Implementation, training and support are part of the product. Our team stays with you from data migration to daily operations.",
    from: "from-accent-500",
    to: "to-accent-600",
    glow: "bg-accent-500/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Built to Last",
    text: "Institutions plan in decades. We invest in reliable technology, careful upgrades and long-term relationships.",
    from: "from-emerald-500",
    to: "to-emerald-700",
    glow: "bg-emerald-600/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 pt-14 pb-8 sm:px-6 sm:pb-10 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pt-20 lg:pb-10">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              About Us
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              We Build the Operating System for Education
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Aveon Infotech is an education technology company from Coimbatore, India, helping universities, colleges and schools run smarter campuses.
            </p>
            <p className="mt-3 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Built on US-based software technology, Aveon delivers secure, enterprise-grade systems to institutions across the country.
            </p>
          </div>
          <Image
            src="/products/about-hero.webp"
            alt="Aveon Operating System for Education"
            width={1076}
            height={749}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 sm:pt-12 lg:px-8">
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
                schools across India, managing academics, admissions,
                examinations, finance, hostels, libraries and people, all from
                a single integrated system.
              </p>
              <p>
                With 240+ institutions and over a million students on the
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
                className="group relative overflow-hidden rounded-[22px] border border-navy-900/8 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span aria-hidden className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${v.glow} blur-2xl`} />
                <span className={`relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br ${v.from} ${v.to} text-white shadow-[0_12px_24px_-10px_rgb(16_26_51_/_0.45)]`}>
                  {v.icon}
                </span>
                <h3 className="relative mt-4 font-heading text-lg font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-navy-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white py-16 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-[360px] w-[360px] rounded-full bg-primary-600/10 blur-[110px]" />
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-accent-500/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Our Mobile Apps
            </span>
            <h2 className="mt-4 text-[clamp(26px,3.4vw,40px)] font-extrabold leading-tight text-navy-900">
              More by Aveon Infotech Private Limited
            </h2>
            <p className="mt-3.5 text-[17px] leading-relaxed text-navy-700">
              Available on both Android and iOS.
            </p>
          </div>

          <div className="mt-11 grid gap-6 sm:grid-cols-3">
            {apps.map((a) => (
              <div
                key={a.name}
                className="group relative flex flex-col overflow-hidden rounded-[26px] border border-navy-900/8 bg-white p-6.5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span aria-hidden className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${a.glow} blur-2xl`} />

                <span className="relative flex h-14 w-14 items-center justify-center rounded-[18px] bg-white shadow-[0_14px_28px_-12px_rgb(16_26_51_/_0.3)] ring-1 ring-navy-900/8">
                  <Image src={a.icon} alt={`${a.name} icon`} width={40} height={40} className="h-9 w-9 object-contain" />
                </span>

                <h3 className="relative mt-5 text-[19px] font-extrabold text-navy-900">{a.name}</h3>
                <p className="relative mt-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-navy-400">
                  Aveon Infotech Private Limited
                </p>
                <p className="relative mt-3 flex-1 text-[14.5px] leading-relaxed text-navy-700">{a.text}</p>

                <div className="relative mt-5 flex flex-wrap items-center gap-2.5 border-t border-navy-900/8 pt-5">
                  <StoreBadge store="android" />
                  <StoreBadge store="ios" />
                </div>
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
