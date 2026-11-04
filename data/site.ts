/**
 * Site-wide settings. Edit here, everything else reads from this file.
 */
export const site = {
  name: "siteBloom",
  tagline: "Good businesses deserve better websites.",
  description:
    "siteBloom is an El Paso web design studio. We build fast, modern websites for small and established businesses that have outgrown their old one.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://mysitebloom.com"),
  /** TODO: add the studio email. While null, the footer shows a "Start a Project" link instead. */
  email: null as string | null,
  city: "El Paso",
  region: "TX",
  country: "US",
  startHref: "/start",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;
