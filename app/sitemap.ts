import type { MetadataRoute } from "next";
import servicesData from "./data/servicesData";
import { SITE } from "./seo-config";

export const dynamic = "force-static";

function createSlug(text: string) {
  return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[()]/g, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    "",
    "/about",
    "/services",
    "/services/cosmetic-dermatology",
    "/services/laser-treatment",
    "/services/medical-dermatology",
    "/services/surgical-dermatology",
    "/appointment",
    "/contact",
    "/gallery",
  ];

  const serviceUrls = servicesData.map((service) => ({
    url: `${SITE.url}/services/${createSlug(service.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticRoutes: MetadataRoute.Sitemap = staticUrls.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [...staticRoutes, ...serviceUrls];
}