'use client'

import { useRouter } from "next/navigation";
import { SelectedPage, Route, routes } from "./utilities";

export default function Page() {
  const router = useRouter();
  router.push(routes.find(i => i.routeEnum == SelectedPage.ABOUTME)?.routePath!)
  return (
    <>
    </>
  );
}
