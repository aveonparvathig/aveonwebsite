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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-navy-900 py-16 text-center lg:py-24">
      {/* Decorative ambient glows */}
      <div aria-hidden className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary-500/20 blur-[100px]" />
      <div aria-hidden className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent-500/20 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-wider text-primary-200">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/90">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
