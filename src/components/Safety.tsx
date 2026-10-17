import { ShieldCheck } from "lucide-react";

export default function Safety() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-brand-green/20 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-brand-lime flex items-center justify-center">
              <ShieldCheck className="text-brand-text" size={56} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Segurança começa na forma de trabalhar
          </h2>

          <p className="font-body text-white/80 mt-5 leading-relaxed">
            A segurança depende de reconhecer os riscos da atividade, considerar as condições do equipamento e respeitar os procedimentos aplicáveis a cada operação.
          </p>

          <p className="font-body text-white/80 mt-4 leading-relaxed">
            Entre as referências regulamentadoras estão a NR-11, sobre movimentação e manuseio de materiais; a NR-29, relacionada à segurança no trabalho portuário; e a NR-35, sobre trabalho em altura. A norma pertinente depende da atividade e do contexto operacional. A menção a uma norma não representa, por si só, declaração de conformidade integral.
          </p>
        </div>
      </div>
    </section>
  );
}