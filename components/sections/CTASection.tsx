import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-primary-600 px-6 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-500/80"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Institution?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
            See Aveon ERP in action. Book a personalized demo and we&apos;ll walk
            you through the modules that matter to your campus.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Get a DEMO →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
