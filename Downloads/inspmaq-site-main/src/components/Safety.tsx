import { ShieldCheck } from "lucide-react";

export default function Safety() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-brand-green/20 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-brand-lime flex items-center justify-center">
              <ShieldCheck className="text-brand-dark" size={56} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Compromisso com a{" "}
            <span className="text-brand-lime">Segurança</span>
          </h2>

          <p className="font-body text-white/80 mt-5 leading-relaxed">
            Na INSPMAQ, segurança não é apenas uma prioridade — é um
            compromisso presente em cada serviço realizado.
          </p>

          <p className="font-body text-white/80 mt-4 leading-relaxed">
            Trabalhamos em conformidade com as normas técnicas (NR-35, NR-29)
            e os mais rigorosos padrões de segurança, garantindo operações
            mais confiáveis, eficientes e seguras para nossos clientes e
            colaboradores.
          </p>
        </div>
      </div>
    </section>
  );
}