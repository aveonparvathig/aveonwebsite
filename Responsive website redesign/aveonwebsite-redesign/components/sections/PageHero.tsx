export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
      <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[460px] w-[460px] rounded-full bg-primary-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-10 lg:py-21">
        {eyebrow && (
          <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-[860px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
          {title}
        </h1>
        {description && (
          <p className="mt-4.5 max-w-[600px] text-[17.5px] leading-relaxed text-navy-700">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
