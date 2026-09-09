import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { fetchOrFallback } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { posts as fallbackPosts } from "@/lib/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, product updates and insights on education technology from the Aveon Infotech team.",
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const items = await fetchOrFallback<PostPreview[]>(postsQuery, fallbackPosts);

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Blog
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Ideas for Smarter Campuses
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              News, product updates and practical insights on running educational institutions.
            </p>
          </div>
          <Image
            src="/products/blog.jpg"
            alt="Aveon Blog"
            width={600}
            height={400}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {categoryLabels[post.category] ?? post.category}
              </span>
              <h2 className="mt-4 font-heading text-xl font-bold leading-snug text-navy-900 group-hover:text-primary-600">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                {post.excerpt}
              </p>
              <p className="mt-5 text-xs text-navy-500">
                {post.author} · {formatDate(post.publishedAt)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
