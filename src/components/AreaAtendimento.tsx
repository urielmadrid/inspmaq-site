"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function AreaAtendimento() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="w-14 h-14 rounded-full bg-brand-lime/10 flex items-center justify-center mx-auto mb-5"
        >
          <MapPin className="text-brand-lime" size={26} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-2xl md:text-3xl font-bold"
        >
          Atendemos Rio Grande - RS e região
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-white/80 mt-4 max-w-xl mx-auto"
        >
          Com sede em Rio Grande, atendemos operações industriais e
          portuárias em toda a região — com agilidade para chegar onde sua
          empresa precisa.
        </motion.p>
      </div>
    </section>
  );
}