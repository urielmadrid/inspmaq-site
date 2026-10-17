"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import SparkText from "@/components/SparkText";
import SparkButton from "@/components/SparkButton";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const summary =
  "A manutenção industrial é essencial para garantir a operação segura e contínua de máquinas e equipamentos pesados. Realizamos manutenção preventiva e corretiva, incluindo serviços de solda e caldeiraria — evitando paradas inesperadas que custam caro para a sua operação.";

const videos = ["/manutencao-bg.mp4", "/manutencao-bg-2.mp4"];

export default function MaintenanceSummary() {
  const { ref, inView } = useInViewOnce<HTMLElement>();
  const [active, setActive] = useState(0);
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
    <section ref={ref} className="relative overflow-hidden">
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
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-heading text-brand-lime uppercase tracking-widest text-sm mb-3">
          Nossos Serviços
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          <SparkText text="Manutenção Industrial" />
        </h2>

        <Typewriter
          text={summary}
          speed={10}
          className="font-body text-white/90 text-lg leading-relaxed"
        />

        <div className="mt-10 flex justify-center">
          <SparkButton>Ver todos os serviços</SparkButton>
        </div>
      </div>
    </section>
  );
}