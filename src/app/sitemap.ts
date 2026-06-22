import type { MetadataRoute } from "next";
import { productSlugs } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seniqify.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...productSlugs.map((slug) => ({
      url: `${base}/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
