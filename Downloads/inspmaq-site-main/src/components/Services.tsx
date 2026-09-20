"use client";

import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Preventiva e corretiva, com agilidade e segurança para sua operação nunca parar.",
    href: "/servicos#manutencao",
  },
  {
    icon: ClipboardCheck,
    title: "Inspeções Técnicas",
    description:
      "Conformidade com NR-35 e NR-29, identificando riscos antes que virem problema.",
    href: "/servicos#inspecoes",
  },
  {
    icon: Truck,
    title: "Locação de Caminhão Guindauto",
    description:
      "Movimentação e transporte de cargas pesadas com agilidade e eficiência.",
    href: "/servicos#guindauto",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section className="bg-brand-mist">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center"
        >
          Nossos Serviços
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -8, boxShadow: "0 0 40px rgba(63,163,77,0.35)" }}
                className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center"
                >
                  <Icon className="text-brand-green" size={28} />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-brand-dark mt-5">
                  {service.title}
                </h3>
                <p className="font-body text-brand-dark/70 mt-3 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="group mt-6 inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-lime hover:text-brand-dark hover:shadow-[0_0_20px_rgba(139,209,70,0.6)] transition-all px-6 py-2.5 rounded-full font-heading font-semibold"
                >
                  Saiba mais
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/servicos"
            className="group inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-green text-white transition-all px-8 py-4 rounded-full font-heading font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ver todos os serviços
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}