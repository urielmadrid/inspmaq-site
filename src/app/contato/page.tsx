import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ContatoHero from "@/components/ContatoHero";
import AreaAtendimento from "@/components/AreaAtendimento";
import ContatoContent from "@/components/ContatoContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://inspmaq.com.br"),
  title: "Contato e orçamento",
  description: "Solicite orçamento para manutenção industrial, inspeção técnica ou locação de caminhão guindauto. Atendimento em Rio Grande - RS e região.",
  alternates: { canonical: "/contato" },
  robots: { index: true, follow: true },
  openGraph: { title: "Contato e orçamento", description: "Solicite orçamento para manutenção industrial, inspeção técnica ou locação de caminhão guindauto. Atendimento em Rio Grande - RS e região.", url: "https://inspmaq.com.br/contato", siteName: "INSPMAQ", locale: "pt_BR", type: "website", images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }] },
  twitter: { card: "summary_large_image", title: "Contato e orçamento", description: "Solicite orçamento para manutenção industrial, inspeção técnica ou locação de caminhão guindauto. Atendimento em Rio Grande - RS e região.", images: ["/porto-rio-grande.webp"] },
};

export default function ContatoPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://inspmaq.com.br/contato#webpage", url: "https://inspmaq.com.br/contato", name: "Contato e orçamento | INSPMAQ", description: "Solicite orçamento para manutenção industrial, inspeção técnica ou locação de caminhão guindauto. Atendimento em Rio Grande - RS e região.", isPartOf: { "@id": "https://inspmaq.com.br/#website" }, about: { "@id": "https://inspmaq.com.br/#organization" }, inLanguage: "pt-BR" }} />
      <main>
      <ContatoHero />
      <AreaAtendimento />
      <ContatoContent />
      </main>
    </>
  );
}