"use client";

import { SelectedPage, Route, routes } from "../utilities";
import { useRouter } from "next/navigation";
import DisplayContactInfoModal from "../contact_info/contact-info";

export function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 m-auto bg-white shadow-lg dark:bg-slate-900">
      <ListPages />
    </div>
  );
}

function ListPages() {
  return (
    <div className="flex justify-center space-x-5 py-1 ">
      <div>
        <PageButton
          route={routes.find((i) => i.routeEnum == SelectedPage.ABOUTME)!}
        />
      </div>
      <div>
        <PageButton
          route={routes.find((i) => i.routeEnum == SelectedPage.PROJECTS)!}
        />
      </div>
      <div>
        <DisplayContactInfoModal />
      </div>
    </div>
  );
}

function PageButton({ route }: { route: Route }) {
  const router = useRouter();
  return (
    <button
      className="font-medium px-3 py-2 text-slate-700 dark:text-slate-300 rounded-md"
      onClick={() => router.push(route.routePath!)}
    >
      <span
        className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:-bottom-1.5 before:left-0 before:bg-slate-700 dark:before:bg-slate-300
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
      >
        {route.routeEnum.valueOf()}
      </span>
    </button>
  );
}
