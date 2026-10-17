import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import ServiceDetail, { type ServiceData } from "@/components/ServiceDetail";
import type { Metadata } from "next";
import InspecaoChecklist from "@/components/InspecaoChecklist";
import StructuredData from "@/components/StructuredData";

const services: ServiceData[] = [
  {
    id: "manutencao",
    n: "01",
    title: "Manutenção industrial",
    purpose: "Manter equipamentos em condição de trabalho e reduzir paradas inesperadas na produção.",
    intro:
      "A manutenção começa pela compreensão das condições do equipamento. Diagnóstico, intervenções planejadas e cuidados periódicos ajudam a orientar decisões e reduzir falhas inesperadas.",
    videos: ["/manutencao-bg.mp4", "/manutencao-bg-2.mp4"],
    videoLabel: "Imagens de serviços de manutenção industrial",
    blocks: [
      {
        heading: "Diagnóstico Preditivo",
        text: "Leitura das condições do equipamento para reconhecer sinais de desgaste e anomalias e orientar decisões de manutenção.",
        items: ["Inspeção visual e técnica completa", "Identificação de desgastes, vazamentos e folgas", "Relatório técnico com prioridades de intervenção"],
      },
      {
        heading: "Preventiva",
        text: "Cuidados e intervenções planejadas conforme as condições do equipamento, recomendações aplicáveis e necessidades da operação.",
        items: ["Manutenção preventiva e corretiva", "Serviços de solda e caldeiraria", "Reposição de peças e componentes", "Testes de funcionamento após o reparo"],
      },
      {
        heading: "Prevenção da Manutenção Corretiva",
        text: "Antecipar necessidades pode reduzir falhas inesperadas e a dependência de reparos não planejados, sem eliminar toda possibilidade de manutenção corretiva.",
        items: ["Plano de manutenção preventiva contínuo", "Acompanhamento periódico do equipamento", "Recomendações para prolongar a vida útil"],
      },
    ],
  },
  {
    id: "inspecoes",
    n: "02",
    title: "Inspeções técnicas",
    purpose: "Identificar riscos antes que se tornem acidente, multa ou parada de operação.",
    intro:
      "As inspeções técnicas observam pontos críticos dos equipamentos e da atividade. O escopo, os registros e os requisitos considerados variam conforme o equipamento e a operação.",
    videos: ["/inspecoes-bg.mp4"],
    videoLabel: "Inspetor com prancheta conferindo uma operação industrial e portuária",
    extra: <InspecaoChecklist />,
    blocks: [
      {
        heading: "Normas de referência",
        items: ["NR-11 — transporte, movimentação, armazenagem e manuseio de materiais", "NR-29 — segurança e saúde no trabalho portuário", "NR-35 — trabalho em altura"],
      },
      {
        heading: "Pontos verificados",
        items: ["Estrutura, solda e caldeiraria", "Sistema elétrico e hidráulico", "Cabos, fixações e dispositivos de segurança"],
      },
      {
        heading: "Registro do trabalho",
        items: ["Documentação técnica e certificados", "Laudo da inspeção"],
      },
    ],
  },
  {
    id: "guindauto",
    n: "03",
    title: "Locação de caminhão guindauto",
    purpose: "Carregar, transportar e movimentar cargas com um único equipamento, com operador qualificado incluso.",
    intro:
      "Os caminhões guindauto unem força e agilidade para mover o que a operação precisa sem parar o cronograma. O mesmo caminhão carrega, transporta e movimenta a carga.",
    videos: ["/munck-bg.mp4", "/munck-bg-2.mp4"],
    videoLabel: "Imagens de caminhão guindauto em operação",
    blocks: [
      {
        heading: "Capacidade de carga",
        text: "Equipamentos preparados para mover desde cargas leves até pesos industriais.",
        items: ["Diferentes capacidades de içamento", "Dimensionamento conforme peso e alcance de cada operação"],
      },
      {
        heading: "Agilidade",
        text: "Chegada rápida à obra ou operação, sem depender de um guindaste separado.",
        items: ["Menos tempo de espera", "Menos custo logístico e paradas na operação"],
      },
      {
        heading: "Onde atua",
        text: "Obras, indústrias e operações portuárias, com operador qualificado incluso.",
        items: ["Equipe treinada para diferentes cenários", "Normas de segurança de cada tipo de operação"],
      },
      {
        heading: "Definição do equipamento",
        text: "Capacidade, alcance e configuração são definidos conforme a demanda informada.",
        items: ["Consulta com a equipe para confirmar a configuração adequada"],
      },
    ],
  },
  {
    id: "saur",
    n: "04",
    title: "Assistência técnica SAUR",
    purpose: "Manter em funcionamento seguro os equipamentos SAUR da operação, como os tombadores industriais.",
    intro:
      "A INSPMAQ presta assistência técnica em equipamentos da marca SAUR. O trabalho segue a mesma rotina dos demais serviços de manutenção: avaliar o equipamento, intervir quando necessário e acompanhar para evitar novas paradas.",
    image: {
      src: "/tombador-industrial.webp",
      video: { src: "/saur-tombador.mp4", poster: "/saur-tombador-poster.webp" },
      alt: "Caminhão carregado sobre um tombador industrial SAUR sendo inclinado para a descarga",
      caption: "Tombador industrial SAUR · descarga de caminhões e recebimento de grãos",
    },
    note: "SAUR é marca de seus respectivos titulares, citada apenas para identificar os equipamentos atendidos. A INSPMAQ é uma empresa independente.",
    blocks: [
      {
        heading: "O tombador industrial",
        text: "Equipamento que inclina a plataforma para descarregar caminhões, muito usado no recebimento de grãos.",
        items: ["A carroceria é elevada e a carga a granel escorre por gravidade até a moega", "Dispensa a descarga manual e organiza o fluxo de recebimento"],
      },
      {
        heading: "Pontos de atenção",
        text: "Por trabalhar sob grandes cargas e em ciclos repetidos, alguns componentes pedem acompanhamento.",
        items: ["Plataforma e estrutura soldada", "Cilindros e sistema hidráulico", "Travas e dispositivos de segurança", "Fixações, cabos e sistema elétrico"],
      },
      {
        heading: "Assistência técnica",
        text: "Manutenção preventiva e corretiva, com solda e caldeiraria quando a estrutura exige.",
        items: ["Diagnóstico e relatório técnico", "Reposição de peças e componentes", "Testes de funcionamento após o reparo"],
      },
      {
        heading: "Inspeção e registro",
        text: "A inspeção técnica verifica o equipamento e o trabalho fica documentado.",
        items: ["Verificação de estrutura, sistema elétrico e hidráulico", "Documentação técnica e laudo da inspeção"],
      },
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://inspmaq.com.br/servicos#webpage", url: "https://inspmaq.com.br/servicos", name: "Serviços de manutenção, inspeção e guindauto | INSPMAQ", description: "Entenda a atuação da Inspmaq em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas em Rio Grande - RS e região.", isPartOf: { "@id": "https://inspmaq.com.br/#website" }, about: { "@id": "https://inspmaq.com.br/#organization" }, inLanguage: "pt-BR" }} />
      <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: "https://inspmaq.com.br/" }, { "@type": "ListItem", position: 2, name: "Serviços", item: "https://inspmaq.com.br/servicos" }] }} />
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [
        { "@type": "Service", "@id": "https://inspmaq.com.br/servicos#manutencao", name: "Manutenção industrial", description: "Manutenção preventiva e corretiva para operações industriais, incluindo solda e caldeiraria conforme o conteúdo do site.", provider: { "@id": "https://inspmaq.com.br/#organization" }, areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } }, url: "https://inspmaq.com.br/servicos#manutencao" },
        { "@type": "Service", "@id": "https://inspmaq.com.br/servicos#inspecoes", name: "Inspeções técnicas", description: "Inspeções técnicas considerando riscos e requisitos aplicáveis, incluindo referências como NR-11, NR-29 e NR-35 conforme a atividade.", provider: { "@id": "https://inspmaq.com.br/#organization" }, areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } }, url: "https://inspmaq.com.br/servicos#inspecoes" },
        { "@type": "Service", "@id": "https://inspmaq.com.br/servicos#saur", name: "Assistência técnica SAUR", description: "Assistência técnica em equipamentos da marca SAUR, como tombadores industriais, conforme o conteúdo do site.", provider: { "@id": "https://inspmaq.com.br/#organization" }, areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } }, url: "https://inspmaq.com.br/servicos#saur" },
        { "@type": "Service", "@id": "https://inspmaq.com.br/servicos#guindauto", name: "Locação de caminhão guindauto", description: "Locação de caminhão guindauto para movimentação e transporte de cargas.", provider: { "@id": "https://inspmaq.com.br/#organization" }, areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } }, url: "https://inspmaq.com.br/servicos#guindauto" }
      ] }} />
      <main>
      <PageHero eyebrow="Serviços" title="O que a INSPMAQ faz e para que serve cada serviço.">
        Manutenção industrial, inspeções técnicas, locação de caminhão guindauto e assistência técnica SAUR para
        operações industriais e portuárias. Cada seção abaixo explica a finalidade, o que o serviço envolve e como ele é conduzido.
      </PageHero>
      {services.map((service) => (
        <ServiceDetail key={service.id} service={service} />
      ))}
      <CallToAction />
      </main>
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://inspmaq.com.br"),
  title: "Serviços de manutenção, inspeção e guindauto",
  description: "Entenda a atuação da Inspmaq em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas em Rio Grande - RS e região.",
  alternates: { canonical: "/servicos" },
  robots: { index: true, follow: true },
  openGraph: { title: "Serviços de manutenção, inspeção e guindauto", description: "Entenda a atuação da Inspmaq em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas em Rio Grande - RS e região.", url: "https://inspmaq.com.br/servicos", siteName: "INSPMAQ", locale: "pt_BR", type: "website", images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }] },
  twitter: { card: "summary_large_image", title: "Serviços de manutenção, inspeção e guindauto", description: "Entenda a atuação da Inspmaq em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas em Rio Grande - RS e região.", images: ["/porto-rio-grande.webp"] },
};