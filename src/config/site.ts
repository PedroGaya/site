export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "phgw.dev",
  description: "phgw.dev",
  navItems: [
    {
      label: "About",
      href: "/about-me",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about-me",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/PedroGaya",
    email: "mailto:pedrohenriquegaya@gmail.com",
    twitter: "https://twitter.com/nd_wndr",
    rss: "",
  },
};
