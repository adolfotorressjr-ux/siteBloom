import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/start", ...projects.map((p) => `/work/${p.slug}`)].map(
    (path) => ({
      url: site.url + path,
      changeFrequency: "monthly",
      priority: path ? 0.7 : 1,
    }),
  );
}
