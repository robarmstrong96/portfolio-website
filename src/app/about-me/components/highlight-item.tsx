export type HighlightItemProps = {
  title: string;
  description: string;
};

export function HighlightItem({ title, description }: HighlightItemProps) {
  return (
    <div className="rounded-2xl border border-amber-200/60 bg-amber-50/80 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-950/70">
      <h4 className="text-lg font-semibold text-stone-900 dark:text-amber-100">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-amber-200/80">{description}</p>
    </div>
  );
}
