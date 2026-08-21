import Link from "next/link";
import { products as fallbackProducts, type Product } from "@/lib/data/products";
import { fetchOrFallback } from "@/lib/sanity";
import { productsQuery } from "@/lib/queries";
import ProductIcon from "@/components/ui/ProductIcon";

export default async function ProductsGrid() {
  const fetchedProducts = await fetchOrFallback<Product[]>(
    productsQuery,
    fallbackProducts,
  );
  
  const products = fetchedProducts.map((p) => ({
    ...p,
    slug: p.slug.replace(/\s+/g, "-").toLowerCase(),
  }));
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-transparent">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
          Our Products
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
          One Platform for Every Campus Need
        </h2>
        <p className="mt-4 text-base text-navy-600 sm:text-lg">
          Nine integrated products covering academics, administration, finance
          and campus life  use them together or start with one.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-navy-100 p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-300 hover:shadow-card-hover sm:p-7"
          >
            {/* Top accent line on hover */}
            <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary-600 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />

            <div className="flex items-start justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 shadow-[inset_0_1px_0_rgb(255_255_255)] transition-all duration-300 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgb(29_111_242_/_0.5)]">
                <ProductIcon slug={product.slug} className="h-6 w-6" />
              </span>
              <span className="rounded-full bg-navy-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-500 transition-colors group-hover:bg-accent-50 group-hover:text-accent-600">
                {product.tagline}
              </span>
            </div>

            <h3 className="mt-5 font-heading text-lg font-bold text-navy-900 transition-colors group-hover:text-primary-700 sm:text-xl">
              {product.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              {product.description}
            </p>

            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
              Learn more
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
