'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 'showcase',
    status: 'Planning stage',
    title: 'Project showcase',
    summary:
      'A simple example of how a case study might open once there is real work to highlight.',
    focus:
      'This placeholder copy shows where a future project story could explain goals, tools, and lessons learned.',
    tags: ['Placeholder', 'Concept', 'Layout'],
    metrics: [
      { value: 'TBD', label: 'Launch target' },
      { value: '0', label: 'Assets gathered' },
    ],
    milestones: [
      {
        label: 'Next step',
        description: 'Replace this note with actual milestones once the project is underway.',
      },
      {
        label: 'Reminder',
        description: 'Add screenshots, links, and a short summary when there is something to announce.',
      },
    ],
    sections: [
      {
        heading: 'What to include later',
        body: [
          'Think about a quick overview of the problem you solved, the tools you used, and what made the project interesting.',
          'Drop in a paragraph or two with the kind of story you would share with a friend curious about the build.',
        ],
      },
      {
        heading: 'Nice-to-have details',
        body: [
          'Consider a timeline, a list of takeaways, or a short “what I would try next” section when you have more context.',
          'Until then, keep the copy lightweight so the layout still feels balanced.',
        ],
      },
    ],
  },
  {
    id: 'homelab',
    status: 'Work in progress',
    title: 'Containerization & Homelab',
    summary:
      'Imagine this card opening up to show a favorite hardware build, a lab diagram, or a few lessons from tinkering.',
    focus:
      'Use this area to explain why the project matters, what you are experimenting with, or how you keep things running.',
    tags: ['Placeholder', 'Self-hosting', 'Lab idea'],
    metrics: [
      { value: '—', label: 'Services planned' },
      { value: '—', label: 'Tools to mention' },
      { value: '—', label: 'Fun stat' },
    ],
    milestones: [
      {
        label: 'Draft notes',
        description: 'Swap in a few bullet points about recent upgrades or the next piece of gear you want to test.',
      },
      {
        label: 'Add visuals',
        description: 'Drop a photo of the setup or a quick diagram when you have one handy.',
      },
      {
        label: 'Share results',
        description: 'Write a short recap of what worked, what broke, and what you learned along the way.',
      },
    ],
    sections: [
      {
        heading: 'What to describe',
        body: [
          'Give a quick rundown of the gear, software, or approach once there is something concrete to show.',
          'Short sentences are perfect here until you have a full story to tell.',
        ],
      },
      {
        heading: 'Potential highlights',
        body: [
          'Call out the most interesting parts of the build, like automation wins or clever hardware choices.',
          'Mention any tools or workflows you want to remember for the real writeup.',
        ],
      },
      {
        heading: 'Follow-up ideas',
        body: [
          'List questions you still want to explore or upgrades you plan to try.',
          'Keep it casual—this space is just a reminder of what to cover later.',
          'If the list gets long, turn the best items into milestones above.',
        ],
      },
    ],
    image: {
      src: '/projects/homelab-rack.svg',
      alt: 'Stylized illustration of a homelab rack with networking gear, servers, and status LEDs.',
      caption: 'A placeholder illustration showing where a future project photo or diagram could live.',
    },
  },
  {
    id: 'field-notes',
    status: 'Idea board',
    title: 'Field notes & instrumentation',
    summary:
      'Here is space for a future research log, a data experiment, or any project that deserves a longer explanation.',
    focus:
      'Use the focus area to outline the goal of the project and what kind of story you hope to share later.',
    tags: ['Placeholder', 'Research', 'Notes'],
    metrics: [
      { value: 'TBD', label: 'Data collected' },
      { value: 'TBD', label: 'Experiments logged' },
    ],
    milestones: [
      {
        label: 'Collect ideas',
        description: 'Jot down topics, links, or sketches you plan to turn into a real writeup.',
      },
      {
        label: 'Plan the story',
        description: 'When you are ready, outline the sections you want to cover and add them below.',
      },
    ],
    sections: [
      {
        heading: 'Section prompts',
        body: [
          'Use this spot to remind yourself what kind of narrative would be useful, like a quick setup overview or the main challenge.',
          'Keep the tone casual until you have a full draft—this is just scaffolding.',
        ],
      },
      {
        heading: 'Future additions',
        body: [
          'Maybe you will embed charts, screenshots, or a short video walkthrough once the project is real.',
          'For now, note anything you do not want to forget when it is time to write.',
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

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-50/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-950/70 ${
                  isExpanded
                    ? 'ring-2 ring-amber-300/60 lg:p-12 xl:p-14 dark:ring-amber-400/60'
                    : ''
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
                  <div className={`mt-6 flex flex-col gap-6 overflow-hidden text-stone-700 dark:text-amber-200/80 ${isExpanded ? 'lg:gap-8' : ''}`}>
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

                    <div
                      className={`flex flex-col gap-6 ${
                        isExpanded ? 'xl:flex-row xl:items-start xl:gap-10' : ''
                      }`}
                    >
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
                      >
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
              Use this section as a friendly reminder that more projects are on the way. When the backlog is ready, swap this placeholder copy with real updates or a quick roadmap.
            </p>
            <p className="text-sm text-stone-500 dark:text-amber-200/70">
              For now, it simply nudges visitors (and future you) that the page is still taking shape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
