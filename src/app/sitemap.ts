import type { MetadataRoute } from "next";
import { completedProjects } from "@/data/projects";
import { getSiteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  if (!origin) return [];
  return [
    { url: origin.href, priority: 1 },
    ...completedProjects.map((project) => ({
      url: new URL(`/work/${project.slug}`, origin).href,
      priority: 0.8,
    })),
  ];
}
