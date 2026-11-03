import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";

type RelatedGuidesProps = {
  slugs: string[];
  heading?: string;
};

export default function RelatedGuides({ slugs, heading = "Further reading" }: RelatedGuidesProps) {
  const guides = slugs.map(getStaticPost).filter((g): g is NonNullable<typeof g> => Boolean(g));
  if (!guides.length) return null;

  return (
    <section className="border-t border-navy-900/8 bg-navy-50 py-14 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold text-navy-900">{heading}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/blog/${g.slug}`}
              className="group flex flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">Guide · {g.readingTime}</span>
              <h3 className="mt-3 text-[17px] font-extrabold leading-snug text-navy-900 group-hover:text-primary-600">{g.title}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-navy-600">{g.excerpt}</p>
              <span className="mt-4 text-sm font-bold text-primary-600">Read the guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
