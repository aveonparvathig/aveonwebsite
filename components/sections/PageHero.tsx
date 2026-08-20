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
    <section className="bg-gradient-to-b from-navy-50 to-white py-16 text-center lg:py-20 border-b border-navy-100">
      <div className="mx-auto max-w-3xl px-4">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-extrabold text-navy-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-600">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
