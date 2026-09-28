const stats = [
  { value: "240+", label: "Institutions Served" },
  { value: "12", label: "Integrated Products" },
  { value: "17+", label: "Years of Experience" },
  { value: "1M+", label: "Students Managed" },
];

/** Elevated blue strip — sits under the hero, overlapping the section above. */
export default function Stats() {
  return (
    <section className="relative z-10 -mt-6 bg-transparent">
      <div className="mx-auto max-w-[1320px] px-9 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-[16px] bg-gradient-to-br from-primary-600 to-primary-700 shadow-[0_26px_60px_-26px_rgb(29_111_242_/_0.55)] sm:rounded-[26px] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-r border-white/10 px-2.5 py-3.5 text-center sm:border-b-0 sm:px-6 sm:py-7">
              <p className="text-[17px] font-extrabold text-white sm:text-[clamp(28px,3.4vw,40px)]">{s.value}</p>
              <p className="mt-1 text-[7.5px] font-bold uppercase leading-tight tracking-[0.06em] text-white sm:mt-2 sm:text-[11.5px] sm:tracking-[0.14em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
