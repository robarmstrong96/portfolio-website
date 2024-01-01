export const enum SelectedPage {
  ABOUTME = "About Me",
  PROJECTS = "Projects",
  CONTACTINFO = "Contact Info/Links",
}

/**
 * Defined type 'Route'
 *
 * @property routeEnum
 */
export type Route = {
  routeEnum: SelectedPage;
  routePath: string;
};

/**
 * Constant array of defined routes.
 */
export const routes: Route[] = [
  { routeEnum: SelectedPage.PROJECTS, routePath: "/projects" },
  { routeEnum: SelectedPage.ABOUTME, routePath: "/about-me" },
  { routeEnum: SelectedPage.CONTACTINFO, routePath: "/contact_info" },
];
