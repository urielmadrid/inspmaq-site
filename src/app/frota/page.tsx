import { Truck } from "lucide-react";
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
      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="font-heading text-4xl font-bold">
            Nossa <span className="text-brand-lime">Frota</span>
          </h1>
          <p className="font-body text-white/80 mt-4 max-w-xl mx-auto">
            Caminhões guindauto prontos para movimentar e transportar cargas
            com segurança, agilidade e eficiência.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center"
              >
                <Truck className="text-gray-300" size={48} />
              </div>
            ))}
          </div>
          <p className="font-body text-brand-dark/80 text-sm mt-3 text-center">
            (Fotos reais da frota entram aqui assim que você me passar)
          </p>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="font-body text-brand-dark/80 leading-relaxed text-lg">
              Nossa frota de caminhões guindauto está preparada para atender
              as mais diversas demandas de movimentação e transporte de
              cargas pesadas, com a agilidade e a segurança que a operação
              industrial e portuária exige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-12">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 font-body text-brand-dark/80">
                <span className="w-2 h-2 rounded-full bg-brand-green mt-2 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      </main>
    </>
  );
}