import SectionHead from "@/components/SectionHead";

const steps = [
  {
    n: "01",
    title: "Diagnóstico Preditivo",
    text: "Observar as condições reais do equipamento ajuda a reconhecer sinais de desgaste e anomalias, avaliar riscos e orientar decisões antes que uma falha interrompa a operação.",
    items: ["Inspeção visual e técnica", "Identificação de desgastes, vazamentos e folgas", "Relatório técnico com prioridades de intervenção"],
  },
  {
    n: "02",
    title: "Preventiva",
    text: "Com base nas condições observadas e nas necessidades da operação, as intervenções planejadas organizam inspeções e cuidados periódicos para reduzir riscos e sustentar a confiabilidade.",
    items: ["Manutenção preventiva e corretiva", "Solda e caldeiraria", "Reposição de peças e componentes", "Testes de funcionamento após o reparo"],
  },
  {
    n: "03",
    title: "Prevenção da Manutenção Corretiva",
    text: "Diagnóstico e planejamento ajudam a agir antes que pequenos sinais evoluam para falhas. Nem toda ocorrência pode ser evitada, mas antecipar necessidades reduz a dependência de reparos não planejados.",
    items: ["Plano de manutenção preventiva contínuo", "Acompanhamento periódico", "Recomendações para prolongar a vida útil"],
  },
];

export default function HomeMethod() {
  return (
    <section className="hairline-t py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHead index="04" label="Como trabalhamos" title="Compreender a condição, planejar o cuidado e reduzir falhas inesperadas.">
          <p>
            A manutenção começa pela leitura das condições do equipamento, segue pelo planejamento dos cuidados necessários e busca reduzir falhas inesperadas. Os registros e testes são realizados conforme o tipo de serviço executado.
          </p>
        </SectionHead>

        <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Linha do processo: liga as três etapas no desktop */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-brand-lime/60 via-white/20 to-white/5 md:block" />
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span aria-hidden="true" className="relative z-10 block h-[15px] w-[15px] rounded-full border-2 border-brand-lime bg-brand-dark" />
              <p className="mt-6 font-mono text-xs text-brand-lime">Etapa {step.n}</p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{step.text}</p>
              <ul className="hairline-t mt-5 space-y-2 pt-5 text-sm text-brand-text">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-[11px] h-px w-4 shrink-0 bg-brand-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="hairline-t mt-16 grid gap-6 pt-10 md:grid-cols-12 md:gap-10">
          <p className="eyebrow md:col-span-4">Por que isso importa</p>
          <p className="max-w-2xl text-lg leading-8 text-brand-text md:col-span-8">
            Normas diferentes tratam de riscos diferentes. A NR-11 aborda a segurança no transporte, movimentação, armazenagem e manuseio de materiais; a NR-12 trata da segurança em máquinas e equipamentos; a NR-29 é voltada ao trabalho portuário; e a NR-35 trata do trabalho em altura. A aplicação depende da atividade, do equipamento e dos requisitos pertinentes.
          </p>
        </div>
      </div>
    </section>
  );
}
