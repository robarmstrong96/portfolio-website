import { ThemeSwitchHandler } from "../theme_switch/theme_switch";

export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 min-w-full border-b border-amber-200/60 bg-amber-50/90 backdrop-blur-xl shadow-md dark:border-stone-800/70 dark:bg-stone-950/85">
      <div className="grid h-32 grid-cols-1 py-8">
        <div className="flex justify-center">
          <Title />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div>
      <h1 className="text-5xl font-bold antialiased text-stone-900 max-[384px]:text-4xl dark:text-amber-100">
        Kyle Armstrong
      </h1>
      <SubTitle />
    </div>
  );
}

function SubTitle() {
  return (
    <div>
      <h6 className="flex justify-center py-1 text-md text-amber-700 max-[384px]:text-xs max-[274px]:hidden dark:text-amber-200/80">
        full-stack software engineer
      </h6>
    </div>
  );
}

function ToggleTheme() {
  return (
    <div>
      <ThemeSwitchHandler />
    </div>
  );
}
