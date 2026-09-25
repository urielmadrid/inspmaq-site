import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://inspmaq.com.br"),
  title: "Política de Privacidade",
  description: "Entenda como a INSPMAQ trata dados pessoais, cookies e informações enviadas pelo site.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
  openGraph: { title: "Política de Privacidade", description: "Entenda como a INSPMAQ trata dados pessoais, cookies e informações enviadas pelo site.", url: "https://inspmaq.com.br/politica-de-privacidade", siteName: "INSPMAQ", locale: "pt_BR", type: "website", images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }] },
  twitter: { card: "summary_large_image", title: "Política de Privacidade", description: "Entenda como a INSPMAQ trata dados pessoais, cookies e informações enviadas pelo site.", images: ["/porto-rio-grande.webp"] },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://inspmaq.com.br/politica-de-privacidade#webpage", url: "https://inspmaq.com.br/politica-de-privacidade", name: "Política de Privacidade | INSPMAQ", description: "Entenda como a INSPMAQ trata dados pessoais, cookies e informações enviadas pelo site.", isPartOf: { "@id": "https://inspmaq.com.br/#website" }, about: { "@id": "https://inspmaq.com.br/#organization" }, inLanguage: "pt-BR" }} />
      <main className="bg-brand-mist text-brand-dark">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-green">
          Privacidade
        </p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold md:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-brand-dark/80">
          Última atualização: 24 de setembro de 2026
        </p>

        <div className="mt-12 space-y-10 leading-7 text-brand-dark/80">
          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              1. Sobre esta política
            </h2>
            <p className="mt-3">
              Esta política explica, de forma simples, como a INSPMAQ trata
              informações pessoais fornecidas por visitantes e clientes por
              meio deste site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              2. Quais dados podem ser coletados
            </h2>
            <p className="mt-3">
              Quando você envia uma mensagem ou solicita um orçamento, podemos
              receber dados como nome, telefone, e-mail, empresa e informações
              necessárias para entender a solicitação. Também podemos receber
              dados técnicos básicos do acesso ao site, conforme as
              configurações do navegador e dos serviços utilizados.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              3. Para que usamos os dados
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Responder contatos e solicitações de orçamento;</li>
              <li>Prestar e organizar serviços solicitados;</li>
              <li>Melhorar o funcionamento e a experiência do site;</li>
              <li>Medir, quando autorizado, o uso das páginas do site.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              4. Cookies e análise de acesso
            </h2>
            <p className="mt-3">
              O site utiliza cookies necessários para seu funcionamento. O uso
              de cookies de análise, como os utilizados pelo Google Analytics,
              depende da sua escolha no aviso de cookies. Se você recusar a
              análise, o Google Analytics não será carregado pelo site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              5. Compartilhamento
            </h2>
            <p className="mt-3">
              Dados podem ser tratados por fornecedores de tecnologia
              necessários para operar o site e responder aos contatos. Não
              comercializamos dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              6. Segurança e conservação
            </h2>
            <p className="mt-3">
              Adotamos medidas técnicas e administrativas compatíveis com a
              operação do site para reduzir riscos de acesso ou uso indevido.
              Os dados são mantidos pelo período necessário para atender à
              finalidade para a qual foram coletados e às obrigações legais
              aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              7. Seus direitos
            </h2>
            <p className="mt-3">
              Nos termos da legislação aplicável, você pode solicitar
              informações sobre o tratamento de seus dados e exercer os
              direitos previstos na LGPD, observadas as hipóteses legais.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              8. Contato
            </h2>
            <p className="mt-3">
              Para dúvidas sobre privacidade ou tratamento de dados, entre em
              contato pelo e-mail{" "}
              <a
                href="mailto:contato@inspmaq.com.br"
                className="font-semibold text-brand-green underline underline-offset-2"
              >
                contato@inspmaq.com.br
              </a>{" "}
              ou pelo telefone/WhatsApp +55 (53) 98101-8934.
            </p>
          </section>
        </div>
      </article>
      </main>
    </>
  );
}
