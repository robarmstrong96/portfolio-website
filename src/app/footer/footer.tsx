"use client";

import { SelectedPage, Route, routes } from "../utilities";
import { useRouter } from "next/navigation";
import DisplayContactInfoModal from "../contact_info/contact-info";

export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 h-20 border-t border-amber-200/60 bg-amber-100/90 backdrop-blur-xl shadow-lg dark:border-stone-800/70 dark:bg-stone-950/85">
      <nav className="mx-auto flex h-full w-full max-w-5xl items-center justify-center gap-6 px-6">
        <PageButton
          route={routes.find((i) => i.routeEnum == SelectedPage.ABOUTME)!}
        />
        <PageButton
          route={routes.find((i) => i.routeEnum == SelectedPage.PROJECTS)!}
        />
        <DisplayContactInfoModal />
      </nav>
    </footer>
  );
}

function PageButton({ route }: { route: Route }) {
  const router = useRouter();
  return (
    <button
      className="rounded-md px-3 py-2 font-medium text-amber-800 transition-colors hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100"
      onClick={() => router.push(route.routePath!)}
    >
      <span
        className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px]
              before:-bottom-1.5 before:left-0 before:bg-amber-700 dark:before:bg-amber-300
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
      >
        {route.routeEnum.valueOf()}
      </span>
    </button>
  );
}
