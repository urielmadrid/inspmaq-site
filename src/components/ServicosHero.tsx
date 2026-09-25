"use client";

import { motion } from "framer-motion";
import { Wrench, Search, Truck, ChevronDown } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const icons = [Wrench, Search, Truck];

export default function ServicosHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-green animate-gradient-slow text-white">
      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">
        <div className="flex justify-center gap-6 mb-8">
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 + i * 0.15 }}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
            >
              <Icon className="text-brand-lime" size={24} />
            </motion.div>
          ))}
        </div>

        <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
          <AnimatedText text="Nossos" />
          <br />
          <AnimatedText text="Serviços" className="text-brand-lime" delay={0.4} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-body text-white/90 text-lg mt-6 max-w-xl mx-auto"
        >
          Soluções técnicas para operações industriais e portuárias, do
          início ao fim — manutenção, inspeção e locação de equipamentos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-14 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="font-body text-xs uppercase tracking-widest">
            Role para explorar
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}