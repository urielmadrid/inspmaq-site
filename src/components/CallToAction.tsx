import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Fechamento discreto: informa a área de atuação e indica onde falar com a equipe. */
export default function CallToAction() {
  return (
    <section className="hairline-t py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-12 md:items-end md:gap-10 md:px-10">
        <div className="md:col-span-7">
          <p className="eyebrow">Área de atuação</p>
          <h2 className="mt-4 font-heading text-2xl font-bold text-brand-text md:text-3xl">
            Rio Grande - RS e região.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-brand-muted md:text-base md:leading-7">
            Com sede em Rio Grande, a INSPMAQ atende operações industriais e portuárias em toda a região.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:col-span-5 md:justify-end">
          <Link href="/contato" className="group inline-flex items-center gap-2 border-b border-brand-lime pb-0.5 text-white">
            Canais de contato
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a href="https://wa.me/5553981018934" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
