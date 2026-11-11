import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import { ArrowRight } from "lucide-react";

/** Vídeo da tela inicial: aparece no topo, acima dos textos. Para trocar, mude os arquivos em public/. Use null para voltar à imagem. */
const heroVideo = {
  src: "/home-video.mp4",
  poster: "/home-video-poster.webp",
  label: "Operações da INSPMAQ: manutenção, inspeção e movimentação de cargas",
} as { src: string; poster: string; label: string } | null;

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
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10 opacity-60" />

      {/* Vídeo (ou imagem) no topo, dentro da largura do site e com altura contida. Os textos vêm logo abaixo. */}
      <div className="mx-auto max-w-7xl px-6 pt-6 md:px-10 md:pt-8">
        <div className="overflow-hidden ring-1 ring-white/10">
          <div className="brand-rule-thin" />
          <div className="relative aspect-video w-full bg-brand-panel lg:aspect-[21/9]">
            {heroVideo ? (
              <>
                <HeroVideo src={heroVideo.src} poster={heroVideo.poster} label={heroVideo.label} className="object-center" />
                {/* Tinta verde-escura: iguala o vídeo ao tom do site */}
                <div aria-hidden="true" className="absolute inset-0 bg-[#0A3D24]/25 mix-blend-multiply" />
              </>
            ) : (
              <Image
                src="/hero-inspmaq.webp"
                alt="Soldador e inspetor de segurança ao lado de um caminhão guindauto da INSPMAQ"
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-[70%_50%]"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-10 md:px-10 lg:pb-16 lg:pt-14">
        <div className="max-w-4xl">
          <p className="eyebrow">INSPMAQ / Rio Grande, RS</p>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] text-brand-text sm:text-5xl lg:text-[3.4rem]">
            Máquinas em operação. Pessoas em segurança. Processos que precisam continuar.
            <span className="text-brand-gradient"> A Inspmaq trabalha onde esses fatores se encontram.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-brand-muted md:text-lg md:leading-8">
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