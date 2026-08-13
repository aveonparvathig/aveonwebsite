const stats = [
  { value: "150+", label: "Institutions Served" },
  { value: "9", label: "Integrated Products" },
  { value: "15+", label: "Years of Experience" },
  { value: "1M+", label: "Students Managed" },
];

export default function Stats() {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-navy-300">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
