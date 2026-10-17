import Image from "next/image";
import SectionHead from "@/components/SectionHead";

const values = [
  "Segurança em primeiro lugar",
  "Qualidade e responsabilidade técnica",
  "Compromisso com o cliente",
  "Ética e transparência",
  "Melhoria contínua",
];

export default function HomeAbout() {
  return (
    <section id="empresa" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead
          index="01"
          label="A empresa"
          title="A Inspmaq conhece a indústria pelo trabalho que acontece no chão de operação."
        >
          <p>
            Desde 2014, a Inspmaq constrói sua trajetória em Rio Grande, próxima da realidade industrial e portuária da região. Atua com manutenção, inspeções técnicas, assistência em equipamentos e apoio à movimentação de cargas — atividades em que a condição de cada equipamento interfere na segurança e no ritmo da operação.
          </p>
        </SectionHead>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden md:col-span-5">
            <Image
              src="/porto-rio-grande.webp"
              alt="Operação portuária em Rio Grande"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[70%_50%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#101311]/60 via-transparent to-transparent" />
          </div>

          <div className="md:col-span-7">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dd className="font-heading text-5xl font-extrabold text-brand-lime">+10</dd>
                <dt className="mt-2 font-mono text-xs uppercase tracking-[.16em] text-white/55">Anos de mercado</dt>
              </div>
              <div>
                <dd className="font-heading text-5xl font-extrabold text-brand-lime">100+</dd>
                <dt className="mt-2 font-mono text-xs uppercase tracking-[.16em] text-white/55">Serviços realizados</dt>
              </div>
            </dl>

            <div className="hairline-t mt-10 grid gap-8 pt-8 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow">Missão</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">
                  Contribuir para operações industriais mais seguras e confiáveis por meio do cuidado técnico com equipamentos, da manutenção e da atenção aos riscos.
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Visão</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">
                  Ser reconhecida pela forma responsável de compreender os equipamentos, executar o trabalho e considerar as necessidades reais de cada operação.
                </p>
              </div>
            </div>

            <div className="hairline-t mt-8 pt-8">
              <h3 className="eyebrow">Valores</h3>
              <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-brand-text sm:grid-cols-2">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-4 bg-brand-lime" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
