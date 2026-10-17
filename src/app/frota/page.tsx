import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionVideo from "@/components/SectionVideo";
import CallToAction from "@/components/CallToAction";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://inspmaq.com.br"),
  title: "Frota de caminhões guindauto",
  description: "Conheça a frota de caminhões guindauto da INSPMAQ para movimentação e transporte de cargas em operações industriais e portuárias.",
  alternates: { canonical: "/frota" },
  robots: { index: true, follow: true },
  openGraph: { title: "Frota de caminhões guindauto", description: "Conheça a frota de caminhões guindauto da INSPMAQ para movimentação e transporte de cargas em operações industriais e portuárias.", url: "https://inspmaq.com.br/frota", siteName: "INSPMAQ", locale: "pt_BR", type: "website", images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }] },
  twitter: { card: "summary_large_image", title: "Frota de caminhões guindauto", description: "Conheça a frota de caminhões guindauto da INSPMAQ para movimentação e transporte de cargas em operações industriais e portuárias.", images: ["/porto-rio-grande.webp"] },
};

const highlights = [
  "Caminhões guindauto revisados e com manutenção em dia",
  "Operadores treinados e capacitados",
  "Atendimento para obras, indústrias e operações portuárias",
  "Disponibilidade ágil, com segurança em primeiro lugar",
];

export default function FrotaPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://inspmaq.com.br/frota#webpage", url: "https://inspmaq.com.br/frota", name: "Frota de caminhões guindauto | INSPMAQ", description: "Conheça a frota de caminhões guindauto da INSPMAQ para movimentação e transporte de cargas em operações industriais e portuárias.", isPartOf: { "@id": "https://inspmaq.com.br/#website" }, about: { "@id": "https://inspmaq.com.br/#organization" }, inLanguage: "pt-BR" }} />
      <main>
        <PageHero eyebrow="Frota" title="Caminhões guindauto para movimentar e transportar cargas.">
          A frota de caminhões guindauto atende demandas de movimentação e transporte de cargas pesadas em operações
          industriais e portuárias.
        </PageHero>

        <section className="hairline-t py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionVideo sources={["/munck-bg.mp4", "/munck-bg-2.mp4"]} label="Imagens de caminhão guindauto em operação" />
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow">Sobre a frota</p>
              <ul className="hairline-t mt-5">
                {highlights.map((item) => (
                  <li key={item} className="hairline-b flex items-start gap-4 py-4 text-brand-text">
                    <span aria-hidden="true" className="mt-[13px] h-px w-5 shrink-0 bg-brand-lime" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/servicos#guindauto" className="mt-8 inline-flex items-center gap-2 border-b border-brand-lime pb-0.5 text-sm text-white">
                Ver o serviço de locação
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
