import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CompanyTabs from "@/components/CompanyTabs";
import CallToAction from "@/components/CallToAction";
import Cases from "@/components/Cases";

export const metadata: Metadata = {
  metadataBase: new URL("https://inspmaq.com.br"),
  title: "Manutenção industrial, inspeção técnica e guindauto em Rio Grande",
  description: "Manutenção industrial, inspeções técnicas e locação de caminhão guindauto para operações industriais e portuárias em Rio Grande - RS e região.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Manutenção industrial, inspeção técnica e guindauto em Rio Grande", description: "Manutenção industrial, inspeções técnicas e locação de caminhão guindauto para operações industriais e portuárias em Rio Grande - RS e região.", url: "https://inspmaq.com.br/", siteName: "INSPMAQ", locale: "pt_BR", type: "website", images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }] },
  twitter: { card: "summary_large_image", title: "Manutenção industrial, inspeção técnica e guindauto em Rio Grande", description: "Manutenção industrial, inspeções técnicas e locação de caminhão guindauto para operações industriais e portuárias em Rio Grande - RS e região.", images: ["/porto-rio-grande.webp"] },
};

export default function Home() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://inspmaq.com.br/#webpage", url: "https://inspmaq.com.br/", name: "Manutenção industrial, inspeção técnica e guindauto em Rio Grande | INSPMAQ", description: "Manutenção industrial, inspeções técnicas e locação de caminhão guindauto para operações industriais e portuárias em Rio Grande - RS e região.", isPartOf: { "@id": "https://inspmaq.com.br/#website" }, about: { "@id": "https://inspmaq.com.br/#organization" }, inLanguage: "pt-BR" }} />
      <main>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <CompanyTabs />
      <Cases />
      <CallToAction />
      </main>
    </>
  );
}