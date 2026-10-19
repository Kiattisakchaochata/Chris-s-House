import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SITE.url.replace(/\/$/, "");

  // ยังไม่มีโดเมนจริง: ไม่ประกาศ URL ตัวอย่างใน Sitemap
  if (
    !siteUrl ||
    siteUrl.includes("yourdomain.com") ||
    siteUrl.includes("localhost")
  ) {
    return [];
  }

  const routes = [
    "/",
    "/about",
    "/menu",
    "/gallery",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
}
