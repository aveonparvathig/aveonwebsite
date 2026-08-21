import Link from "next/link";
import { services } from "@/lib/data/services";

/** Software development services — a light-blue band, distinct from the ERP products. */
export default function ServicesSection() {
  return (
    <section className="border-y border-navy-900/6 bg-[#f0f7ff]">
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-22">
        <div className="flex flex-wrap items-end justify-between gap-5.5">
          <div>
            <span className="inline-block rounded-full bg-accent-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-accent-700">
              Software Development
            </span>
            <h2 className="mt-5 max-w-[620px] text-[clamp(28px,3.8vw,44px)] font-extrabold leading-tight text-navy-900">
              Software Built Around the Way You Work
            </h2>
          </div>
          <p className="max-w-[380px] text-[15.5px] leading-[1.7] text-navy-700">
            Beyond campus ERP, our engineering team builds automation, apps and business
            systems for organisations of every kind.
          </p>
        </div>

        <div className="mt-9.5 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="flex flex-col rounded-3xl border border-navy-900/8 bg-white p-6.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_56px_-24px_rgb(16_26_51_/_0.3)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600">
                <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </span>
              <h3 className="mt-4.5 text-[18.5px] font-extrabold text-navy-900">{service.title}</h3>
              <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-navy-700">{service.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
