export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "phgw.dev",
  description: "phgw.dev",
  navItems: [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about-me",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  links: {
    github: "https://github.com/PedroGaya",
    email: "mailto:pedrohenriquegaya@gmail.com",
    rss: "",
  },
};
