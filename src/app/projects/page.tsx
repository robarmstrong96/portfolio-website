'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 'showcase',
    status: 'Design exploration',
    title: 'Project showcase',
    summary:
      'Designing an interactive portfolio hub that can tell the story behind each build with motion, copy, and technical context.',
    focus:
      'Building a narrative-first presentation for code, hardware, and research projects that can flex to fit deep dives.',
    tags: ['Next.js', 'Tailwind', 'Storytelling', 'Design systems'],
    metrics: [
      { value: '3', label: 'Narrative templates' },
      { value: '12', label: 'Reusable UI tokens' },
    ],
    milestones: [
      {
        label: 'Currently iterating',
        description:
          'Prototyping responsive layouts that can carry long-form writeups, diagrams, and media galleries without feeling cramped.',
      },
      {
        label: 'Up next',
        description: 'Build MDX-powered content pipeline for versioned case studies and changelogs.',
      },
    ],
    sections: [
      {
        heading: 'Why it exists',
        body: [
          'I wanted a dedicated space to talk through the messy parts of side projects—the trade-offs, tooling decisions, and iterations that rarely make it into a quick screenshot thread.',
          'The goal is to create a living archive that can expand or contract based on how deep I want to go for each project.',
        ],
      },
      {
        heading: 'Prototype features',
        body: [
          'Modular content blocks for timelines, architecture callouts, and “what I would do differently” reflections.',
          'Light/dark themes tuned for legibility of code snippets, schematics, and photography.',
        ],
      },
    ],
  },
  {
    id: 'homelab',
    status: 'Active build',
    title: 'Containerization & Homelab',
    summary:
      'Running a fleet of self-hosted services (media, monitoring, home automation) on a small rack with container orchestration.',
    focus:
      'Keeping services resilient while experimenting with new infrastructure tooling—without waking up to a broken network.',
    tags: ['Proxmox', 'Docker', 'Traefik', 'ZFS', 'Grafana'],
    metrics: [
      { value: '14', label: 'Services deployed' },
      { value: '99.5%', label: 'Uptime goal' },
      { value: '4 TB', label: 'Redundant storage' },
    ],
    milestones: [
      {
        label: 'Current focus',
        description: 'Rolling out observability stack (Loki + Prometheus) with alerting routed through ntfy and Matrix.',
      },
      {
        label: 'Recently shipped',
        description: 'Automated nightly ZFS snapshots replicated to cold storage with health reports in Home Assistant.',
      },
      {
        label: 'Stretch goal',
        description: 'Experiment with k3s on top of Proxmox for higher-level scheduling without losing bare-metal control.',
      },
    ],
    sections: [
      {
        heading: 'Rack layout',
        body: [
          'A compact 12U rack holds the Proxmox host, a managed PoE switch, router, and a Raspberry Pi cluster used for lightweight services and failover DNS.',
          'Cable management is intentionally exposed so tweaks are painless during weekend experiments.',
        ],
      },
      {
        heading: 'Service design',
        body: [
          'Containers are orchestrated with Docker Compose stacks grouped by purpose: networking edge, media, observability, and automation.',
          'Secrets and config drift are tracked in a private Git repository with templated overrides for lab vs. travel hardware.',
        ],
      },
      {
        heading: 'Resilience checklist',
        body: [
          'Out-of-band access through Tailscale and a dedicated management VLAN.',
          'UPS-backed core gear with graceful shutdown scripting and test drills every quarter.',
          'Instant app redeploys using infrastructure-as-code blueprints checked into version control.',
        ],
      },
    ],
    image: {
      src: '/projects/homelab-rack.svg',
      alt: 'Stylized illustration of a homelab rack with networking gear, servers, and status LEDs.',
      caption: 'A quick sketch of the current rack layout used for self-hosted services.',
    },
  },
  {
    id: 'field-notes',
    status: 'Research log',
    title: 'Field notes & instrumentation',
    summary:
      'Capturing environmental sensor data and studio experiments in a single knowledge base with fast querying.',
    focus:
      'Marrying analog field notes with structured data so I can compare experiments months later without digging through notebooks.',
    tags: ['TypeScript', 'SQLite', 'Sensors', 'Data viz'],
    metrics: [
      { value: '8', label: 'Active sensor nodes' },
      { value: '45k+', label: 'Data points indexed' },
    ],
    milestones: [
      {
        label: 'In progress',
        description: 'Building a synchronization workflow that merges offline tablet notes with structured experiment data.',
      },
      {
        label: 'Exploring',
        description: 'Testing generative summaries that surface trends across experiments without losing raw context.',
      },
    ],
    sections: [
      {
        heading: 'Capture workflow',
        body: [
          'A custom mobile UI logs quick observations, while a lightweight API ingests sensor readings from ESPHome devices scattered around the apartment.',
          'Handwritten notes are scanned with an iPad shortcut and pushed into the same timeline with automatic tagging.',
        ],
      },
      {
        heading: 'Analysis tooling',
        body: [
          'Charts are generated with a D3 + React stack tuned for readability in both light and dark mode, with annotations tied back to the original note.',
          'Long-term retention happens in SQLite with periodic archiving to Parquet for heavier querying.',
        ],
      },
    ],
  },
] as const;

type Project = (typeof projects)[number];

export default function Page() {
  const [expandedId, setExpandedId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section className="relative isolate min-h-[calc(100vh-8rem)] overflow-hidden bg-gradient-to-br from-[#fff3e1] via-[#fde4c2] to-[#fef6ea] py-16 dark:from-[#1d140d] dark:via-[#23170e] dark:to-[#0f0a08]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl">
        <div className="h-44 w-[34rem] bg-gradient-to-r from-amber-300/50 via-orange-200/50 to-amber-100/50 opacity-60 dark:from-amber-500/25 dark:via-orange-500/25 dark:to-amber-500/25" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-semibold text-stone-900 dark:text-amber-100">Projects</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-700 dark:text-amber-200/80">
            An expandable gallery of builds, experiments, and research logs. Each card opens into a deep dive so the details are only one click away.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-50/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-950/70 ${
                  isExpanded ? 'ring-2 ring-amber-300/60 dark:ring-amber-400/60' : ''
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
                        className="rounded-full bg-amber-200/80 px-3 py-1 text-xs font-medium text-amber-800 transition group-hover:bg-amber-200 dark:bg-stone-800/70 dark:text-amber-200"
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
                  <div className="mt-6 flex flex-col gap-6 overflow-hidden text-stone-700 dark:text-amber-200/80">
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

                    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                      <div className="space-y-6">
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

                      <aside className="flex flex-col gap-6 rounded-2xl border border-amber-200/70 bg-white/70 p-5 shadow-inner dark:border-stone-700/70 dark:bg-stone-900/70">
                        <div className="space-y-3">
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                            Snapshot metrics
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
                            Milestones & notes
                          </h3>
                          <ul className="space-y-3">
                            {project.milestones.map((milestone) => (
                              <li key={milestone.label} className="rounded-xl border border-amber-200/70 bg-amber-50/80 p-4 dark:border-stone-700/70 dark:bg-stone-800/60">
                                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700/80 dark:text-amber-200/80">
                                  {milestone.label}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed">{milestone.description}</p>
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

        <div className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-100/70 p-8 shadow-xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-stone-900/70">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/20 to-orange-200/20 dark:via-amber-500/10 dark:to-amber-500/10" />
          <div className="relative flex flex-col gap-4 text-stone-800 dark:text-amber-100">
            <h2 className="text-2xl font-semibold">What’s next</h2>
            <p className="text-base leading-relaxed text-stone-600 dark:text-amber-200/80">
              The backlog is full of hardware teardowns, long-form writeups, and tiny experiments that need a home. Expect this page to keep evolving as I iterate on the storytelling layer and ship more lab upgrades.
            </p>
            <p className="text-sm text-stone-500 dark:text-amber-200/70">
              Have a suggestion or want a closer look at something here? Reach out—this space is built to grow with feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
