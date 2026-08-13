import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import FAQ, { faqJsonLd } from "@/components/sections/FAQ";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aveon Infotech — book a demo, ask about our ERP products, or talk to our team.",
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
  {
    label: "Visit Us",
    value: siteConfig.address,
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
        description="Questions, demos, partnerships — we respond within one business day."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-card"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                {card.label}
              </p>
              {card.href ? (
                <a
                  href={card.href}
                  className="mt-2 block font-medium text-navy-900 hover:text-primary-600"
                >
                  {card.value}
                </a>
              ) : (
                <p className="mt-2 font-medium text-navy-900">{card.value}</p>
              )}
            </div>
          ))}
        </div>

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
              For everything else — support, partnerships, careers.
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
