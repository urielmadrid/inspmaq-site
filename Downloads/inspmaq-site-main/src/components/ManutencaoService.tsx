"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Wrench, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Typewriter from "@/components/Typewriter";
import SparkText from "@/components/SparkText";
import SparkButton from "@/components/SparkButton";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const intro =
  "Manutenção não é gasto, é o que mantém sua produção de pé. Cuidamos de cada etapa — do diagnóstico à prevenção — para que sua máquina nunca pare na hora que você mais precisa dela.";

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    summary:
      "Avaliamos o equipamento por completo, identificando desgastes e riscos antes que virem problema.",
    details: [
      "Inspeção visual e técnica completa do equipamento",
      "Identificação de desgastes, vazamentos e folgas",
      "Relatório técnico com prioridades de intervenção",
    ],
  },
  {
    icon: Wrench,
    title: "Intervenção",
    summary:
      "Executamos a manutenção preventiva ou corretiva, incluindo solda e caldeiraria, com agilidade e segurança.",
    details: [
      "Manutenção preventiva e corretiva",
      "Serviços de solda e caldeiraria",
      "Reposição de peças e componentes",
      "Testes de funcionamento após o reparo",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Prevenção",
    summary:
      "Acompanhamos o equipamento para evitar paradas futuras e prolongar a vida útil da máquina.",
    details: [
      "Plano de manutenção preventiva contínuo",
      "Acompanhamento periódico do equipamento",
      "Recomendações para prolongar a vida útil",
    ],
  },
];

const videos = ["/manutencao-bg.mp4", "/manutencao-bg-2.mp4"];

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function ManutencaoService() {
  const router = useRouter();
  const { ref, inView } = useInViewOnce<HTMLElement>();
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [inView]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) video.play().catch(() => {});
      else video.pause();
    });
  }, [active, inView]);

  return (
    <section ref={ref} id="manutencao" className="relative overflow-hidden scroll-mt-24">
      {inView &&
        videos.map((src, index) => (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            loop
            muted
            playsInline
            autoPlay={index === 0}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/85 to-brand-darker/95" />

      <motion.div
        aria-hidden
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-heading text-brand-lime uppercase tracking-widest text-sm mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <SparkText text="Manutenção Industrial" />
          </h2>
          <Typewriter
            text={intro}
            speed={10}
            className="font-body text-white/90 text-lg leading-relaxed"
          />
        </div>

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isOpen = expanded === index;
            const isDimmed = expanded !== null && !isOpen;

            return (
              <motion.div
                key={step.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                animate={{
                  scale: isOpen ? 1.05 : isDimmed ? 0.95 : 1,
                  opacity: isDimmed ? 0.5 : 1,
                  boxShadow: isOpen
                    ? [
                        "0 0 20px rgba(139,209,70,0.3)",
                        "0 0 40px rgba(139,209,70,0.6)",
                        "0 0 20px rgba(139,209,70,0.3)",
                      ]
                    : "0 0 0px rgba(139,209,70,0)",
                }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 22 },
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                  boxShadow: { duration: 2, repeat: isOpen ? Infinity : 0, ease: "easeInOut" },
                }}
                style={{ zIndex: isOpen ? 20 : 1 }}
                onClick={() => setExpanded(isOpen ? null : index)}
                whileHover={{ y: isDimmed ? 0 : -4 }}
                className="relative text-center bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative z-10 mx-auto w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-lime flex items-center justify-center"
                >
                  <Icon className="text-brand-lime" size={28} />
                </motion.div>

                <motion.h3
                  layout="position"
                  className="font-heading text-xl font-semibold text-white mt-5"
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  layout="position"
                  className="font-body text-white/70 mt-2 text-sm leading-relaxed"
                >
                  {step.summary}
                </motion.p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      variants={listContainer}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ height: { duration: 0.3 } }}
                      className="mt-4 space-y-2 text-left overflow-hidden"
                    >
                      {step.details.map((detail) => (
                        <motion.li
                          key={detail}
                          variants={listItem}
                          className="flex items-start gap-2 text-white/80 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mt-1.5 shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <motion.p
                  layout="position"
                  className="mt-4 text-xs text-brand-lime/80 font-heading"
                >
                  {isOpen ? "Toque para fechar" : "Toque para saber mais"}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <SparkButton onClick={() => router.push("/contato")}>
            Solicitar manutenção
          </SparkButton>
        </div>
      </div>
    </section>
  );
}