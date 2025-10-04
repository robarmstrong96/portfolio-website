"use client";

import { useEffect, useState } from "react";

export type QuickFactProps = {
  label: string;
  value: string;
};

export function QuickFact({ label, value }: QuickFactProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 260);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <li className="relative flex items-start gap-3 overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/80 p-4 text-sm shadow-md transition-colors dark:border-stone-700/60 dark:bg-stone-950/70">
      <div
        aria-hidden
        className="skeleton-panel absolute inset-0 z-10"
        style={{
          opacity: isReady ? 0 : 1,
          visibility: isReady ? "hidden" : "visible",
          transition: "opacity 0.45s ease, visibility 0.45s ease",
        }}
      />
      <div
        className={`relative z-20 flex items-start gap-3 transition-all duration-500 ${
          isReady ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <span className="mt-0.5 h-2 w-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-500" aria-hidden />
        <div>
          <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-amber-200/70">{label}</p>
          <p className="text-base font-medium text-stone-800 dark:text-amber-100">{value}</p>
        </div>
      </div>
    </li>
  );
}
