"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="relative bg-brand-green overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-16 text-center text-white">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Pronto para proteger sua operação?
        </h2>
        <p className="font-body text-white/90 mt-4 max-w-xl mx-auto">
          Fale com a nossa equipe e descubra a solução ideal para sua
          empresa — manutenção, inspeção ou locação de caminhão guindauto.
        </p>

        <motion.a
          href="https://wa.me/5553981018934"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.5)" }}
          className="mt-8 inline-flex items-center gap-3 bg-white text-[#25D366] px-8 py-4 rounded-full font-heading font-semibold text-lg shadow-lg transition-shadow"
        >
          <FaWhatsapp size={24} />
          Falar no WhatsApp
        </motion.a>
      </div>
    </section>
  );
}