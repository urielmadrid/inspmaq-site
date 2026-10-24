import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import EquipmentImage from "@/components/EquipmentImage";

const points = [
  "Plataforma e estrutura soldada",
  "Cilindros e sistema hidráulico",
  "Travas e dispositivos de segurança",
  "Fixações, cabos e sistema elétrico",
];

/** Seção institucional: assistência técnica SAUR e o equipamento tombador industrial. */
export default function HomeSaur() {
  return (
    <section id="saur" className="hairline-t scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead
          index="03"
          label="Assistência técnica SAUR"
          title="Assistência técnica em equipamentos SAUR, com a mesma rotina técnica de toda a INSPMAQ."
        >
          <p>
            A INSPMAQ presta assistência técnica em equipamentos da marca SAUR, seguindo o mesmo caminho adotado em todos
            os serviços de manutenção: diagnóstico, intervenção e prevenção, com o trabalho registrado.
          </p>
        </SectionHead>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <EquipmentImage
            src="/tombador-industrial.webp"
            video={{ src: "/saur-tombador.mp4", poster: "/saur-tombador-poster.webp" }}
            alt="Caminhão carregado sobre um tombador industrial SAUR sendo inclinado para a descarga"
            caption="Tombador industrial SAUR · descarga de caminhões"
            className="lg:col-span-7"
          />

          <div className="lg:col-span-5">
            <p className="eyebrow">Tombadores industriais</p>
            <h3 className="mt-4 font-heading text-2xl font-bold text-white">O que é e para que serve</h3>
            <p className="mt-4 text-sm leading-6 text-brand-muted md:text-base md:leading-7">
              O tombador é o equipamento que inclina a plataforma sobre a qual o caminhão está estacionado. Com a
              carroceria elevada, a carga a granel, como os grãos, escorre por gravidade até a moega de recebimento, sem
              descarga manual.
            </p>
            <p className="mt-4 text-sm leading-6 text-brand-muted md:text-base md:leading-7">
              Como trabalha sob grandes cargas e em ciclos repetidos, depende de estrutura, sistema hidráulico e
              dispositivos de segurança em boas condições. São pontos cobertos pelos serviços de manutenção e de inspeção
              técnica da INSPMAQ.
            </p>

            <ul className="hairline-t mt-6">
              {points.map((item) => (
                <li key={item} className="hairline-b flex items-start gap-4 py-3 text-sm text-brand-text">
                  <span aria-hidden="true" className="mt-[11px] h-px w-5 shrink-0 bg-brand-lime" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/servicos#saur" className="group mt-8 inline-flex items-center gap-2 border-b border-brand-lime pb-0.5 text-sm text-white">
              Ver detalhes da assistência SAUR
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-5 text-white/50">
          SAUR é marca de seus respectivos titulares, citada aqui apenas para identificar os equipamentos atendidos. A
          INSPMAQ é uma empresa independente.
        </p>
      </div>
    </section>
  );
}
