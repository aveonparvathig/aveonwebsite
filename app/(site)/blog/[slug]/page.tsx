import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import CTASection from "@/components/sections/CTASection";
import { fetchOrFallback } from "@/lib/sanity";
import { postBySlugQuery } from "@/lib/queries";
import { posts, getPost, type Post } from "@/lib/data/posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

type SanityPost = Omit<Post, "paragraphs"> & {
  paragraphs?: string[];
  content?: unknown[];
};

type BlogPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

async function loadPost(slug: string): Promise<SanityPost | undefined> {
  return fetchOrFallback<SanityPost | undefined>(
    postBySlugQuery,
    getPost(slug),
    { slug },
  );
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const jsonLd = [
    articleJsonLd({
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      publishedAt: post.publishedAt,
      dateModified: post.publishedAt,
      author: post.author,
    }),
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: post.title, href: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <Link
          href="/blog"
          className="text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          ← All posts
        </Link>
        <h1 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-navy-500">
          {post.author} · {formatDate(post.publishedAt)}
        </p>

        <div className="prose-lg mt-10 space-y-5 leading-relaxed text-navy-700">
          {post.content ? (
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            <PortableText value={post.content as any} />
          ) : (
            post.paragraphs?.map((p, i) => <p key={i}>{p}</p>)
          )}
        </div>
      </article>

      <CTASection />
    </>
  );
}
