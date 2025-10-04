"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type SkeletonOverlayProps = {
  isReady: boolean;
  className?: string;
  variant?: "base" | "warm";
};

type SkeletonRevealProps = {
  isReady: boolean;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  readyClassName?: string;
  notReadyClassName?: string;
  variant?: SkeletonOverlayProps["variant"];
  hideOverflow?: boolean;
};

export function useSkeletonReveal(delay = 180) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return isReady;
}

export function SkeletonOverlay({ isReady, className = "", variant = "base" }: SkeletonOverlayProps) {
  const variantClass = variant === "warm" ? "skeleton-panel skeleton-panel--warm" : "skeleton-panel";

  return (
    <div
      aria-hidden
      className={`absolute inset-0 z-10 ${variantClass} ${className}`.trim()}
      style={{
        opacity: isReady ? 0 : 1,
        visibility: isReady ? "hidden" : "visible",
        transition: "opacity 0.45s ease, visibility 0.45s ease",
      }}
    />
  );
}

export function SkeletonReveal({
  isReady,
  children,
  className = "",
  contentClassName = "",
  readyClassName = "translate-y-0 opacity-100",
  notReadyClassName = "translate-y-2 opacity-0",
  variant = "warm",
  hideOverflow = true,
}: SkeletonRevealProps) {
  const overflowClass = hideOverflow ? "overflow-hidden" : "";

  return (
    <div className={`relative ${overflowClass} ${className}`.trim()}>
      <SkeletonOverlay isReady={isReady} variant={variant} />
      <div
        className={`relative z-20 transition-all duration-500 ${
          isReady ? readyClassName : notReadyClassName
        } ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </div>
  );
}
