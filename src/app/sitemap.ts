import type { MetadataRoute } from "next";
import { BLOG_STORIES } from "./blog/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aplusdrivingschool.co.zw";
  const base = siteUrl.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/gallery",
    "/faq",
    "/team",
    "/contact",
    "/blog",
    "/events",
    "/terms",
    "/privacy",
    "/legal",
    "/agreement",
    "/kawerifytech",
  ];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_STORIES.map((story) => ({
    url: `${base}/blog/${story.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
