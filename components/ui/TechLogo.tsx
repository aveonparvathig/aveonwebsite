"use client";

import React from "react";

/** Simplified tech logo - just shows text badge */
export function TechLogo({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary-200 bg-primary-50 p-2 transition hover:border-primary-400 hover:shadow-md">
        <span className="text-xs font-bold text-primary-700 text-center">{name.split(" ")[0].substring(0, 2).toUpperCase()}</span>
      </div>
      <p className="text-xs font-semibold text-navy-700 text-center max-w-[60px]">{name}</p>
    </div>
  );
}

/** Compact badge version */
export function TechBadge({ name, large = false }: { name: string; large?: boolean }) {
  return (
    <span
      title={name}
      aria-label={name}
      className={`inline-flex items-center justify-center rounded-xl border border-primary-200 bg-primary-50 font-bold text-primary-700 ${large ? "h-11 w-11 text-sm" : "h-9 w-9 text-xs"}`}
    >
      {name.split(" ")[0].substring(0, 2).toUpperCase()}
    </span>
  );
}
