import { fetchOrFallback } from "@/lib/sanity";
import { testimonialsQuery } from "@/lib/queries";
import { testimonials as fallbackTestimonials, type Testimonial } from "@/lib/data/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent-500" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < count ? "" : "opacity-25"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.959c.3.921-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.175 0l-3.367 2.447c-.783.57-1.838-.197-1.539-1.118l1.287-3.959a1 1 0 00-.364-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
      </svg>
      ))}
    </div>
  );
}

const initials = (name: string) =>
  name
    .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default async function Testimonials() {
  const items = await fetchOrFallback<Testimonial[]>(testimonialsQuery, fallbackTestimonials);

  return (
    <section className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-22">
      <div className="mx-auto max-w-[620px] text-center">
        <span className="inline-block rounded-full bg-accent-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-accent-700">
          Testimonials
        </span>
        <h2 className="mt-5 text-[clamp(28px,3.8vw,46px)] font-extrabold leading-tight text-navy-900">
          Trusted by Institutions Like Yours
        </h2>
      </div>

      <div className="mt-11 grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-7 shadow-card"
          >
            <Stars count={t.rating} />
            <blockquote className="mt-4.5 flex-1 text-[15.5px] leading-[1.74] text-navy-700">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3.5 border-t border-navy-900/8 pt-4.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-[15px] font-extrabold text-white">
                {initials(t.name)}
              </span>
              <span>
                <span className="block text-[15px] font-bold text-navy-900">{t.name}</span>
                <span className="mt-0.5 block text-[12.5px] text-navy-600">
                  {t.role} · {t.institution}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
