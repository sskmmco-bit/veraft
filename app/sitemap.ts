import type { MetadataRoute } from "next";
import { pillars, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/services",
    ...pillars.map((p) => p.href),
    "/approach",
    "/about",
    "/contact",
    "/work",
    "/insights",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
