import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Manutenção industrial",
    purpose: "Manter equipamentos em condição de trabalho e reduzir paradas inesperadas na produção.",
    items: ["Manutenção preventiva e corretiva", "Solda e caldeiraria", "Reposição de peças e testes após o reparo"],
    href: "/servicos#manutencao",
  },
  {
    n: "02",
    title: "Inspeções técnicas",
    purpose: "Identificar riscos antes que se tornem acidente, multa ou parada de operação.",
    items: ["Referências: NR-11, NR-29 e NR-35, conforme a atividade", "Estrutura, sistemas elétrico e hidráulico", "Registros técnicos conforme o serviço executado"],
    href: "/servicos#inspecoes",
  },
  {
    n: "03",
    title: "Locação de caminhão guindauto",
    purpose: "Carregar, transportar e movimentar cargas com um único equipamento, com operador qualificado incluso.",
    items: ["Diferentes capacidades de içamento", "Obras, indústrias e operações portuárias"],
    href: "/servicos#guindauto",
  },
  {
    n: "04",
    title: "Assistência técnica SAUR",
    purpose: "Diagnóstico, manutenção e inspeção em equipamentos SAUR, como os tombadores industriais de descarga.",
    items: ["Manutenção preventiva e corretiva", "Estrutura, sistema hidráulico e segurança", "Registro técnico do trabalho"],
    href: "/servicos#saur",
  },
];

export default function HomeServices() {
  return (
    <section className="hairline-t overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Abertura: a imagem se funde ao fundo do site, como no Hero, e o texto fica à esquerda */}
        <div className="relative isolate lg:min-h-[30rem]">
          <div className="relative aspect-[4/3] w-full lg:absolute lg:inset-y-0 lg:-right-6 lg:-z-10 lg:aspect-auto lg:w-[46%]">
            <Image
              src="/hero-inspmaq.webp"
              alt="Soldador e inspetor de segurança ao lado de um caminhão guindauto da INSPMAQ"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[70%_50%] lg:object-right"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#101311] lg:bg-gradient-to-r lg:from-[#101311] lg:via-[#101311]/40 lg:to-transparent" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-1/4 bg-gradient-to-t from-[#101311] to-transparent lg:block" />
          </div>

          <div className="relative lg:flex lg:min-h-[30rem] lg:max-w-[50%] lg:flex-col lg:justify-center">
            <p className="eyebrow">02 / Serviços</p>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.1] text-brand-text md:text-4xl">
              Manutenção, inspeção e movimentação de cargas fazem parte da mesma realidade industrial.
            </h2>
            <p className="mt-6 text-base leading-7 text-brand-muted">
              A Inspmaq atua em contextos nos quais equipamentos, pessoas e continuidade operacional precisam ser considerados em conjunto. Cada frente responde a uma necessidade diferente da rotina industrial e portuária.
            </p>
          </div>
        </div>

        <ul className="hairline-t mt-14">
          {services.map((service) => (
            <li key={service.n} className="hairline-b">
              <Link
                href={service.href}
                className="group grid gap-5 py-8 transition-colors hover:bg-white/[.025] md:grid-cols-12 md:gap-10 md:px-4"
              >
                <span className="font-mono text-sm text-brand-lime md:col-span-1">{service.n}</span>
                <div className="md:col-span-5">
                  <h3 className="font-heading text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{service.purpose}</p>
                </div>
                <ul className="space-y-2 text-sm text-brand-text md:col-span-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-[11px] h-px w-4 shrink-0 bg-brand-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ArrowUpRight
                  aria-hidden="true"
                  size={22}
                  className="hidden self-start text-white/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-lime md:col-span-1 md:block md:justify-self-end"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
