"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Page() {
  return <CenterSection />;
}

function CenterSection() {
  return (
    <div className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden bg-gradient-to-br from-sky-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl">
        <div className="h-48 w-[36rem] bg-gradient-to-r from-sky-300/60 via-indigo-400/60 to-fuchsia-400/60 opacity-40 dark:from-sky-500/40 dark:via-indigo-500/40 dark:to-fuchsia-500/40" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <section className="grid gap-10 rounded-3xl border border-slate-200/70 bg-white/80 p-10 shadow-2xl backdrop-blur-xl transition-colors dark:border-slate-700/60 dark:bg-slate-900/60 dark:shadow-slate-950/40 max-lg:p-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col gap-6 text-slate-900 dark:text-slate-100">
            <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-300">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
                Full-Stack Engineer
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-200">
                Maker &amp; Music Enthusiast
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Programmer, tinkerer, relentless explorer of ideas.
            </h1>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              I&#39;m a full-stack engineer who finds joy in building thoughtful
              experiences and experimenting with new technologies. When I&#39;m
              not writing code you can probably find me digging through obscure
              electronic records, assembling hardware, or chasing down a new
              hobby just to see how it works.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard
                title="Crafting &amp; Shipping"
                description="From interactive web apps to physical prototypes, I love taking an idea from sketch to reality."
                accent="from-sky-400/40 via-sky-300/40 to-transparent"
                emoji="🛠️"
              />
              <InfoCard
                title="Always Learning"
                description="Recent dives include edge runtimes, creative coding, and modular synthesis—there&#39;s always a new rabbit hole."
                accent="from-fuchsia-400/40 via-purple-300/40 to-transparent"
                emoji="🧠"
              />
            </div>
          </div>
          <div className="grid gap-8 lg:pl-8">
            <div className="relative mx-auto flex h-full w-full max-w-sm items-center justify-center">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-sky-200 via-indigo-200 to-fuchsia-200 opacity-70 blur-2xl dark:from-sky-500/30 dark:via-indigo-500/30 dark:to-fuchsia-500/30" />
              <div className="relative rounded-[32px] border border-white/40 bg-white/80 p-5 shadow-xl backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-950/80">
                <SelfImage />
              </div>
            </div>
            <ul className="grid gap-3 text-sm text-slate-700 dark:text-slate-300">
              <QuickFact label="Based in" value="Austin, TX" />
              <QuickFact label="Currently exploring" value="AI-assisted tooling &amp; creative coding" />
              <QuickFact label="Favorite mediums" value="TypeScript, React, analog synths" />
              <QuickFact label="What I&#39;m building next" value="An experimental projects showcase" />
            </ul>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-200/70 bg-white/70 p-10 shadow-xl backdrop-blur-xl transition-colors dark:border-slate-700/60 dark:bg-slate-900/60 max-lg:p-8 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              What drives me
            </h2>
            <p className="text-lg leading-relaxed">
              I enjoy building and experimenting—whether it&#39;s hardware,
              software, or a side project that piques my interest. I&#39;m
              constantly learning and expanding my skill set, always focused on
              creating something meaningful and well-crafted.
            </p>
            <p className="leading-relaxed">
              This site is still a work in progress. I&#39;m assembling a
              showcase that blends personal experiments with production-ready
              work, along with behind-the-scenes write-ups and process notes.
            </p>
            <p className="leading-relaxed">
              Content will continue to evolve here, so check back for updates
              as new projects, articles, and collaborations roll out.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              Recent highlights
            </h3>
            <div className="grid gap-4">
              <HighlightItem
                title="Hands-on with edge runtimes"
                description="Deploying real-time features with minimal latency using Next.js App Router."
              />
              <HighlightItem
                title="Designing creative coding sketches"
                description="Experimenting with shader-based visuals and generative art installations."
              />
              <HighlightItem
                title="Building a modular synth rig"
                description="Combining code, hardware, and music theory into a tactile sound playground."
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-200/70 bg-gradient-to-br from-sky-100 via-white to-purple-100 p-10 shadow-xl backdrop-blur-xl transition-colors dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 max-lg:p-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6 text-slate-800 dark:text-slate-200">
            <h2 className="text-2xl font-semibold">Connect with me</h2>
            <p>
              If you&#39;d like to see more of my work or collaborate on an
              idea, I&#39;d love to chat. You can reach out via GitHub,
              LinkedIn, or email—links are in the contact section. I&#39;m
              always open to conversations.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Bonus: mention your favorite synth, playlist, or side project
              when you say hi.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ConnectionCard
              title="Github"
              description="Code, experiments, and open-source contributions."
              href="https://github.com"
            />
            <ConnectionCard
              title="LinkedIn"
              description="Work history, collaboration ideas, and professional updates."
              href="https://www.linkedin.com"
            />
            <ConnectionCard
              title="Email"
              description="Drop me a line for projects, jam sessions, or just to say hi."
              href="mailto:hello@example.com"
            />
            <ConnectionCard
              title="Now page"
              description="A living snapshot of what I&#39;m learning and building."
              href="#"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

type InfoCardProps = {
  title: string;
  description: string;
  emoji: string;
  accent: string;
};

function InfoCard({ title, description, emoji, accent }: InfoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-950/60">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`}
      />
      <div className="relative flex flex-col gap-2 text-slate-800 dark:text-slate-100">
        <span className="text-2xl" aria-hidden>
          {emoji}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
}

type QuickFactProps = {
  label: string;
  value: string;
};

function QuickFact({ label, value }: QuickFactProps) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-white/70 p-4 text-sm shadow-md transition-colors dark:border-slate-700/60 dark:bg-slate-950/60">
      <span className="mt-0.5 h-2 w-2 rounded-full bg-gradient-to-br from-sky-400 to-fuchsia-500 dark:from-sky-500 dark:to-fuchsia-500" />
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="text-base font-medium text-slate-800 dark:text-slate-100">
          {value}
        </p>
      </div>
    </li>
  );
}

type HighlightItemProps = {
  title: string;
  description: string;
};

function HighlightItem({ title, description }: HighlightItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-950/60">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}

type ConnectionCardProps = {
  title: string;
  description: string;
  href: string;
};

function ConnectionCard({ title, description, href }: ConnectionCardProps) {
  return (
    <a
      className="group flex flex-col gap-2 rounded-2xl border border-slate-200/60 bg-white/80 p-6 text-left shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 dark:border-slate-700/60 dark:bg-slate-950/70"
      href={href}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h4>
        <span className="text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-500">
          →
        </span>
      </div>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </a>
  );
}

function SelfImage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasMinDurationElapsed, setHasMinDurationElapsed] = useState(false);
  const minDuration = 300; // Minimum duration for the loading animation in milliseconds
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      // Skip the animation entirely if the image is already in the browser cache
      setHasLoaded(true);
      setHasMinDurationElapsed(true);
      return;
    }

    const timer = setTimeout(() => {
      setHasMinDurationElapsed(true);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  const handleImageLoadComplete = () => {
    setHasLoaded(true);
  };

  const isLoading = !(hasLoaded && hasMinDurationElapsed);

  return (
    <div className="relative flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-[50%]">
      <DotLottieReact
        src="/image-load.lottie"
        autoplay
        loop
        style={{
          width: "100%",
          height: "100%",
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? "visible" : "hidden",
          transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />
      <Image
        ref={imageRef}
        src="/me.jpg"
        alt="A picture of me"
        sizes="100vw"
        width={384}
        height={384}
        placeholder="empty"
        style={{
          width: "100%",
          height: "100%",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 1s ease-in-out",
        }}
        className="rounded-[50%] shadow-md"
        onLoadingComplete={handleImageLoadComplete}
      />
    </div>
  );
}
