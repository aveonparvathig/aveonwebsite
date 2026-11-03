import type { Metadata } from "next";
import Link from "next/link";
import { HeroImage } from "@/components/ui/OptimizedImage";
import { fetchOrFallback } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { posts as fallbackPosts } from "@/lib/data/posts";
import { staticPosts, getStaticPost } from "@/lib/data/static-posts";

export const metadata: Metadata = {
  title: "Campus ERP Blog & Resources",
  description:
    "Practical guides for Indian institutions: NAAC, NBA, AICTE and NIRF compliance, Outcome-Based Education, choosing and migrating to a campus ERP, multi-campus management and AI on campus.",
};

const categoryLabels: Record<string, string> = {
  news: "News",
  insights: "Insights",
  updates: "Product Updates",
};

type PostPreview = {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
};

const topics: { title: string; blurb: string; slugs: string[] }[] = [
  {
    title: "Compliance and accreditation",
    blurb: "What NAAC, NBA, AICTE and NIRF actually assess, the evidence each needs, and how to prepare without a last-minute scramble.",
    slugs: [
      "naac-accreditation-checklist",
      "nba-accreditation-guide",
      "aicte-approval-compliance-checklist",
      "nirf-ranking-parameters-explained",
      "obe-implementation-guide",
    ],
  },
  {
    title: "Choosing and running a campus ERP",
    blurb: "From the definition to the business case, the migration playbook and running several institutions on one platform.",
    slugs: [
      "what-is-campus-erp",
      "benefits-unified-campus-management",
      "erp-migration-best-practices",
      "multi-campus-management-guide",
      "ai-in-higher-education",
    ],
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const cmsItems = await fetchOrFallback<PostPreview[]>(postsQuery, fallbackPosts);
  const items: PostPreview[] = [...cmsItems, ...staticPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Blog &amp; Guides
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Ideas for Smarter Campuses
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Practical, long-form guides for the people who run Indian colleges and universities: IQAC coordinators,
              principals, registrars and IT heads. Accreditation and ranking frameworks explained criterion by
              criterion, Outcome-Based Education done properly, and how to choose, migrate to and run a campus ERP.
            </p>
            <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-navy-600">
              Every guide is written by the Aveon team from implementation experience, dated, and updated when the
              frameworks change.
            </p>
          </div>
          <HeroImage
            src="/products/blog-hero.webp"
            alt="Aveon Blog"
            width={1106}
            height={694}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Guides by topic */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold text-navy-900">Guides by topic</h2>
        <div className="mt-10 space-y-14">
          {topics.map((t) => {
            const guides = t.slugs.map(getStaticPost).filter((g): g is NonNullable<typeof g> => Boolean(g));
            return (
              <div key={t.title}>
                <h3 className="text-xl font-extrabold text-navy-900">{t.title}</h3>
                <p className="mt-2 max-w-[720px] text-[15.5px] leading-relaxed text-navy-600">{t.blurb}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/blog/${g.slug}`}
                      className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                    >
                      <span className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
                        Guide · {g.readingTime}
                      </span>
                      <h4 className="mt-3 font-heading text-lg font-bold leading-snug text-navy-900 group-hover:text-primary-600">
                        {g.title}
                      </h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{g.excerpt}</p>
                      <p className="mt-4 text-xs text-navy-500">
                        Updated <time dateTime={g.dateModified}>{formatDate(g.dateModified)}</time>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div>
            <h3 className="text-xl font-extrabold text-navy-900">Evaluating vendors</h3>
            <p className="mt-2 max-w-[720px] text-[15.5px] leading-relaxed text-navy-600">
              A weighted scorecard you can apply to any campus ERP vendor, with the demo question that exposes each
              criterion and a five-year cost template.
            </p>
            <Link
              href="/comparisons"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              Compare campus ERP vendors →
            </Link>
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold text-navy-900">All posts</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {categoryLabels[post.category] ?? post.category}
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-navy-900 group-hover:text-primary-600">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{post.excerpt}</p>
              <p className="mt-5 text-xs text-navy-500">
                {post.author} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
