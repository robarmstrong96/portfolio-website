import SelfImage from "./self-image";

export default function Page() {
  return <CenterSection />;
}

function CenterSection() {
  return (
    <div className="relative isolate min-h-[calc(100vh-8rem)] overflow-hidden bg-gradient-to-br from-[#fff3e1] via-[#fde2bb] to-[#fdf3e6] pb-16 dark:from-[#1d140d] dark:via-[#21170e] dark:to-[#0c0a09]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl">
        <div className="h-48 w-[36rem] bg-gradient-to-r from-amber-300/60 via-orange-300/60 to-amber-200/60 opacity-40 dark:from-amber-500/30 dark:via-orange-500/30 dark:to-amber-500/30" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pt-16 pb-32 sm:px-10 lg:px-16">
        <section className="grid gap-10 rounded-3xl border border-amber-200/60 bg-amber-50/80 p-10 shadow-2xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-stone-900/70 dark:shadow-black/30 max-lg:p-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col gap-6 text-stone-900 dark:text-amber-100">
            <div className="flex flex-wrap items-center gap-3 text-stone-600 dark:text-amber-200/80">
              <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-semibold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
                Full-Stack Engineer
              </span>
              <span className="rounded-full bg-orange-200 px-3 py-1 text-sm font-semibold text-orange-800 dark:bg-orange-900/50 dark:text-orange-200">
                Maker &amp; Music Enthusiast
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I’m Kyle.
            </h1>
            <p className="text-lg leading-relaxed text-stone-700 dark:text-amber-200/80">
              I’m a full-stack engineer from Newport News, Virginia. I spend my time writing code, 
              building small form-factor PCs, designing parts in CAD, 3D printing, running a homelab, 
              and making electronic music.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard
                title="Building things"
                description="Hardware projects, CAD designs, and 3D prints."
                accent="from-amber-400/40 via-orange-300/40 to-transparent"
                emoji="🛠️"
              />
              <InfoCard
                title="Running systems"
                description="Homelab servers, self-hosted tools, and experiments."
                accent="from-amber-500/35 via-yellow-200/35 to-transparent"
                emoji="🖥️"
              />
              <InfoCard
                title="Customizing setups"
                description="Linux ricing, workflow tweaks, and configs."
                accent="from-amber-400/40 via-orange-300/40 to-transparent"
                emoji="💻"
              />
              <InfoCard
                title="Making sound"
                description="Electronic music, synths, and production experiments."
                accent="from-amber-500/35 via-yellow-200/35 to-transparent"
                emoji="🎶"
              />
            </div>
          </div>
          <div className="grid gap-8 lg:pl-8">
            <div className="relative mx-auto flex h-full w-full max-w-sm items-center justify-center">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 opacity-70 blur-2xl dark:from-amber-500/20 dark:via-orange-500/20 dark:to-amber-500/20" />
              <div className="relative rounded-[32px] border border-white/40 bg-amber-50/80 p-5 shadow-xl backdrop-blur-lg dark:border-stone-700/60 dark:bg-stone-950/80">
                <SelfImage />
              </div>
            </div>
            <ul className="grid gap-3 text-sm text-stone-700 dark:text-amber-100/80">
              <QuickFact label="Location" value="Newport News, Virginia" />
              <QuickFact label="Current focus" value="3D printing, CAD design, and homelab work" />
              <QuickFact label="Projects" value="PC builds, car parts, self-hosted tools" />
              <QuickFact label="Next up" value="More experiments across hardware and software" />
            </ul>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-amber-200/60 bg-amber-100/70 p-10 shadow-xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-stone-900/70 max-lg:p-8 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6 text-stone-700 dark:text-amber-100/80">
            <h2 className="text-2xl font-semibold text-stone-900 dark:text-amber-100">
              What drives me
            </h2>
            <p className="text-lg leading-relaxed">
              I work across software and hardware: writing code, putting together PCs, 
              designing in CAD, and running a homelab.
            </p>
            <p className="leading-relaxed">
              This site is a place to post projects and notes as I go.
            </p>
            <p className="leading-relaxed">
              More will show up here over time.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-stone-900 dark:text-amber-100">
              Recent highlights
            </h3>
            <div className="grid gap-4">
              <HighlightItem
                title="Printed a new car part"
                description="Tested a fresh CAD design on the car."
              />
              <HighlightItem
                title="Tweaked the homelab"
                description="Added a new service and cleaned up configs."
              />
              <HighlightItem
                title="Riced a Linux setup"
                description="Customized the desktop and workflows."
              />
              <HighlightItem
                title="Made some music"
                description="Recorded and played around with new tracks."
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 p-10 shadow-xl backdrop-blur-xl transition-colors dark:border-stone-700/60 dark:bg-gradient-to-br dark:from-stone-950 dark:via-zinc-950 dark:to-stone-900 max-lg:p-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6 text-stone-800 dark:text-amber-100">
            <h2 className="text-2xl font-semibold">Connect with me</h2>
            <p>
              My work is on GitHub, LinkedIn, and here. Use the links below to check it out.
            </p>
            <p className="text-sm text-stone-600 dark:text-amber-200/70">
              Software, hardware, and side projects all get posted over time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ConnectionCard
              title="Github"
              description="Code, experiments, and open-source contributions."
              href="https://github.com"
            />
            <ConnectionCard
              title="LinkedIn"
              description="Work history, collaboration ideas, and professional updates."
              href="https://www.linkedin.com"
            />
            <ConnectionCard
              title="Email"
              description="For projects or collaboration."
              href="mailto:hello@example.com"
            />
            <ConnectionCard
              title="Now page"
              description="A snapshot of what I’m working on."
              href="#"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

type InfoCardProps = {
  title: string;
  description: string;
  emoji: string;
  accent: string;
};

function InfoCard({ title, description, emoji, accent }: InfoCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/80 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-950/70">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`}
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

type QuickFactProps = {
  label: string;
  value: string;
};

function QuickFact({ label, value }: QuickFactProps) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-amber-200/60 bg-amber-50/80 p-4 text-sm shadow-md transition-colors dark:border-stone-700/60 dark:bg-stone-950/70">
      <span className="mt-0.5 h-2 w-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-500" />
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-500 dark:text-amber-200/70">
          {label}
        </p>
        <p className="text-base font-medium text-stone-800 dark:text-amber-100">
          {value}
        </p>
      </div>
    </li>
  );
}

type HighlightItemProps = {
  title: string;
  description: string;
};

function HighlightItem({ title, description }: HighlightItemProps) {
  return (
    <div className="rounded-2xl border border-amber-200/60 bg-amber-50/80 p-5 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-stone-700/60 dark:bg-stone-950/70">
      <h4 className="text-lg font-semibold text-stone-900 dark:text-amber-100">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-amber-200/80">
        {description}
      </p>
    </div>
  );
}

type ConnectionCardProps = {
  title: string;
  description: string;
  href: string;
};

function ConnectionCard({ title, description, href }: ConnectionCardProps) {
  return (
    <a
      className="group flex flex-col gap-2 rounded-2xl border border-amber-200/60 bg-amber-50/80 p-6 text-left shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 dark:border-stone-700/60 dark:bg-stone-950/70"
      href={href}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-stone-900 dark:text-amber-100">
          {title}
        </h4>
        <span className="text-amber-500 transition-transform group-hover:translate-x-1 dark:text-amber-300">
          →
        </span>
      </div>
      <p className="text-sm leading-relaxed text-stone-600 dark:text-amber-200/80">
        {description}
      </p>
    </a>
  );
}
