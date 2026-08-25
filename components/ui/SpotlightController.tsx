"use client";

import { useEffect } from "react";

/**
 * A single delegated mousemove listener that powers the cursor spotlight on
 * every content card. It finds the hovered card (`.shadow-card` / `.spotlight-card`,
 * excluding small pills) and writes the cursor position into --spot-x / --spot-y,
 * which the CSS in globals.css turns into a following radial glow.
 *
 * One listener for the whole page — no per-card JS. Mounted once in the layout.
 */
export default function SpotlightController() {
  useEffect(() => {
    const SELECTOR = ".shadow-card:not(.rounded-full), .spotlight-card";

    const onMove = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const card = target?.closest?.(SELECTOR) as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
