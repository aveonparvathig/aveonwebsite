import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-10 lg:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-15">
        <div>
          <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
            About Aveon
          </span>

          <h2 className="mt-5 max-w-[520px] text-[clamp(28px,3.6vw,44px)] font-extrabold leading-tight text-navy-900">
            Building Technology That Works for Business
          </h2>

          <p className="mt-4.5 max-w-[520px] text-[17px] leading-[1.72] text-navy-700">
            Aveon InfoTech delivers innovative technology solutions that simplify business
            operations, improve efficiency, and help organizations grow. We build reliable
            digital solutions that solve real-world challenges for modern organizations.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-primary-600 px-6.5 py-3.5 text-[14.5px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700"
          >
            About Aveon
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute inset-[8%_6%_6%_8%] rounded-[30px] bg-gradient-to-br from-primary-600/28 to-accent-500/20 blur-[34px]" />
          <div className="relative overflow-hidden rounded-3xl shadow-[0_34px_70px_-28px_rgb(16_26_51_/_0.4)]">
            <Image
              src="/images/erp1.jpg"
              alt="Aveon team working together"
              width={900}
              height={600}
              className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
