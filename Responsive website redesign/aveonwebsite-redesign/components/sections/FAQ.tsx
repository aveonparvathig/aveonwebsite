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
    <section className="mx-auto max-w-[860px] px-4 pb-16 sm:px-6 lg:pb-22">
      <h2 className="text-center text-[clamp(26px,3.2vw,38px)] font-extrabold text-navy-900">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 flex flex-col gap-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-[20px] border border-navy-900/8 bg-white shadow-[0_12px_34px_-24px_rgb(16_26_51_/_0.35)]"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-bold text-navy-900 marker:content-none [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <svg className="h-3.5 w-3.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </summary>
            <p className="px-6 pb-5.5 text-[15px] leading-[1.74] text-navy-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
