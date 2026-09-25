"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import InspectionButton from "@/components/InspectionButton";
import InspectionTitle from "@/components/InspectionTitle";

const summary =
  "Executamos inspeções técnicas completas em equipamentos industriais e portuários, em conformidade com a NR-35 e a NR-29, identificando riscos antes que eles se tornem acidentes, multas ou paralisações.";

export default function InspectionsSummary() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-darker">
      {/*
        Espaço reservado para vídeo ou imagem de fundo (ainda sem material).
        Quando tiver, troque o <div> logo abaixo por algo como:

        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/inspecoes-bg.mp4" type="video/mp4" />
        </video>

        (ou <Image fill ... /> se for foto) e mantenha o degradê escuro
        que já vem na sequência, igual nas seções de Manutenção e Munck.
      */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/85 to-brand-darker/95" />

      <motion.div
        aria-hidden
        className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-heading text-brand-lime uppercase tracking-widest text-sm mb-3">
          Nossos Serviços
        </p>

       <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
  <InspectionTitle text="Inspeções Técnicas" />
</h2>

        <Typewriter
          text={summary}
          speed={10}
          className="font-body text-white/90 text-lg leading-relaxed"
        />

        <div className="mt-10 flex justify-center">
         <InspectionButton text="Ver serviços de inspeção" />
        </div>
      </div>
    </section>
  );
}