"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "+10", label: "Anos de mercado" },
  { value: "100+", label: "Serviços realizados" },
  { value: "100%", label: "De qualificação dos serviços realizados" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.75 },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    textShadow: "0px 0px 0px rgba(139, 209, 70, 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    textShadow: "0px 0px 14px rgba(139, 209, 70, 0.65)",
    transition: { duration: 0.6 },
  },
};

export default function Stats() {
  return (
    <section className="bg-brand-mist">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <motion.p
              variants={item}
              className="font-heading text-5xl font-bold text-brand-green"
            >
              {stat.value}
            </motion.p>
            <p className="font-body text-brand-dark/70 mt-2 uppercase text-sm tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}