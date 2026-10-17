import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeServices from "@/components/HomeServices";
import HomeSaur from "@/components/HomeSaur";
import HomeMethod from "@/components/HomeMethod";

export const metadata: Metadata = {
  metadataBase: new URL("https://inspmaq.com.br"),
  title: "INSPMAQ: manutenção industrial, inspeções e equipamentos",
  description: "Conheça a Inspmaq e sua atuação em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "INSPMAQ: manutenção industrial, inspeções e equipamentos", description: "Conheça a Inspmaq e sua atuação em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas.", url: "https://inspmaq.com.br/", siteName: "INSPMAQ", locale: "pt_BR", type: "website", images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }] },
  twitter: { card: "summary_large_image", title: "INSPMAQ: manutenção industrial, inspeções e equipamentos", description: "Conheça a Inspmaq e sua atuação em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas.", images: ["/porto-rio-grande.webp"] },
};

export default function Home() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://inspmaq.com.br/#webpage", url: "https://inspmaq.com.br/", name: "Manutenção industrial, inspeção técnica e guindauto em Rio Grande | INSPMAQ", description: "Conheça a Inspmaq e sua atuação em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas.", isPartOf: { "@id": "https://inspmaq.com.br/#website" }, about: { "@id": "https://inspmaq.com.br/#organization" }, inLanguage: "pt-BR" }} />
      <main>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeSaur />
      <HomeMethod />
      </main>
    </>
  );
}