'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

/**
 * NOTE TO FUTURE-ME / READERS
 * This page is a "Scaffolding Preview" — a working mock of the layout, copy tone,
 * and interactions for the eventual Projects page. Content is intentionally light,
 * numbers are placeholders, and the goal is to set expectations low: this is a
 * frame, not the finished painting. 🙂
 */

type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

type Project = {
  id: string;
  status: string;
  title: string;
  summary: string;
  focus: string;
  tags: readonly string[];
  metrics: readonly { value: string; label: string }[];
  milestones: readonly { label: string; description: string }[];
  sections: readonly { heading: string; body: readonly string[] }[];
  image?: ProjectImage;
};

const projects = [
  {
    id: 'showcase',
    status: 'Scaffolding',
    title: 'Project showcase (placeholder)',
    summary:
      "You're looking at the *shell* for a future write‑up. This exists so you can see how entries will look and expand. Real content will land here once it exists.",
    focus:
      'When there is an actual project, this block will explain the build, stack, and interesting problems solved — for now, it just proves the layout.',
    tags: ['Placeholder', 'Concept', 'Layout'],
    metrics: [
      { value: 'TBD', label: 'Launch target' },
      { value: '0', label: 'Assets gathered' },
    ],
    milestones: [
      {
        label: 'Next step',
        description:
          'Swap these placeholder lines with real milestones once a project takes shape.',
      },
      {
        label: 'Reminder',
        description:
          'Add screenshots, links, or notes when there’s actually something worth sharing.',
      },
    ],
    sections: [
      {
        heading: 'What will go here',
        body: [
          'A quick rundown of what the project was, the tools I used, and why it was fun or painful.',
          'Basically the sort of summary I’d give a friend who asked what I was building.',
        ],
      },
      {
        heading: 'Extras I might add',
        body: [
          'Timelines, takeaways, or follow-up ideas once there’s actually something to show.',
          'Until then, this space stays light so the layout doesn’t feel empty.',
        ],
      },
    ],
  },
  {
    id: 'homelab',
    status: 'Work in progress',
    title: 'Containerization & Homelab (preview)',
    summary:
      'A proving ground for the page structure: cards expand, sections stack, and the sidebar shows metrics — all with mock values.',
    focus:
      'This is where I break and rebuild things: orchestration experiments, network setups, and self‑hosted services. The write‑up comes later; the frame is here now.',
    tags: ['Self-hosting', 'Containers', 'Lab'],
    metrics: [
      { value: '—', label: 'Services running' },
      { value: '—', label: 'Containers tested' },
      { value: '—', label: 'Configs rewritten' },
    ],
    milestones: [
      {
        label: 'Draft notes',
        description: 'Log recent upgrades and mishaps once I clean them up for public consumption.',
      },
      {
        label: 'Add visuals',
        description: 'Drop in a diagram or rack photo when I have one I like.',
      },
      {
        label: 'Recap',
        description: 'What worked, what failed, and what I’d do differently next time.',
      },
    ],
    sections: [
      {
        heading: 'Setup',
        body: [
          'A quick outline of the gear and software stack I’m experimenting with.',
          'Kept short until I feel like writing a proper walkthrough.',
        ],
      },
      {
        heading: 'Highlights',
        body: [
          'Automation wins, dumb hacks that worked, and anything else worth remembering.',
          'The parts Future Me will forget unless I pin them here.',
        ],
      },
      {
        heading: 'Next steps',
        body: [
          'Future tweaks, services to try, and upgrades on the list.',
          'This doubles as a scratchpad until a full article exists.',
        ],
      },
    ],
    image: {
      src: '/projects/homelab-rack.svg',
      alt: 'Stylized illustration of a homelab rack with networking gear, servers, and status LEDs.',
      caption: 'Placeholder illustration until I add a real photo or diagram of the setup.',
    },
  },
  {
    id: 'cad-printing',
    status: 'Work in progress',
    title: 'CAD & 3D Printing (preview)',
    summary:
      'Designing parts in CAD and printing them to see what holds up in the real world — real galleries will replace this text later.',
    focus:
      'Mostly small runs: brackets, mounts, car bits, and opportunistic fixes. This is a preview slot so the layout isn’t empty.',
    tags: ['CAD', '3D Printing', 'Prototyping'],
    metrics: [
      { value: '—', label: 'Designs drafted' },
      { value: '—', label: 'Prints completed' },
      { value: '—', label: 'Revisions made' },
    ],
    milestones: [
      { label: 'Log designs', description: 'Drop models and quick notes on what worked or failed.' },
      { label: 'Photos', description: 'Add pictures of finished prints once I’ve got them cleaned up.' },
      { label: 'Refinements', description: 'Track iterations until parts are reliable.' },
    ],
    sections: [
      {
        heading: 'Design process',
        body: [
          'Quick sketches, CAD mockups, and how they translated into prints.',
          'Informal notes — most of these are trial‑and‑error builds.',
        ],
      },
      {
        heading: 'Print results',
        body: [
          'What held up, what warped, and what immediately snapped.',
          'Material choices and print settings worth keeping.',
        ],
      },
      {
        heading: 'Next designs',
        body: [
          'Ideas on deck for the printer: car mods, case parts, and some just‑for‑fun builds.',
        ],
      },
    ],
    image: {
      src: '/projects/cad-print.svg',
      alt: 'Stylized line drawing of a 3D printer with a part in progress.',
      caption: 'Placeholder illustration until I add real print photos.',
    },
  },
] satisfies readonly Project[];

export default function Page() {
  const [expandedId, setExpandedId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section className="relative isolate min-h-[calc(100vh-8rem)] overflow-hidden bg-gradient-to-br from-[#fff3e1] via-[#fde4c2] to-[#fef6ea] py-16 dark:from-[#1d140d] dark:via-[#23170e] dark:to-[#0f0a08]">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl">
        <div className="h-44 w-[34rem] bg-gradient-to-r from-amber-300/50 via-orange-200/50 to-amber-100/50 opacity-60 dark:from-amber-500/25 dark:via-orange-500/25 dark:to-amber-500/25" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <header className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500/90" aria-hidden />
            Scaffolding preview — content intentionally light
          </div>
          <h1 className="text-4xl font-semibold text-stone-900 dark:text-amber-100">Projects</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-700 dark:text-amber-200/80">
            This page is a working mock. It shows how project cards expand, where notes will live,
            and how metrics/milestones render. Lower expectations now; raise them later. When real
            projects are ready, these placeholders get replaced.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-50/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-950/70 ${
                  isExpanded ? 'ring-2 ring-amber-300/60 lg:p-12 xl:p-14 dark:ring-amber-400/60' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="relative flex w-full flex-col gap-4 text-left text-stone-800 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 dark:text-amber-100"
                  aria-expanded={isExpanded}
                  aria-controls={`project-${project.id}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <span className="inline-flex items-center rounded-full border border-amber-300/70 bg-amber-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200">
                        {project.status}
                      </span>
                      <h2 className="text-2xl font-semibold">{project.title}</h2>
                    </div>
                    <span
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-amber-200/80 bg-white/60 text-amber-700 transition-transform duration-300 dark:border-stone-700/80 dark:bg-stone-900/80 dark:text-amber-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-stone-600 dark:text-amber-200/80">{project.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition selection:bg-amber-300 selection:text-stone-900 group-hover:bg-amber-200 dark:selection:bg-amber-500 dark:selection:text-stone-950 ${
                          isExpanded
                            ? 'bg-amber-300 text-stone-950 shadow-sm ring-1 ring-amber-400/70 dark:bg-stone-700 dark:text-amber-100 dark:ring-amber-300/60'
                            : 'bg-amber-200/80 text-amber-800 dark:bg-stone-800/70 dark:text-amber-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>

                <div
                  id={`project-${project.id}`}
                  className={`grid overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                  aria-hidden={!isExpanded}
                >
                  <div
                    className={`mt-6 flex flex-col gap-6 overflow-hidden text-stone-700 dark:text-amber-200/80 ${
                      isExpanded ? 'lg:gap-8' : ''
                    }`}
                  >
                    {project.image ? (
                      <figure className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-white/60 shadow-inner dark:border-stone-700/60 dark:bg-stone-900/60">
                        <Image
                          src={project.image.src}
                          alt={project.image.alt}
                          width={960}
                          height={540}
                          className="h-auto w-full object-cover"
                        />
                        {project.image.caption ? (
                          <figcaption className="px-4 py-3 text-xs uppercase tracking-wide text-amber-700/80 dark:text-amber-300/80">
                            {project.image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}

                    <p className="text-sm uppercase tracking-wide text-amber-700/80 dark:text-amber-300/80">Focus</p>
                    <p className="text-base leading-relaxed">{project.focus}</p>

                    <div className={`flex flex-col gap-6 ${isExpanded ? 'xl:flex-row xl:items-start xl:gap-10' : ''}`}>
                      <div className={`space-y-6 ${isExpanded ? 'xl:flex-1' : ''}`}>
                        {project.sections.map((section) => (
                          <section key={section.heading} className="space-y-3">
                            <h3 className="text-lg font-semibold text-stone-900 dark:text-amber-100">{section.heading}</h3>
                            {section.body.map((paragraph, idx) => (
                              <p key={idx} className="text-base leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </section>
                        ))}
                      </div>

                      <aside
                        className={`flex flex-col gap-6 rounded-2xl border border-amber-200/70 bg-white/70 p-5 shadow-inner dark:border-stone-700/70 dark:bg-stone-900/70 ${
                          isExpanded ? 'xl:max-w-sm xl:flex-none' : ''
                        }`}
                        aria-label="Sidebar with placeholder metrics and milestones"
                      >
                        <div className="space-y-3">
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                            Snapshot metrics (mock)
                          </h3>
                          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {project.metrics.map((metric) => (
                              <div key={metric.label} className="rounded-xl bg-amber-100/60 p-3 text-center dark:bg-stone-800/80">
                                <dt className="text-xs uppercase tracking-wide text-amber-700/80 dark:text-amber-200/80">
                                  {metric.label}
                                </dt>
                                <dd className="text-lg font-semibold text-stone-900 dark:text-amber-100">{metric.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                            Milestones & notes (to be replaced)
                          </h3>
                          <ul className="space-y-3">
                            {project.milestones.map((milestone) => (
                              <li
                                key={milestone.label}
                                className="group/milestone rounded-xl border border-amber-200/70 bg-amber-50/80 p-4 dark:border-stone-700/70 dark:bg-stone-800/60"
                              >
                                <p
                                  className={`text-xs font-semibold uppercase tracking-wide transition ${
                                    isExpanded
                                      ? 'text-amber-900 dark:text-amber-100'
                                      : 'text-amber-700/80 dark:text-amber-200/80'
                                  }`}
                                >
                                  {milestone.label}
                                </p>
                                <p
                                  className={`mt-1 text-sm leading-relaxed transition ${
                                    isExpanded
                                      ? 'text-stone-900 dark:text-amber-100'
                                      : 'text-stone-700 dark:text-amber-200/80'
                                  }`}
                                >
                                  {milestone.description}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer callout to set expectations */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-100/70 p-8 shadow-xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-stone-900/70">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/20 to-orange-200/20 dark:via-amber-500/10 dark:to-amber-500/10" />
          <div className="relative flex flex-col gap-4 text-stone-800 dark:text-amber-100">
            <h2 className="text-2xl font-semibold">What’s next</h2>
            <p className="text-base leading-relaxed text-stone-600 dark:text-amber-200/80">
              This page is a preview of structure and style. Content will get swapped in as
              projects finish. If you’re here early, congrats — you’re seeing the scaffolding.
            </p>
            <p className="text-sm text-stone-500 dark:text-amber-200/70">
              Translated: lower expectations now, return later for the good stuff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
