"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-dark to-brand-green animate-gradient-slow text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
  <AnimatedText text="Soluções completas para" />
  <br />
  <span className="relative inline-block">
    <AnimatedText
      text="Operações Industriais e Portuárias"
      className="text-brand-lime"
      delay={0.6}
    />
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.6, delay: 1.7 }}
      className="absolute left-0 -bottom-2 h-1 bg-brand-lime rounded-full"
    />
  </span>
</h1>

        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 2.3 }}
  className="font-body text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto"
>
  Protegemos sua empresa contra acidentes, multas e paralisações
  através de inspeções técnicas, manutenção industrial e locação de
  caminhão guindauto.
</motion.p>

        <motion.div
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 10, delay: 2.9 }}
  className="mt-10"
>
  <Link
    href="/contato"
    className="group inline-flex items-center gap-2 bg-brand-lime text-brand-dark hover:bg-white transition-all duration-300 px-8 py-4 rounded-full font-heading font-semibold text-lg shadow-lg shadow-brand-lime/30 hover:shadow-xl hover:scale-105"
  >
    Entre em contato
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
  </Link>
</motion.div>
      </div>
    </section>
  );
}