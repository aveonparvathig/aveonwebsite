"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/s33-hero.png",
    title: "One Platform.",
    highlight: "Every Institution.",
    description:
      "Connect and manage Schools, Colleges and Universities through one unified campus management platform.",
  },
  {
    image: "/images/s22-hero.png",
    title: "Smarter Campus.",
    highlight: "Better Management.",
    description:
      "Simplify academic and administrative operations with a powerful digital campus management solution.",
  },
  {
    image: "/images/s11-hero.png",
    title: "Connected Campus.",
    highlight: "Powerful Operations.",
    description:
      "Bring your entire institution together with automation, analytics and centralized campus management.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f8ff] via-white to-white">
      {/* ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-44 h-[520px] w-[520px] rounded-full bg-primary-600/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-36 h-[440px] w-[440px] rounded-full bg-accent-500/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-13 lg:px-10 lg:pb-16 lg:pt-13">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary-600/20 bg-white py-2 pl-3 pr-4 text-[11.5px] font-extrabold uppercase tracking-[0.12em] text-primary-700 shadow-[0_8px_20px_-12px_rgb(29_111_242_/_0.5)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-white">
              <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Total Campus Management Solution
          </span>

          <h1 className="mt-5.5 max-w-[600px] text-[clamp(34px,4.6vw,58px)] font-extrabold leading-[1.06] text-navy-900">
            {slide.title}
            <br />
            <span className="text-primary-600">{slide.highlight}</span>
          </h1>

          <p className="mt-5.5 max-w-[520px] text-[clamp(16px,1.5vw,18.5px)] leading-relaxed text-navy-700">
            {slide.description}
          </p>

          <div className="mt-8.5 flex flex-wrap gap-3.5">
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Book a Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-8.5 flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary-600" : "w-2 bg-navy-200 hover:bg-primary-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* App-window frame with crossfading screenshots */}
        <div className="relative min-h-[300px]">
          <div aria-hidden className="absolute inset-[6%_4%_10%_6%] rounded-[32px] bg-gradient-to-br from-primary-600/35 to-accent-500/25 blur-[36px]" />

          <div className="relative animate-floaty overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-[0_40px_90px_-30px_rgb(16_26_51_/_0.42)]">
            <div className="flex items-center gap-1.5 border-b border-navy-900/7 bg-[#f8fafd] px-4 py-3.5">
              <span className="h-2.25 w-2.25 rounded-full bg-[#ff5f57]" />
              <span className="h-2.25 w-2.25 rounded-full bg-[#febc2e]" />
              <span className="h-2.25 w-2.25 rounded-full bg-[#28c840]" />
            </div>
            <div className="relative aspect-[1.12/1] w-full bg-[#f4f8ff]">
              {slides.map((s, i) => (
                <Image
                  key={s.image}
                  src={s.image}
                  alt={`${s.title} ${s.highlight}`}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover transition-opacity duration-[800ms] ${i === current ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -left-1 bottom-3.5 flex animate-floaty-slow items-center gap-3 rounded-[20px] bg-white px-4.5 py-3.5 shadow-[0_24px_50px_-20px_rgb(16_26_51_/_0.4)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l3.75-3.75 3 3L16.5 6l4.5 4.5M3 20.25h18" />
              </svg>
            </span>
            <span>
              <span className="block text-[19px] font-extrabold text-navy-900">1M+</span>
              <span className="block text-xs font-semibold text-navy-600">Students Managed</span>
            </span>
          </div>

          <div className="absolute -right-0.5 top-2 flex items-center gap-2.5 rounded-[18px] bg-navy-900 px-4 py-3 shadow-[0_24px_50px_-22px_rgb(16_26_51_/_0.6)]">
            <span className="h-2.25 w-2.25 rounded-full bg-green-400" />
            <span className="text-[12.5px] font-semibold text-white">One login · Nine products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
