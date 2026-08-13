import Link from "next/link";

function DashboardMockup() {
  return (
    <div className="relative rounded-2xl bg-navy-900 p-3 shadow-2xl">
      <div className="overflow-hidden rounded-lg bg-white">
        {/* Window bar */}
        <div className="flex items-center justify-between bg-navy-50 px-4 py-2">
          <span className="rounded bg-primary-600 px-2 py-0.5 text-[10px] font-bold text-white">
            AVEON ERP
          </span>
          <span className="rounded bg-primary-100 px-2 py-0.5 text-[9px] font-medium text-primary-700">
            Dashboard
          </span>
        </div>
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-12 flex-col items-center gap-3 bg-primary-700 py-4 sm:flex">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className={`h-5 w-5 rounded ${i === 0 ? "bg-white" : "bg-white/25"}`}
              />
            ))}
          </div>
          {/* Content */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Total", value: "1,100" },
                { label: "Attendance", value: "92%" },
                { label: "Qualified", value: "1,040" },
                { label: "Pass Rate", value: "0.96" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-navy-100 bg-navy-50/60 p-2">
                  <p className="text-[8px] uppercase tracking-wide text-navy-500">{s.label}</p>
                  <p className="text-sm font-bold text-navy-900">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {/* Donut */}
              <div className="rounded-lg border border-navy-100 p-2">
                <p className="text-[8px] uppercase text-navy-500">Result Status</p>
                <div className="mx-auto mt-1 h-14 w-14 rounded-full border-[6px] border-amber-400 border-t-primary-600" />
              </div>
              {/* Bars */}
              <div className="rounded-lg border border-navy-100 p-2">
                <p className="text-[8px] uppercase text-navy-500">Fees Summary</p>
                <div className="mt-2 flex h-12 items-end gap-1">
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
              <div className="rounded-lg border border-navy-100 p-2">
                <p className="text-[8px] uppercase text-navy-500">Analytics</p>
                <svg viewBox="0 0 100 40" className="mt-2 h-12 w-full">
                  <path
                    d="M0 32 Q 15 30 25 22 T 50 12 T 75 20 T 100 8"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0 36 Q 20 34 35 28 T 65 24 T 100 18"
                    fill="none"
                    stroke="#3376ff"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-2">
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white">
      {/* Decorative waves */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 w-full text-navy-100"
        viewBox="0 0 1440 320"
        fill="none"
      >
        <path d="M0 160 Q 360 60 720 160 T 1440 160" stroke="currentColor" strokeWidth="60" opacity="0.35" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left copy */}
        <div>
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary-600">
            <span className="h-2 w-2 rounded-full bg-primary-600" />
            Hey, welcome to Aveon Infotech
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-navy-900 sm:text-5xl lg:text-[3.4rem]">
            Smart Campuses,
            <br />
            Real Impact with
            <br />
            <span className="text-primary-600">Education ERP</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-600">
            Aveon Infotech builds modern, integrated ERP platforms for
            universities, colleges and schools — academics, examinations,
            finance and campus life in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-600 py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Free Consultation
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-primary-400", "bg-accent-400", "bg-navy-400"].map((c, i) => (
                  <span
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white ${c} text-[10px] font-bold text-white`}
                  >
                    {["A", "V", "E"][i]}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-navy-900">
                150+ Happy
                <br />
                Institutions
              </p>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="absolute -top-8 right-0 h-40 w-56 rounded-[2.5rem] rounded-bl-none bg-accent-500 lg:-top-12" aria-hidden />
          <div className="relative z-10 lg:mr-6">
            <DashboardMockup />
          </div>
          {/* Floating cards */}
          <div className="absolute -left-2 bottom-6 z-20 hidden rounded-xl bg-white/90 p-4 shadow-card-hover backdrop-blur sm:block">
            <p className="font-heading text-base font-bold text-navy-900">University ERP</p>
            <p className="text-xs text-navy-500">Education ERP</p>
          </div>
          <div className="absolute -right-2 top-1/2 z-20 hidden w-44 rounded-xl bg-primary-600 p-4 text-white shadow-card-hover lg:block">
            <p className="text-sm font-semibold leading-snug">
              Aveon Academy, Warehouse Management
            </p>
            <div className="mt-3 h-16 rounded-lg bg-white/15" />
          </div>
          <div className="absolute -bottom-4 right-8 z-20 flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-card-hover backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950 text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-navy-500">Aveon</p>
              <p className="font-heading text-sm font-bold text-navy-900">GSTFLOW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
