export type ConnectionCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ConnectionCard({ title, description, href }: ConnectionCardProps) {
  const isExternalLink = href.startsWith("http");

  return (
    <a
      className="group flex flex-col gap-2 rounded-2xl border border-amber-200/60 bg-amber-50/80 p-6 text-left shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 dark:border-stone-700/60 dark:bg-stone-950/70"
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-stone-900 dark:text-amber-100">{title}</h4>
        <span className="text-amber-500 transition-transform group-hover:translate-x-1 dark:text-amber-300" aria-hidden>
          →
        </span>
      </div>
      <p className="text-sm leading-relaxed text-stone-600 dark:text-amber-200/80">{description}</p>
    </a>
  );
}
