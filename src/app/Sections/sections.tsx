"use client";

import { SelectedPage, Route, routes } from "../utilities";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function Sections() {
  return (
    <div className="flex justify-center fixed inset-x-0 bottom-0 m-auto">
      <ListPages />
    </div>
  );
}

function ListPages() {
  return (
    <div className="flex justify-center space-x-4">
      <div>
        <PageButton route={routes.find(i => i.routeEnum == SelectedPage.HOME)!} />
      </div>
      <div>
        <PageButton route={routes.find(i => i.routeEnum == SelectedPage.ABOUTME)!} />
      </div>
      <div>
        <PageButton route={routes.find(i => i.routeEnum == SelectedPage.CONTACTINFO)!} />
      </div>
    </div>
  );
}

function PageButton({ route }: { route: Route }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <button
      className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      onClick={() => router.push(route.routePath!)}
    >
      {route.routeEnum.valueOf()}
    </button>
  );
}
