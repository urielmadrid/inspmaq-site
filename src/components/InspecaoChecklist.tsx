"use client";

import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const items = [
  { code: "01", label: "Estrutura, solda e caldeiraria" },
  { code: "02", label: "Sistema elétrico e hidráulico" },
  { code: "03", label: "Cabos, fixações e dispositivos de segurança" },
  { code: "04", label: "Referências: NR-11, NR-29 e NR-35" },
  { code: "05", label: "Documentação técnica e laudo da inspeção" },
];

/**
 * Ficha de inspeção animada, como a prancheta do inspetor no vídeo ao lado: os itens
 * são conferidos um a um quando a ficha entra na tela. Itens baseados nos pontos
 * verificados descritos na página de serviços.
 */
export default function InspecaoChecklist() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>("-80px");

  return (
    <div ref={ref} className="relative mt-12 overflow-hidden border border-white/10 bg-brand-panel/70">
      <div aria-hidden="true" className="brand-rule-thin" />
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-7">
        <div>
          <p className="eyebrow">Ficha de inspeção</p>
          <p className="mt-1 text-sm text-brand-muted">Pontos verificados em cada equipamento</p>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-[.16em] text-white/45 sm:block">INSPMAQ · Qualidade</span>
      </div>

      <ol className="divide-y divide-white/10">
        {items.map((item, i) => (
          <motion.li
            key={item.code}
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25 + i * 0.35 }}
            className="flex items-center gap-4 px-5 py-4 md:px-7"
          >
            <span className="font-mono text-xs text-brand-lime">{item.code}</span>
            <span className="flex-1 text-sm text-brand-text md:text-base">{item.label}</span>
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" className="shrink-0">
              <circle cx="12" cy="12" r="10.5" fill="none" stroke="rgba(243,244,240,.18)" strokeWidth="1.5" />
              <motion.path
                d="M6.5 12.5l4 4 7-8.5"
                fill="none"
                stroke="#4CC97A"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.35 }}
              />
            </svg>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
