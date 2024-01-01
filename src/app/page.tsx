import { redirect } from "next/navigation";
import { SelectedPage, routes } from "./utilities";

export default function Page() {
  redirect(routes.find((i) => i.routeEnum == SelectedPage.ABOUTME)?.routePath!)  
}
