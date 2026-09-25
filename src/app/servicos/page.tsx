import CallToAction from "@/components/CallToAction";
import ManutencaoService from "@/components/ManutencaoService";
import InspecoesService from "@/components/InspecoesService";
import GuindautoService from "@/components/GuindautoService";
import ServicosHero from "@/components/ServicosHero";
import GuindautoSpecs from "@/components/GuindautoSpecs";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export default function ServicosPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://inspmaq.com.br/servicos#webpage", url: "https://inspmaq.com.br/servicos", name: "Serviços de manutenção, inspeção e guindauto | INSPMAQ", description: "Conheça os serviços da INSPMAQ em manutenção industrial, inspeções técnicas e locação de caminhão guindauto em Rio Grande - RS e região.", isPartOf: { "@id": "https://inspmaq.com.br/#website" }, about: { "@id": "https://inspmaq.com.br/#organization" }, inLanguage: "pt-BR" }} />
      <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://inspmaq.com.br/" }, { "@type": "ListItem", position: 2, name: "Serviços", item: "https://inspmaq.com.br/servicos" }] }} />
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [
        { "@type": "Service", "@id": "https://inspmaq.com.br/servicos#manutencao", name: "Manutenção industrial", description: "Manutenção preventiva e corretiva para operações industriais, incluindo solda e caldeiraria conforme o conteúdo do site.", provider: { "@id": "https://inspmaq.com.br/#organization" }, areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } }, url: "https://inspmaq.com.br/servicos#manutencao" },
        { "@type": "Service", "@id": "https://inspmaq.com.br/servicos#inspecoes", name: "Inspeções técnicas", description: "Inspeções técnicas relacionadas a NR-35 e NR-29, conforme o conteúdo do site.", provider: { "@id": "https://inspmaq.com.br/#organization" }, areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } }, url: "https://inspmaq.com.br/servicos#inspecoes" },
        { "@type": "Service", "@id": "https://inspmaq.com.br/servicos#guindauto", name: "Locação de caminhão guindauto", description: "Locação de caminhão guindauto para movimentação e transporte de cargas.", provider: { "@id": "https://inspmaq.com.br/#organization" }, areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } }, url: "https://inspmaq.com.br/servicos#guindauto" }
      ] }} />
      <main>
      <ServicosHero />
      <ManutencaoService />
      <InspecoesService />
      <GuindautoService />
      <GuindautoSpecs />
      <CallToAction />
      </main>
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://inspmaq.com.br"),
  title: "Serviços de manutenção, inspeção e guindauto",
  description: "Conheça os serviços da INSPMAQ em manutenção industrial, inspeções técnicas e locação de caminhão guindauto em Rio Grande - RS e região.",
  alternates: { canonical: "/servicos" },
  robots: { index: true, follow: true },
  openGraph: { title: "Serviços de manutenção, inspeção e guindauto", description: "Conheça os serviços da INSPMAQ em manutenção industrial, inspeções técnicas e locação de caminhão guindauto em Rio Grande - RS e região.", url: "https://inspmaq.com.br/servicos", siteName: "INSPMAQ", locale: "pt_BR", type: "website", images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }] },
  twitter: { card: "summary_large_image", title: "Serviços de manutenção, inspeção e guindauto", description: "Conheça os serviços da INSPMAQ em manutenção industrial, inspeções técnicas e locação de caminhão guindauto em Rio Grande - RS e região.", images: ["/porto-rio-grande.webp"] },
};