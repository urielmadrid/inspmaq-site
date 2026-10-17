import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, host: "https://inspmaq.com.br", sitemap: "https://inspmaq.com.br/sitemap.xml" }; }
