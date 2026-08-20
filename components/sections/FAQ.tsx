const faqs = [
  {
    q: "How long does implementation take?",
    a: "Most single campus institutions go live in about 30 days: data migration in week one, configuration in week two, role-based training in week three, and a supervised go-live in week four. Multi-campus universities typically take 6–10 weeks.",
  },
  {
    q: "Can we start with one product and add more later?",
    a: "Yes. All nine products share one database and one login, so you can start with, say, College ERP and add COE, Library or HRM later without any data migration between them.",
  },
  {
    q: "Is our data migrated from existing software?",
    a: "Yes our implementation team migrates student records, fee histories, staff data and library catalogues from your current software or spreadsheets as part of every rollout.",
  },
  {
    q: "What support do we get after go-live?",
    a: "Every institution gets a dedicated support contact reachable by phone and email, plus ongoing training through Aveon Academy for new staff.",
  },
  {
    q: "Is the platform cloud-based or on-premise?",
    a: "The platform is cloud-hosted and accessible from any browser, with mobile-friendly portals for students and parents. On-premise deployment is available for institutions that require it.",
  },
];

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
      <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-navy-100 bg-white shadow-card"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 font-heading font-semibold text-navy-900 marker:content-none [&::-webkit-details-marker]:hidden">
              {f.q}
              <svg
                className="h-4 w-4 shrink-0 text-primary-600 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </summary>
            <p className="px-6 pb-5 text-sm leading-relaxed text-navy-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
