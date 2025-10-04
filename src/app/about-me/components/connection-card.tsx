"use client";

import { SkeletonOverlay, useSkeletonReveal } from "./skeleton-reveal";

export type ConnectionCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ConnectionCard({ title, description, href }: ConnectionCardProps) {
  const isExternalLink = href.startsWith("http");
  const isReady = useSkeletonReveal(280);

  return (
    <a
      className="group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/80 p-6 text-left shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 dark:border-stone-700/60 dark:bg-stone-950/70"
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
    >
      <SkeletonOverlay isReady={isReady} variant="warm" />
      <div className="flex items-center justify-between">
        <h4
          className={`relative z-20 text-lg font-semibold text-stone-900 transition-all duration-500 dark:text-amber-100 ${
            isReady ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          {title}
        </h4>
        <span
          className={`relative z-20 text-amber-500 transition-transform duration-500 group-hover:translate-x-1 dark:text-amber-300 ${
            isReady ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          aria-hidden
        >
          →
        </span>
      </div>
      <p
        className={`relative z-20 text-sm leading-relaxed text-stone-600 transition-all duration-500 dark:text-amber-200/80 ${
          isReady ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {description}
      </p>
    </a>
  );
}
