export default function Page() {
  return (
    <section className="relative isolate min-h-[calc(100vh-8rem)] overflow-hidden bg-gradient-to-br from-[#fff3e1] via-[#fde4c2] to-[#fef6ea] py-16 dark:from-[#1d140d] dark:via-[#23170e] dark:to-[#0f0a08]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl">
        <div className="h-44 w-[34rem] bg-gradient-to-r from-amber-300/50 via-orange-200/50 to-amber-100/50 opacity-60 dark:from-amber-500/25 dark:via-orange-500/25 dark:to-amber-500/25" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-semibold text-stone-900 dark:text-amber-100">Projects</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-700 dark:text-amber-200/80">
            A rotating lineup of builds, prototypes, and experiments. Long-form breakdowns are in the works&mdash;consider this the trailer for what&apos;s on deck.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-50/80 p-8 shadow-xl backdrop-blur-xl transition-transform hover:-translate-y-1 hover:shadow-2xl dark:border-stone-700/60 dark:bg-stone-950/70">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-200/40 via-orange-200/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col gap-4 text-stone-800 dark:text-amber-100">
              <span className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-amber-200/70">In Progress</span>
              <h2 className="text-2xl font-semibold">Interactive Project Showcase</h2>
              <p className="flex-1 text-base leading-relaxed text-stone-600 dark:text-amber-200/80">
                Sketching a dynamic home for featured work, complete with quick peeks at the why, how, and what ships next.
              </p>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Full tour going live soon.</p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 p-8 shadow-xl backdrop-blur-xl transition-transform hover:-translate-y-1 hover:shadow-2xl dark:border-stone-700/60 dark:bg-gradient-to-br dark:from-stone-950 dark:via-zinc-950 dark:to-stone-900">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col gap-4 text-stone-800 dark:text-amber-100">
              <span className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-amber-200/70">Concept</span>
              <h2 className="text-2xl font-semibold">Experiential Audio Tools</h2>
              <p className="flex-1 text-base leading-relaxed text-stone-600 dark:text-amber-200/80">
                Dreaming up playful browser-based instruments that respond to gestures with color, motion, and sound.
              </p>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">First jam session drops soon.</p>
            </div>
          </article>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-100/70 p-8 shadow-xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-stone-900/70">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/20 to-orange-200/20 dark:via-amber-500/10 dark:to-amber-500/10" />
          <div className="relative flex flex-col gap-4 text-stone-800 dark:text-amber-100">
            <h2 className="text-2xl font-semibold">What&apos;s next</h2>
            <p className="text-base leading-relaxed text-stone-600 dark:text-amber-200/80">
              Tuning this corner to share process notes, interactive prototypes, and the occasional aha moment. Expect clear takeaways, curious experiments, and plenty of polish as things evolve.
            </p>
            <p className="text-sm text-stone-500 dark:text-amber-200/70">
              Have a project in mind? Say hi through the contact links below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
