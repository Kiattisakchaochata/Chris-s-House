import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = SITE.url.replace(/\/$/, "");

  const isProductionDomain =
    siteUrl.startsWith("https://") &&
    !siteUrl.includes("yourdomain.com") &&
    !siteUrl.includes("localhost");

  if (!isProductionDomain) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
