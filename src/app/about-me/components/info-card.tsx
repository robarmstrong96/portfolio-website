"use client";

import { useEffect, useState } from "react";

export type InfoCardProps = {
  title: string;
  description: string;
  emoji: string;
  accent: string;
};

export function InfoCard({ title, description, emoji, accent }: InfoCardProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 220);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/80 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-950/70">
      <div className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-br ${accent}`} aria-hidden />
      <div
        aria-hidden
        className="skeleton-panel skeleton-panel--warm absolute inset-0 z-10"
        style={{
          opacity: isReady ? 0 : 1,
          visibility: isReady ? "hidden" : "visible",
          transition: "opacity 0.45s ease, visibility 0.45s ease",
        }}
      />
      <div
        className={`relative z-20 flex flex-col gap-2 text-stone-800 transition-all duration-500 dark:text-amber-100 ${
          isReady ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <span className="text-2xl" aria-hidden>
          {emoji}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-stone-600 dark:text-amber-200/80">
          {description}
        </p>
      </div>
    </div>
  );
}
