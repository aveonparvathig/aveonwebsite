import Link from "next/link";
import Image from "next/image";
import { products as fallbackProducts, type Product } from "@/lib/data/products";
import { fetchOrFallback } from "@/lib/sanity";
import { productsQuery } from "@/lib/queries";
import ProductIcon from "@/components/ui/ProductIcon";

const heroImages: Record<string, string> = {
  "university-erp": "/products/university.png",
};

export default async function ProductsGrid() {
  const fetched = await fetchOrFallback<Product[]>(productsQuery, fallbackProducts);
  const products = fetched.map((p) => ({
    ...p,
    slug: p.slug.replace(/\s+/g, "-").toLowerCase(),
  }));

  const [featured, ...rest] = products;

  return (
    <section className="bg-gradient-to-b from-navy-50 to-white">
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[660px] text-center">
          <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
            Our Products
          </span>
          <h2 className="mt-5 text-[clamp(28px,3.8vw,46px)] font-extrabold leading-tight text-navy-900">
            One Platform for Every Campus Need
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-navy-700">
            Nine integrated products covering academics, administration, finance and campus
            life use them together or start with one.
          </p>
        </div>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured — wide tinted card */}
          {featured && (
            <Link
              href={`/products/${featured.slug}`}
              className="spotlight-card group flex flex-wrap items-center gap-6.5 rounded-[28px] border border-primary-600/18 bg-gradient-to-br from-primary-50 to-[#dce9ff] p-7.5 shadow-[0_20px_50px_-26px_rgb(29_111_242_/_0.4)] transition-transform duration-300 hover:-translate-y-1.5 sm:col-span-2"
            >
              <span className="min-w-0 flex-1 basis-60">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-accent-700">
                  Most deployed
                </span>
                <span className="mt-4 block text-[clamp(24px,2.6vw,32px)] font-extrabold text-navy-900">
                  {featured.title}
                </span>
                <span className="mt-2.5 block text-[15px] leading-relaxed text-navy-700">
                  {featured.description}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-bold text-primary-600">
                  Learn more
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </span>
              <span className="min-w-0 flex-1 basis-65 overflow-hidden rounded-[20px] border border-primary-600/18 bg-[#f4f8ff]">
                <Image
                  src={heroImages[featured.slug] ?? "/products/university.png"}
                  alt={`${featured.title} dashboard`}
                  width={680}
                  height={393}
                  className="aspect-[1.73/1] w-full object-cover"
                />
              </span>
            </Link>
          )}

          {rest.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-6.5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12.5 w-12.5 items-center justify-center rounded-[18px] bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600">
                  <ProductIcon slug={product.slug} className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-navy-50 px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.1em] text-navy-600">
                  {product.tagline}
                </span>
              </div>

              <h3 className="mt-5 text-[19.5px] font-extrabold text-navy-900">{product.title}</h3>
              <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-navy-700">
                {product.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-600">
                Learn more
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
