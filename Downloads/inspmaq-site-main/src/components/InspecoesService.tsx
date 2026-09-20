"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Typewriter from "@/components/Typewriter";
import InspectionTitle from "@/components/InspectionTitle";
import InspectionButton from "@/components/InspectionButton";

const intro =
  "Antes que um risco vire acidente, multa ou parada de operação, a gente encontra. Nossas inspeções técnicas cobrem cada ponto crítico do seu equipamento, com laudo e conformidade com as normas vigentes.";

const checklist = [
  "Conformidade com a NR-35 (trabalho em altura)",
  "Conformidade com a NR-29 (segurança portuária)",
  "Estrutura, solda e caldeiraria",
  "Sistema elétrico e hidráulico",
  "Cabos, fixações e dispositivos de segurança",
  "Documentação técnica e certificados",
];

const scanDuration = 3;

export default function InspecoesService() {
  const router = useRouter();

  return (
    <section id="inspecoes" className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-darker scroll-mt-24">
      {/*
        Espaço reservado para vídeo ou imagem de fundo (ainda sem material).
        Quando tiver, adicione aqui um <video> ou <Image fill /> igual
        fizemos em ManutencaoService.tsx, mantendo o degradê escuro abaixo.
      */}

      <motion.div
        aria-hidden
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-heading text-brand-lime uppercase tracking-widest text-sm mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <InspectionTitle text="Inspeções Técnicas" />
          </h2>
          <Typewriter
            text={intro}
            speed={10}
            className="font-body text-white/90 text-lg leading-relaxed"
          />
        </div>

        <div className="relative mt-16 max-w-xl mx-auto">
          <motion.div
            aria-hidden
            initial={{ top: "0%", opacity: 0 }}
            whileInView={{ top: "100%", opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: scanDuration, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-brand-lime shadow-[0_0_20px_4px_rgba(139,209,70,0.6)] pointer-events-none"
          />

          <ul className="space-y-5">
            {checklist.map((item, index) => {
              const delay = (index / checklist.length) * scanDuration;
              return (
                <li key={item} className="flex items-center gap-4">
                  <span className="relative w-7 h-7 shrink-0 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: delay + 0.15 }}
                    >
                      <motion.path
                        d="M4 12.5 L9.5 18 L20 6"
                        stroke="#8BD146"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </span>
                  <span className="font-body text-white/85 text-left">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-16 flex justify-center">
          <InspectionButton text="Solicitar inspeção" />
        </div>
      </div>
    </section>
  );
}