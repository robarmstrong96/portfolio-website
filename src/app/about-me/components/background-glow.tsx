export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl"
      aria-hidden
    >
      <div className="h-48 w-[36rem] bg-gradient-to-r from-amber-300/60 via-orange-300/60 to-amber-200/60 opacity-40 dark:from-amber-500/30 dark:via-orange-500/30 dark:to-amber-500/30" />
    </div>
  );
}
