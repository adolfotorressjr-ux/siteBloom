export const site = {
  name: "siteBloom",
  url: process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  email: null as string | null,
  description:
    "siteBloom designs and builds modern websites for businesses ready to outgrow their old one.",
};
export const budgetOptions = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500+",
  "Not sure yet",
];
export const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];
