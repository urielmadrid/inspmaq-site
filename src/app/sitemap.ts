import type { MetadataRoute } from "next";
const baseUrl = "https://inspmaq.com.br";
export default function sitemap(): MetadataRoute.Sitemap { return [
  { url: baseUrl }, { url: `${baseUrl}/servicos` }, { url: `${baseUrl}/frota` }, { url: `${baseUrl}/contato` }, { url: `${baseUrl}/politica-de-privacidade` },
]; }
