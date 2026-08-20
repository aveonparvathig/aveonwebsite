import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, type Product } from "@/lib/data/products";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import CTASection from "@/components/sections/CTASection";
import { fetchOrFallback } from "@/lib/sanity";
import { productBySlugQuery } from "@/lib/queries";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type ProductPageProps = { params: Promise<{ slug: string }> };

async function loadProduct(slug: string): Promise<Product | undefined> {
  return fetchOrFallback<Product | undefined>(
    productBySlugQuery,
    getProduct(slug),
    { slug },
  );
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await loadProduct(slug);
  if (!product) return {};
  return { title: product.title, description: product.description };
}

/** Per-product hero image (place PNGs/JPGs in /public/products/) */
const heroImages: Record<string, string> = {
  "university-erp": "/products/university.png",
  "college-erp": "/products/cms.png",
  "school-erp": "/products/school.png",
  "lms-ai-chatbot": "/products/lms.png",
  "hrm-payroll": "/products/hrm.png",
  "library-management": "/products/lib.png",
  "hostel-mess": "/products/hostel.png",
  "coe": "/products/co.png",
  "inventory-management": "/products/invent.png",
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await loadProduct(slug);
  if (!product) notFound();

  const heroImg = heroImages[product.slug] ?? "/images/university.png";

  const jsonLd = [
    productJsonLd(product),
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: product.title, href: `/products/${product.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: 2-column split ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white border-b border-navy-100">
        {/* ambient glows */}
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-primary-200/30 blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-200/20 blur-[80px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

          {/* Left: text */}
          <div>
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              {product.tagline}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl xl:text-6xl">
              {product.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-600">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700"
              >
                Get a DEMO →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Right: product image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-100/40 via-transparent to-accent-100/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-navy-100 shadow-2xl">
              <Image
                src={heroImg}
                alt={`${product.title} dashboard`}
                width={680}
                height={430}
                priority
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Key Features</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-5 shadow-card"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <p className="text-sm font-medium text-navy-800">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Products ── */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy-900">Related Products</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {products
            .filter((p) => p.slug !== product.slug)
            .slice(0, 4)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="rounded-full border border-navy-200 px-5 py-2.5 text-sm font-medium text-navy-800 hover:border-primary-400 hover:text-primary-600"
              >
                {p.title}
              </Link>
            ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
