import { fetchOrFallback } from "@/lib/sanity";
import { testimonialsQuery } from "@/lib/queries";
import { testimonials as fallbackTestimonials, type Testimonial } from "@/lib/data/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent-500" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "" : "opacity-25"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.959c.3.921-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.175 0l-3.367 2.447c-.783.57-1.838-.197-1.539-1.118l1.287-3.959a1 1 0 00-.364-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </div>
  );
}

export default async function Testimonials() {
  const items = await fetchOrFallback<Testimonial[]>(
    testimonialsQuery,
    fallbackTestimonials,
  );

  return (
    <section className="bg-navy-50/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Trusted by Institutions Like Yours
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-card"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-100 pt-4">
                <p className="font-heading font-bold text-navy-900">{t.name}</p>
                <p className="mt-0.5 text-xs text-navy-500">
                  {t.role} · {t.institution}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
