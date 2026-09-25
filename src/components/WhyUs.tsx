"use client";

import { motion } from "framer-motion";
import { Users, Zap, ShieldCheck, Layers } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Equipe Qualificada",
    description: "Profissionais capacitados e comprometidos com a segurança em cada serviço.",
  },
  {
    icon: Zap,
    title: "Atendimento Ágil",
    description: "Resposta rápida e sem burocracia, porque sua operação não pode esperar.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade Total",
    description: "Serviços alinhados às normas técnicas e de segurança vigentes, como NR-35 e NR-29.",
  },
  {
    icon: Layers,
    title: "Soluções Completas",
    description: "Manutenção, inspeção e locação de equipamentos em um só lugar, sem precisar de vários fornecedores.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center"
        >
          Por que a <span className="text-brand-green">INSPMAQ</span>?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto">
                  <Icon className="text-brand-green" size={26} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-dark mt-4">
                  {reason.title}
                </h3>
                <p className="font-body text-brand-dark/80 text-sm mt-2 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}