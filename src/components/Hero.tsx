import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import { ArrowRight } from "lucide-react";

const index = [
  { n: "01", title: "Manutenção industrial", href: "/servicos#manutencao" },
  { n: "02", title: "Inspeções técnicas", href: "/servicos#inspecoes" },
  { n: "03", title: "Locação de guindauto", href: "/servicos#guindauto" },
  { n: "04", title: "Assistência técnica SAUR", href: "/servicos#saur" },
];

const facts = [
  { label: "No setor industrial", value: "Desde 2014" },
  { label: "Sede", value: "Rio Grande, RS" },
  { label: "Normas de referência", value: "NR-11, NR-12, NR-29 e NR-35" },
  { label: "Ambientes de atuação", value: "Industrial e portuário" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Vídeo institucional: no desktop ocupa o lado direito, como a imagem anterior; no celular fica acima do texto */}
      <div className="relative aspect-[4/3] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:-z-20 lg:aspect-auto lg:w-[68%]">
        <HeroVideo
          src="/hero-video.mp4"
          poster="/hero-video-poster.webp"
          label="Imagens da atuação da INSPMAQ: inspeção, movimentação de cargas com guindauto e solda industrial"
        />
        {/* Tinta verde-escura: iguala o vídeo ao tom do site */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#0A3D24]/35 mix-blend-multiply" />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101311]/25" />
        {/* Funde o vídeo com o fundo do site: sem cortes visíveis */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#101311] lg:bg-gradient-to-r lg:from-[#101311] lg:via-[#101311]/30 lg:to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-[#101311] to-transparent lg:block" />
      </div>
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-4 md:px-10 lg:pb-20 lg:pt-28">
        <div className="lg:max-w-[46%]">
          <p className="eyebrow">INSPMAQ / Rio Grande, RS</p>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] text-brand-text sm:text-5xl lg:text-[3.4rem]">
  Máquinas em operação. Pessoas em segurança. Processos que precisam continuar.
  <span className="mt-4 block text-brand-gradient">
    A Inspmaq trabalha onde esses fatores se encontram.
  </span>
</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-brand-muted md:text-lg md:leading-8">
            Desde 2014, a Inspmaq atua em manutenção industrial, inspeções técnicas, assistência em equipamentos SAUR e movimentação de cargas. Seu trabalho conecta condição dos equipamentos, segurança e realidade de operações industriais e portuárias.
          </p>
          <div className="mt-9">
            <Link href="/servicos" className="group inline-flex items-center gap-2 border-b border-brand-lime pb-0.5 text-sm text-white">
              Entenda o que fazemos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-10">
        <nav aria-label="Áreas de atuação" className="hairline-t">
          <p className="eyebrow py-4">Áreas de atuação</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {index.map((item) => (
              <li key={item.n} className="hairline-t lg:border-t-0 lg:[&:not(:first-child)]:border-l lg:border-white/10">
                <Link href={item.href} className="group flex items-center justify-between gap-4 px-0 py-5 transition-colors hover:bg-white/[.03] lg:px-6 lg:first:pl-0">
                  <span>
                    <span className="block font-mono text-xs text-brand-lime">{item.n}</span>
                    <span className="mt-1 block font-heading text-base font-bold text-white">{item.title}</span>
                  </span>
                  <ArrowRight size={18} className="text-white/40 transition-all group-hover:translate-x-1 group-hover:text-brand-lime" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <dl className="hairline-t mt-6 grid grid-cols-2 gap-6 pt-6 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs uppercase tracking-[.16em] text-white/50">{fact.label}</dt>
              <dd className="mt-2 font-heading text-lg font-bold text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
