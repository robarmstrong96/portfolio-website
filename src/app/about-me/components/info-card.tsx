export type InfoCardProps = {
  title: string;
  description: string;
  emoji: string;
  accent: string;
};

export function InfoCard({ title, description, emoji, accent }: InfoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/80 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-950/70">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`}
        aria-hidden
      />
      <div className="relative flex flex-col gap-2 text-stone-800 dark:text-amber-100">
        <span className="text-2xl" aria-hidden>
          {emoji}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-stone-600 dark:text-amber-200/80">
          {description}
        </p>
      </div>
    </div>
  );
}
