"use client";

import { SkeletonReveal, useSkeletonReveal } from "./skeleton-reveal";
import { ConnectionCard, type ConnectionCardProps } from "./connection-card";

const connections: ConnectionCardProps[] = [
  {
    title: "Github",
    description: "Code, experiments, and open-source contributions.",
    href: "https://github.com/robarmstrong96",
  },
  {
    title: "LinkedIn",
    description: "Work history, collaboration ideas, and professional updates.",
    href: "https://www.linkedin.com/in/robert-kyle-armstrong/",
  },
  {
    title: "Email",
    description: "For projects or collaboration.",
    href: "mailto:kylearmstrong96@outlook.com",
  },
  {
    title: "Projects",
    description: "A snapshot of what I’m working on.",
    href: "/projects",
  },
];

export function ConnectSection() {
  const introReady = useSkeletonReveal(200);

  return (
    <section className="grid gap-8 rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 p-10 shadow-xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-gradient-to-br dark:from-stone-950 dark:via-zinc-950 dark:to-stone-900 max-lg:p-8 lg:grid-cols-[0.9fr,1.1fr]">
      <SkeletonReveal
        isReady={introReady}
        className="rounded-3xl"
        contentClassName="space-y-6 text-stone-800 dark:text-amber-100"
        hideOverflow={false}
      >
        <h2 className="text-2xl font-semibold">Connect with me</h2>
        <p>My work is on GitHub, LinkedIn, and here. Use the links below to check it out.</p>
        <p className="text-sm text-stone-600 dark:text-amber-200/70">Software, hardware, and side projects all get posted over time.</p>
      </SkeletonReveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {connections.map((connection) => (
          <ConnectionCard key={connection.title} {...connection} />
        ))}
      </div>
    </section>
  );
}
