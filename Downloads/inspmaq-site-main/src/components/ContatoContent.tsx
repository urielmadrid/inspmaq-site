"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const infoItems = [
  { icon: MapPin, label: "Localização", value: "Rio Grande - RS" },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (53) 98101-8934",
    href: "https://wa.me/5553981018934",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@inspmaq.com.br",
    href: "mailto:contato@inspmaq.com.br",
  },
];

export default function ContatoContent() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-darker">
      <motion.div
        aria-hidden
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-lime/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-lime/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            const card = (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 6, boxShadow: "0 0 30px rgba(139,209,70,0.3)" }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-brand-lime/10 flex items-center justify-center shrink-0">
                  <Icon className="text-brand-lime" size={22} />
                </div>
                <div className="text-left">
                  <p className="font-heading text-xs uppercase tracking-widest text-brand-lime/80">
                    {item.label}
                  </p>
                  <p className="font-body text-white text-lg mt-1">{item.value}</p>
                </div>
              </motion.div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                {card}
              </a>
            ) : (
              <div key={item.label}>{card}</div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}