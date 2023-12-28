export const enum SelectedPage {
  HOME = "Home",
  ABOUTME = "About Me",
  CONTACTINFO = "Contact Info",
}

export type Route = {
  routeEnum: SelectedPage;
  routePath: string;
};

export const routes: Route[] = [
  { routeEnum: SelectedPage.HOME, routePath: "/" },
  { routeEnum: SelectedPage.ABOUTME, routePath: "/about-me" },
  { routeEnum: SelectedPage.CONTACTINFO, routePath: "/contact-info" },
];
