"use client";

import { SkeletonOverlay, useSkeletonReveal } from "./skeleton-reveal";

export type HighlightItemProps = {
  title: string;
  description: string;
};

export function HighlightItem({ title, description }: HighlightItemProps) {
  const isReady = useSkeletonReveal(240);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/80 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-950/70">
      <SkeletonOverlay isReady={isReady} />
      <div
        className={`relative z-20 transition-all duration-500 ${
          isReady ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <h4 className="text-lg font-semibold text-stone-900 dark:text-amber-100">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-amber-200/80">{description}</p>
      </div>
    </div>
  );
}
