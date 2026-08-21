import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import FAQ, { faqJsonLd } from "@/components/sections/FAQ";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aveon Infotech to book a demo, ask about our ERP products, or talk to our team.",
};

const contactCards = [
  {
    label: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

const offices = [
  {
    label: "INDIA OFFICE",
    title: "Coimbatore, India",
    address: siteConfig.address,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Coimbatore,Tamil+Nadu,India",
  },
  {
    label: "HEAD OFFICE",
    title: "Alpharetta, USA",
    address: "5261 New Bay Passage, Alpharetta, GA 30005, USA",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=5261+New+Bay+Passage,Alpharetta,GA+30005,USA",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Campus"
        description="Questions, demos, partnerships we respond within one business day."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* CALL + EMAIL */}
        <div className="grid gap-6 sm:grid-cols-2">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                {card.label}
              </p>

              <a
                href={card.href}
                className="mt-2 block font-medium text-navy-900 transition-colors hover:text-primary-600"
              >
                {card.value}
              </a>
            </div>
          ))}
        </div>

        {/* OUR OFFICES */}
        <div className="mt-14">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
              Our Offices
            </p>

            <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
              Connect With Aveon
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-navy-600 sm:text-base">
              Visit us at one of our offices in India or the United States.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {offices.map((office) => (
              <div
                key={office.label}
                className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/80 to-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
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
                <div className="mt-5 text-center">
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
                    className="mt-5 inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-primary-700 hover:shadow-md"
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
        </div>

        {/* FORMS — UNCHANGED */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div id="demo" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Book a Demo
            </h2>

            <p className="mt-2 text-navy-600">
              See the product in action with a personalized walkthrough.
            </p>

            <div className="mt-6 rounded-2xl border border-navy-100 bg-navy-50/50 p-6 sm:p-8">
              <DemoBookingForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Send a Message
            </h2>

            <p className="mt-2 text-navy-600">
              For everything else, including support, partnerships, and careers.
            </p>

            <div className="mt-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}