import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const siteUrl = "https://www.arcadiahomecare.ca";
const appDir = path.join(process.cwd(), "app");
export const dynamic = "force-static";

function isRouteDirectory(dirName: string): boolean {
  return !dirName.startsWith("(") && !dirName.startsWith("@");
}

function collectStaticRoutes(currentDir: string, routePrefix = ""): string[] {
  const entries = readdirSync(currentDir);
  const hasPage = entries.includes("page.tsx") || entries.includes("page.ts");
  const routes: string[] = [];

  if (hasPage && !routePrefix.includes("[")) {
    routes.push(routePrefix || "/");
  }

  for (const entry of entries) {
    if (!isRouteDirectory(entry)) continue;

    const fullPath = path.join(currentDir, entry);
    const stats = statSync(fullPath);

    if (!stats.isDirectory()) continue;

    const nextPrefix = routePrefix ? `${routePrefix}/${entry}` : `/${entry}`;
    routes.push(...collectStaticRoutes(fullPath, nextPrefix));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const uniqueRoutes = [...new Set(collectStaticRoutes(appDir))];

  const customRoutes = [
    "/locations/york-region",
    "/locations/peel-region",
    "/locations/durham-region",
    "/locations/halton-region",
    "/locations/york-region/markham-home-care",
    "/locations/york-region/richmond-hill-home-care",
    "/locations/peel-region/mississauga-home-care",
    "/conditions/alzheimers-care",
    "/contact/thank-you",
    "/how-care-starts/first-conversation/thank-you",
    "/referral-form/thank-you"
  ];

  const allRoutes = [...new Set([...uniqueRoutes, ...customRoutes])];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}/`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}