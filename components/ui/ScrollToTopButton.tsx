"use client";

import { useEffect, useState } from "react";

/** Floating "back to top" button — appears after scrolling down, sits just above the chat bubble. */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-48 right-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 bg-white text-primary-600 shadow-[0_12px_30px_-10px_rgb(16_26_51_/_0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-[0_16px_36px_-10px_rgb(16_26_51_/_0.4)] print:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
