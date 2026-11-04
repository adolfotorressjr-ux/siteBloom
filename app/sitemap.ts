import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { caseStudyProjects } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/start", priority: 0.9 },
    ...caseStudyProjects.map((p) => ({ path: `/work/${p.slug}`, priority: p.status === "live" ? 0.8 : 0.5 })),
  ];
  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
