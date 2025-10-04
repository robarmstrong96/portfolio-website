import { HighlightItem, type HighlightItemProps } from "./highlight-item";

const highlights: HighlightItemProps[] = [
  { title: "Printed a new car part", description: "Tested a fresh CAD design on the car." },
  { title: "Tweaked the homelab", description: "Added a new service and cleaned up configs." },
  { title: "Riced a Linux setup", description: "Customized the desktop and workflows." },
  { title: "Made some music", description: "Recorded and played around with new tracks." },
];

export function PassionSection() {
  return (
    <section className="grid gap-8 rounded-3xl border border-amber-200/60 bg-amber-100/70 p-10 shadow-xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-stone-900/70 max-lg:p-8 lg:grid-cols-[1.15fr,0.85fr]">
      <div className="space-y-6 text-stone-700 dark:text-amber-100/80">
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-amber-100">What drives me</h2>
        <p className="text-lg leading-relaxed">
          I work across software and hardware: writing code, putting together PCs, designing in CAD, and running a homelab.
        </p>
        <p className="leading-relaxed">This site is a place to post projects and notes as I go.</p>
        <p className="leading-relaxed">More will show up here over time.</p>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold text-stone-900 dark:text-amber-100">Recent highlights</h3>
        <div className="grid gap-4">
          {highlights.map((highlight) => (
            <HighlightItem key={highlight.title} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
