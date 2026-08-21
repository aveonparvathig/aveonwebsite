import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
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
      <PageHero
        eyebrow="Blog"
        title="Ideas for Smarter Campuses"
        description="News, product updates and practical insights on running educational institutions."
      />

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
