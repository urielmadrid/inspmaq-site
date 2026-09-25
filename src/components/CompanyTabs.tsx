"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

const topics = [
  {
    key: "historia",
    label: "História",
    content:
      "Desde 2014 atuando no setor industrial, a INSPMAQ é uma empresa genuinamente rio-grandina que, em 2022, se consolidou como referência em Rio Grande e em toda a região Sul do país. Com sede em Rio Grande/RS, construímos uma trajetória sólida, baseada na qualidade, segurança e responsabilidade — sempre entregando soluções confiáveis e eficientes para a indústria sul-brasileira.",
  },
  {
    key: "missao",
    label: "Missão",
    content:
      "Fornecer soluções industriais seguras e eficientes, garantindo qualidade, confiabilidade e satisfação aos nossos clientes.",
  },
  {
    key: "visao",
    label: "Visão",
    content:
      "Ser referência no mercado industrial, reconhecida pela excelência técnica, compromisso com a segurança e alto padrão de qualidade nos serviços prestados.",
  },
  {
    key: "valores",
    label: "Valores",
    content: [
      "Segurança em primeiro lugar",
      "Qualidade e responsabilidade técnica",
      "Compromisso com o cliente",
      "Ética e transparência",
      "Melhoria contínua",
    ],
  },
];

export default function CompanyTabs() {
  const [active, setActive] = useState(topics[0].key);
  const current = topics.find((t) => t.key === active)!;

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/porto-rio-grande.webp"
        alt="Operação portuária em Rio Grande"
        fill
        className="object-cover"
        sizes="100vw"
        quality={70}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-darker/95" />

      <motion.div
        aria-hidden
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 min-h-[520px]">
        <div className="flex flex-row md:flex-col flex-wrap justify-center gap-3 md:gap-2 mb-12 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
          {topics.map((topic) => {
            const isActive = active === topic.key;
            return (
              <motion.button
                key={topic.key}
                onMouseEnter={() => setActive(topic.key)}
                onClick={() => setActive(topic.key)}
                animate={{
                  x: isActive ? -12 : 0,
                  scale: isActive ? 0.75 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`text-left pl-5 pr-4 py-3 border-l-4 transition-colors font-heading text-lg md:text-xl font-semibold origin-left ${
                  isActive
                    ? "border-brand-lime text-brand-lime"
                    : "border-transparent text-white/80 hover:text-white hover:border-white/30"
                }`}
              >
                {topic.label}
              </motion.button>
            );
          })}
        </div>

        <div className="relative flex items-center justify-center min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.key}-glow`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute w-72 h-72 rounded-full bg-brand-lime/30 blur-3xl pointer-events-none"
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, x: 220, scale: 0.75 }}
animate={{ opacity: 1, x: 0, scale: 1 }}
exit={{ opacity: 0, x: -220, scale: 0.75 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative max-w-xl text-center"
            >
              <h3 className="font-heading text-3xl font-bold text-brand-lime mb-5 animate-text-glow">
                {current.label}
              </h3>
              {Array.isArray(current.content) ? (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                  className="space-y-3 inline-block text-left"
                >
                  {current.content.map((valor) => (
                    <motion.li
                      key={valor}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-center gap-3 font-body text-white/85 text-lg"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-lime" />
                      {valor}
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <Typewriter
  text={current.content}
  speed={10}
  className="font-body text-white/90 text-xl leading-relaxed"
/>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}