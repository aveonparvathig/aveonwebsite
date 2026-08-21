const stats = [
  { value: "200+", label: "Institutions Served" },
  { value: "9", label: "Integrated Products" },
  { value: "17+", label: "Years of Experience" },
  { value: "1M+", label: "Students Managed" },
];

/** Elevated blue strip — sits under the hero, overlapping the section above. */
export default function Stats() {
  return (
    <section className="relative z-10 -mt-6 bg-transparent">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-[26px] bg-gradient-to-br from-primary-600 to-primary-700 shadow-[0_26px_60px_-26px_rgb(29_111_242_/_0.55)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-r border-white/10 px-6 py-7">
              <p className="text-[clamp(28px,3.4vw,40px)] font-extrabold text-white">{s.value}</p>
              <p className="mt-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-white">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
