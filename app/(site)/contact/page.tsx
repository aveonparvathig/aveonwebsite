import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import { ContactFormsProvider } from "@/components/forms/FormLockContext";
import FAQ, { faqJsonLd } from "@/components/sections/FAQ";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aveon Infotech to book a demo, ask about our ERP products, or talk to our team.",
};

const offices = [
  {
    label: "INDIA OFFICE",
    title: "Coimbatore, India",
    address: siteConfig.address,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Aveon+Infotech,Coimbatore,Tamil+Nadu,India",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Contact Us
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Let's Talk About Your Campus
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Questions, demos, partnerships: we respond within one business day.
            </p>
          </div>
          <Image
            src="/products/about.jpg"
            alt="Contact Aveon"
            width={600}
            height={400}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* GET IN TOUCH — 3-column: Call, Email, Office */}
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
            Get In Touch
          </p>

          <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
            Connect With Aveon
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-navy-600 sm:text-base">
            Call, email, or visit us at our office in India.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Call Us */}
          <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl">
            <div className="absolute left-0 right-0 top-0 h-1 bg-primary-600" />
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-100 shadow-sm">
              <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-600">Call Us</p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-xl font-bold text-navy-900 transition-colors hover:text-primary-600"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Email Us */}
          <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl">
            <div className="absolute left-0 right-0 top-0 h-1 bg-primary-600" />
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-100 shadow-sm">
              <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-600">Email Us</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-xl font-bold text-navy-900 transition-colors hover:text-primary-600"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Office */}
          {offices.map((office) => (
            <div
              key={office.label}
              className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:col-span-2 lg:col-span-1"
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-primary-600" />

              {/* Location Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-100 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-primary-600"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                  />
                  <circle cx="12" cy="9" r="2.3" />
                </svg>
              </div>

              {/* Office Content */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                  {office.label}
                </p>

                <h3 className="mt-1 text-xl font-bold text-navy-900">
                  {office.title}
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-navy-600">
                  {office.address}
                </p>

                {/* Map CTA */}
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-primary-600 hover:shadow-md"
                >
                  View Location
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M4 10h11M10 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FORMS — EQUAL HEIGHT */}
        <ContactFormsProvider>
          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div id="demo" className="scroll-mt-28 h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-[0_30px_70px_-40px_rgb(16_26_51_/_0.4)]">
                <div className="h-1.5 bg-gradient-to-r from-accent-500 to-accent-600" />
                <div className="flex items-center gap-4 bg-gradient-to-br from-accent-50 to-white px-6 py-5 sm:px-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-[0_12px_24px_-12px_rgb(16_26_51_/_0.5)]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-extrabold text-navy-900 sm:text-2xl">Book a Demo</h2>
                    <p className="mt-0.5 text-sm text-navy-600">See the product in action with a personalized walkthrough.</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <DemoBookingForm />
                </div>
              </div>
            </div>

            <div className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-[0_30px_70px_-40px_rgb(16_26_51_/_0.4)]">
                <div className="h-1.5 bg-gradient-to-r from-primary-500 to-primary-700" />
                <div className="flex items-center gap-4 bg-gradient-to-br from-primary-50 to-white px-6 py-5 sm:px-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-[0_12px_24px_-12px_rgb(16_26_51_/_0.5)]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-xl font-extrabold text-navy-900 sm:text-2xl">Send a Message</h2>
                    <p className="mt-0.5 text-sm text-navy-600">For everything else, including support, partnerships and careers.</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </ContactFormsProvider>
      </section>

      <FAQ />
    </>
  );
}