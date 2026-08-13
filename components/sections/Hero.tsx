import Link from "next/link";

function DashboardMockup() {
  return (
    <div className="relative rounded-xl bg-navy-900 p-2 shadow-2xl sm:rounded-2xl sm:p-3">
      <div className="overflow-hidden rounded-lg bg-white">
        {/* Window bar */}
        <div className="flex items-center justify-between bg-navy-50 px-3 py-2 sm:px-4">
          <span className="rounded bg-primary-600 px-2 py-0.5 text-[9px] font-bold text-white sm:text-[10px]">
            AVEON ERP
          </span>
          <span className="rounded bg-primary-100 px-2 py-0.5 text-[8px] font-medium text-primary-700 sm:text-[9px]">
            Dashboard
          </span>
        </div>
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-10 flex-col items-center gap-2.5 bg-primary-700 py-3 sm:flex lg:w-12">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className={`h-4 w-4 rounded lg:h-5 lg:w-5 ${i === 0 ? "bg-white" : "bg-white/25"}`}
              />
            ))}
          </div>
          {/* Content */}
          <div className="flex-1 p-3 sm:p-4">
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {[
                { label: "Total", value: "1,100" },
                { label: "Attend.", value: "92%" },
                { label: "Qualified", value: "1,040" },
                { label: "Pass", value: "0.96" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-navy-100 bg-navy-50/60 p-1.5 sm:p-2">
                  <p className="text-[7px] uppercase tracking-wide text-navy-500 sm:text-[8px]">{s.label}</p>
                  <p className="text-xs font-bold text-navy-900 sm:text-sm">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5 sm:mt-2 sm:gap-2">
              {/* Donut */}
              <div className="rounded-lg border border-navy-100 p-1.5 sm:p-2">
                <p className="text-[7px] uppercase text-navy-500 sm:text-[8px]">Results</p>
                <div className="mx-auto mt-1 h-10 w-10 rounded-full border-[5px] border-amber-400 border-t-primary-600 sm:h-14 sm:w-14 sm:border-[6px]" />
              </div>
              {/* Bars */}
              <div className="rounded-lg border border-navy-100 p-1.5 sm:p-2">
                <p className="text-[7px] uppercase text-navy-500 sm:text-[8px]">Fees</p>
                <div className="mt-1.5 flex h-9 items-end gap-0.5 sm:mt-2 sm:h-12 sm:gap-1">
                  {[60, 85, 45, 70, 95, 55].map((h, i) => (
                    <span
                      key={i}
                      className={`flex-1 rounded-t ${i % 2 ? "bg-accent-400" : "bg-primary-500"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* Line chart */}
              <div className="rounded-lg border border-navy-100 p-1.5 sm:p-2">
                <p className="text-[7px] uppercase text-navy-500 sm:text-[8px]">Analytics</p>
                <svg viewBox="0 0 100 40" className="mt-1.5 h-9 w-full sm:mt-2 sm:h-12">
                  <path d="M0 32 Q 15 30 25 22 T 50 12 T 75 20 T 100 8" fill="none" stroke="#f97316" strokeWidth="2.5" />
                  <path d="M0 36 Q 20 34 35 28 T 65 24 T 100 18" fill="none" stroke="#3376ff" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
            <div className="mt-1.5 hidden grid-cols-4 gap-2 sm:mt-2 sm:grid">
              {["Present Count", "Leave Summary", "Arrivals", "Food Category"].map((label) => (
                <div key={label} className="rounded-lg border border-navy-100 bg-white p-2">
                  <p className="text-[8px] text-navy-500">{label}</p>
                  <div className="mt-1 h-1.5 w-full rounded bg-navy-100">
                    <div className="h-1.5 w-2/3 rounded bg-primary-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const trustPoints = ["150+ Institutions", "1M+ Students", "9 Products, One Login"];

export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-navy-50 via-white to-white">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgb(16 26 51 / 0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black 55%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary-200/40 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-10%] h-64 w-64 rounded-full bg-accent-200/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
            </span>
            Welcome to Aveon Infotech
          </p>

          <h1 className="mt-5 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem]">
            Smart Campuses,
            <br />
            Real Impact with{" "}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
              Education ERP
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-navy-600 sm:text-lg lg:mx-0">
            Modern, integrated ERP for universities, colleges and schools —
            academics, examinations, finance and campus life in one platform.
          </p>

          {/* CTAs — full-width stacked on phones */}
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <Link
              href="/contact#demo"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.5)] transition-all hover:bg-primary-700 sm:py-3"
            >
              Get a Free Demo
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-navy-900 backdrop-blur transition-colors hover:border-primary-400 hover:text-primary-600 sm:py-3"
            >
              Explore Products
            </Link>
          </div>

          {/* Trust row */}
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-xs font-semibold text-navy-700 sm:text-sm">
                <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden
            className="absolute -top-6 right-0 h-28 w-40 rounded-[2rem] rounded-bl-none bg-accent-500 sm:h-40 sm:w-56 lg:-top-12"
          />
          <div className="relative z-10 pt-4 sm:pt-0 lg:mr-6">
            <DashboardMockup />
          </div>

          {/* Floating cards — kept inside viewport on mobile */}
          <div className="absolute bottom-4 left-1 z-20 rounded-lg bg-white/95 p-2.5 shadow-card-hover backdrop-blur sm:bottom-6 sm:-left-2 sm:rounded-xl sm:p-4">
            <p className="font-heading text-xs font-bold text-navy-900 sm:text-base">University ERP</p>
            <p className="text-[10px] text-navy-500 sm:text-xs">Education ERP</p>
          </div>

          <div className="absolute -right-2 top-1/2 z-20 hidden w-44 rounded-xl bg-primary-600 p-4 text-white shadow-card-hover lg:block">
            <p className="text-sm font-semibold leading-snug">
              Aveon Academy, Warehouse Management
            </p>
            <div className="mt-3 h-16 rounded-lg bg-white/15" />
          </div>

          <div className="absolute -bottom-3 right-1 z-20 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 shadow-card-hover backdrop-blur sm:-bottom-4 sm:right-8 sm:gap-3 sm:rounded-xl sm:px-4 sm:py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-950 text-white sm:h-9 sm:w-9">
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div>
              <p className="text-[9px] uppercase tracking-wide text-navy-500 sm:text-[10px]">Aveon</p>
              <p className="font-heading text-xs font-bold text-navy-900 sm:text-sm">GSTFLOW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
