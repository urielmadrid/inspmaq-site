"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
          Vamos falar da sua operação?
        </h2>
        <p className="font-body text-white/90 mt-4 max-w-xl mx-auto">
          Conte o que sua operação precisa. A gente entende a demanda e indica o caminho mais adequado.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center bg-white text-brand-dark hover:bg-brand-lime transition-colors px-8 py-4 rounded-full font-heading font-semibold text-lg shadow-lg"
          >
            Pedir um orçamento
          </Link>

          <motion.a
            href="https://wa.me/5553981018934"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.5)" }}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-heading font-semibold text-lg shadow-lg transition-shadow"
          >
            <FaWhatsapp size={24} />
            Falar no WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}