"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import MunckText from "@/components/MunckText";
import MunckButton from "@/components/MunckButton";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const intro =
  "Quando a carga é grande demais pra esperar, a gente chega e resolve. Nossos caminhões guindauto unem força e agilidade pra mover o que sua operação precisa, sem parar o cronograma.";

const features = [
  {
    title: "Capacidade de Carga",
    summary: "Equipamentos preparados para mover desde cargas leves até pesos industriais.",
    detail:
      "Guindautos com diferentes capacidades de içamento, dimensionados conforme o peso e o alcance necessário para cada operação.",
  },
  {
    title: "Agilidade",
    summary: "Chegamos rápido na obra ou operação, sem depender de um guindaste separado.",
    detail:
      "O próprio caminhão carrega, transporta e movimenta a carga — reduzindo tempo de espera, custo logístico e paradas na operação.",
  },
  {
    title: "Versatilidade",
    summary: "Atendemos obras, indústrias e operações portuárias, com operador qualificado incluso.",
    detail:
      "Equipe treinada e apta a operar em diferentes cenários, seguindo as normas de segurança exigidas em cada tipo de operação.",
  },
];

const videos = ["/munck-bg.mp4", "/munck-bg-2.mp4"];

export default function GuindautoService() {
  const { ref, inView } = useInViewOnce<HTMLElement>();
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
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
    <section ref={ref} id="guindauto" className="relative overflow-hidden scroll-mt-24">
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
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-heading text-brand-lime uppercase tracking-widest text-sm mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            <MunckText text="Locação de Caminhão Guindauto" />
          </h2>
          <Typewriter
            text={intro}
            speed={10}
            className="font-body text-white/90 text-lg leading-relaxed"
          />
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-14">
          {features.map((feature, index) => {
            const isHovered = hovered === index;
            return (
              <div
                key={feature.title}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col items-center"
              >
                <div className="w-[2px] h-10 bg-white/30" />
                <svg width="20" height="16" viewBox="0 0 20 16" className="text-white/50 -mt-1">
                  <path
                    d="M2 2 V8 a6 6 0 0 0 12 0 V4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                <motion.div
                  animate={
                    isHovered
                      ? { y: -6, rotate: 0 }
                      : { y: 0, rotate: [0, -3, 3, -2, 2, 0] }
                  }
                  transition={
                    isHovered
                      ? { duration: 0.3 }
                      : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }
                  }
                  style={{ transformOrigin: "top center" }}
                  className={`mt-1 w-full bg-white/5 border rounded-2xl p-6 text-center transition-colors ${
                    isHovered
                      ? "border-brand-lime shadow-[0_0_30px_rgba(139,209,70,0.4)]"
                      : "border-white/10"
                  }`}
                >
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="font-body text-white/70 mt-2 text-sm leading-relaxed">
                    {feature.summary}
                  </p>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-body text-brand-lime/90 text-sm mt-3 leading-relaxed overflow-hidden"
                      >
                        {feature.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <MunckButton href="/contato">Solicitar caminhão guindauto</MunckButton>
        </div>
      </div>
    </section>
  );
}