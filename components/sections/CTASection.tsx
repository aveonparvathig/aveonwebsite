import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section id="demo" className="mx-auto max-w-[1320px] px-4 pb-12 pt-6 sm:px-6 lg:px-10 lg:pb-16">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 px-6 py-12 shadow-[0_40px_90px_-34px_rgb(29_111_242_/_0.7)] sm:px-12 lg:px-15 lg:py-14">
        <div aria-hidden className="absolute -right-20 -top-20 h-65 w-65 rounded-full bg-accent-500/85" />
        <div aria-hidden className="absolute -bottom-28 -left-22 h-70 w-70 rounded-full bg-white/12" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="max-w-[520px] text-[clamp(28px,3.8vw,46px)] font-extrabold leading-tight text-white">
              Ready to Transform Your Institution?
            </h2>
            <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-primary-50">
              See Aveon ERP in action. Book a personalized demo and we&apos;ll walk you through
              the modules that matter to your campus.
            </p>
            <div className="mt-7.5 flex flex-wrap gap-3.5">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-8 py-4 text-[15px] font-bold text-primary-700 transition-transform hover:-translate-y-0.5"
              >
                Get a DEMO
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center whitespace-nowrap rounded-full border border-white/50 px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-white/15"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          <div className="rounded-[26px] bg-white p-3.5">
            <Image
              src="/images/illo-isometric.avif"
              alt="Connected campus operations, end to end"
              width={1350}
              height={900}
              className="w-full animate-floaty"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
