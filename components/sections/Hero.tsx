"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/slide 3.png",
    title: "One Platform.",
    highlight: "Every Institution.",
    description:
      "Connect and manage Schools, Colleges and Universities through one unified campus management platform.",
  },
  {
    image: "/images/qw.png",
    title: "Smarter Campus.",
    highlight: "Better Management.",
    description:
      "Simplify academic and administrative operations with a powerful digital campus management solution.",
  },
  {
    image: "/images/slide 2.png",
    title: "Connected Campus.",
    highlight: "Powerful Operations.",
    description:
      "Bring your entire institution together with automation, analytics and centralized campus management.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="relative h-[580px] w-full overflow-hidden bg-white sm:h-[640px] lg:h-[700px]">
      {/* =========================================================
          SLIDES
      ========================================================= */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide
            ? "z-10 opacity-100"
            : "z-0 opacity-0"
            }`}
        >
          {/* =====================================================
              HERO IMAGE
          ===================================================== */}
          <Image
            src={slide.image}
            alt={`${slide.title} ${slide.highlight}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* =====================================================
              LIGHT WHITE GRADIENT
          ===================================================== */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent" />

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">

              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-700 shadow-sm sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
                </span>

                Total Campus Management Solution
              </span>

              {/* =================================================
                  HEADING
              ================================================= */}
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                {slide.title}
                <br />

                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </h1>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
                {slide.description}
              </p>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}
              <div className="mt-8 flex flex-wrap gap-3">

                {/* Book Demo */}
                <Link
                  href="/contact#demo"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgb(29_111_242_/_0.7)] transition-all duration-300 hover:bg-primary-700 hover:shadow-[0_10px_35px_-8px_rgb(29_111_242_/_0.9)] sm:px-7"
                >
                  Book a Demo

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>

                {/* Explore Products */}
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700 sm:px-7"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* =========================================================
          PREVIOUS BUTTON
      ========================================================= */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-primary-600 shadow-md backdrop-blur-md transition-all duration-300 hover:border-primary-500 hover:bg-primary-600 hover:text-white sm:left-6 sm:h-12 sm:w-12"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* =========================================================
          NEXT BUTTON
      ========================================================= */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-primary-600 shadow-md backdrop-blur-md transition-all duration-300 hover:border-primary-500 hover:bg-primary-600 hover:text-white sm:right-6 sm:h-12 sm:w-12"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* =========================================================
          SLIDE INDICATORS
      ========================================================= */}
      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              index === currentSlide ? "true" : undefined
            }
            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
              ? "w-9 bg-primary-600"
              : "w-2.5 bg-slate-300 hover:bg-primary-400"
              }`}
          />
        ))}
      </div>

      {/* =========================================================
          SLIDE NUMBER
      ========================================================= */}
      <div className="absolute bottom-6 right-6 z-30 hidden items-center gap-2 text-xs font-semibold text-slate-500 sm:flex">
        <span className="text-primary-600">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <span className="h-px w-8 bg-slate-300" />

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}