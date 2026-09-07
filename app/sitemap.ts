import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const url = process.env.NEXT_PUBLIC_SITE_URL || "https://moazzam.up.railway.app"; return [{ url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
