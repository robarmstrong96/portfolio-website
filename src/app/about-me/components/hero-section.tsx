"use client";

import SelfImage from "../self-image";
import { SkeletonReveal, useSkeletonReveal } from "./skeleton-reveal";
import { InfoCard, type InfoCardProps } from "./info-card";
import { QuickFact, type QuickFactProps } from "./quick-fact";

const infoCards: InfoCardProps[] = [
  {
    title: "Building things",
    description: "Hardware projects, CAD designs, and 3D prints.",
    accent: "from-amber-400/40 via-orange-300/40 to-transparent",
    emoji: "🛠️",
  },
  {
    title: "Running systems",
    description: "Homelab servers, self-hosted tools, and experiments.",
    accent: "from-amber-500/35 via-yellow-200/35 to-transparent",
    emoji: "🖥️",
  },
  {
    title: "Customizing setups",
    description: "Linux ricing, workflow tweaks, and configs.",
    accent: "from-amber-400/40 via-orange-300/40 to-transparent",
    emoji: "💻",
  },
  {
    title: "Making sound",
    description: "Electronic music, synths, and production experiments.",
    accent: "from-amber-500/35 via-yellow-200/35 to-transparent",
    emoji: "🎶",
  },
];

const quickFacts: QuickFactProps[] = [
  { label: "Location", value: "Newport News, Virginia" },
  { label: "Current focus", value: "3D printing, CAD design, and homelab work" },
  { label: "Projects", value: "PC builds, car parts, self-hosted tools" },
  { label: "Next up", value: "More experiments across hardware and software" },
];

export function HeroSection() {
  const heroIntroReady = useSkeletonReveal(140);

  return (
    <section className="grid gap-10 rounded-3xl border border-amber-200/60 bg-amber-50/80 p-10 shadow-2xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-stone-900/70 dark:shadow-black/30 max-lg:p-8 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="flex flex-col gap-6 lg:h-full">
        <SkeletonReveal
          isReady={heroIntroReady}
          className="rounded-3xl"
          contentClassName="flex flex-col gap-6 text-stone-900 dark:text-amber-100"
          hideOverflow={false}
        >
          <div className="flex flex-wrap items-center gap-3 text-stone-600 dark:text-amber-200/80">
            <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-semibold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
              Full-Stack Engineer
            </span>
            <span className="rounded-full bg-orange-200 px-3 py-1 text-sm font-semibold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
              Tinkerer &amp; Music Enthusiast
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Hi, I’m Kyle.</h1>
          <p className="text-lg leading-relaxed text-stone-700 dark:text-amber-200/80">
            I’m a software engineer based in the Hampton Roads area of Virginia. Most days you’ll find me writing code, building
            small form-factor PCs, sketching parts in CAD before 3D printing them, tinkering with my homelab, or experimenting with
            electronic music—with plenty of other side projects along the way.
          </p>
        </SkeletonReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:mt-auto lg:pt-4">
          {infoCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:pl-8">
        <div className="relative mx-auto flex h-full w-full max-w-sm items-center justify-center">
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 opacity-70 blur-2xl dark:from-amber-500/20 dark:via-orange-500/20 dark:to-amber-500/20" aria-hidden />
          <div className="relative rounded-[32px] border border-white/40 bg-amber-50/80 p-5 shadow-xl backdrop-blur-lg dark:border-stone-700/60 dark:bg-stone-950/80">
            <SelfImage />
          </div>
        </div>
        <ul className="grid gap-3 text-sm text-stone-700 dark:text-amber-100/80">
          {quickFacts.map((fact) => (
            <QuickFact key={fact.label} {...fact} />
          ))}
        </ul>
      </div>
    </section>
  );
}
