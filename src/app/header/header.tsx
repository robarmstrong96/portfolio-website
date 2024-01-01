import { ThemeSwitchHandler } from "../theme_switch/theme_switch";

export function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 min-w-max bg-neutral-50 dark:bg-gray-900 shadow-md">
      <div className="h-32 py-8 grid grid-cols-1">
        <div />
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
      <h1 className="text-5xl dark:text-slate-300 font-bold antialiased">
        Kyle Armstrong
      </h1>
      <SubTitle />
    </div>
  );
}

function SubTitle() {
  return (
    <div>
      <h6 className="py-1 flex justify-center text-md text-gray-500 dark:text-slate-400">
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
