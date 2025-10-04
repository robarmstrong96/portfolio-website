export type QuickFactProps = {
  label: string;
  value: string;
};

export function QuickFact({ label, value }: QuickFactProps) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-amber-200/60 bg-amber-50/80 p-4 text-sm shadow-md transition-colors dark:border-stone-700/60 dark:bg-stone-950/70">
      <span className="mt-0.5 h-2 w-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-500" aria-hidden />
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-amber-200/70">{label}</p>
        <p className="text-base font-medium text-stone-800 dark:text-amber-100">{value}</p>
      </div>
    </li>
  );
}
