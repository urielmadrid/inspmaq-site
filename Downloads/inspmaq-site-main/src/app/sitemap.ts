import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inspmaq.com.br";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/servicos`, lastModified: new Date() },
    { url: `${baseUrl}/frota`, lastModified: new Date() },
    { url: `${baseUrl}/sobre`, lastModified: new Date() },
    { url: `${baseUrl}/contato`, lastModified: new Date() },
  ];
}