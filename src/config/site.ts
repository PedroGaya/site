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
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Résumé",
      href: "/resume",
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
    twitter: "https://twitter.com/nd_wndr",
    rss: "",
  },
};
