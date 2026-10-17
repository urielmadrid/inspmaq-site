 "use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Truck, Wrench } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    number: "01",
    icon: Wrench,
    title: "Manutenção no ritmo da operação",
    text: "Atuação preventiva e corretiva para reduzir paradas e manter equipamentos prontos para o trabalho.",
    tag: "Manutenção",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Inspeção antes do problema",
    text: "Avaliação técnica para identificar condições que precisam de atenção antes de afetarem a operação.",
    tag: "Inspeção",
  },
  {
    number: "03",
    icon: Truck,
    title: "Movimentação de cargas",
    text: "Apoio com caminhão guindauto para demandas que exigem planejamento, mobilidade e segurança.",
    tag: "Guindauto",
  },
];

export default function Cases() {
  return (
    <section className="bg-brand-dark py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-lime">
            Onde entramos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">
            Serviço pensado para a rotina de quem precisa produzir.
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Alguns exemplos de como nossos serviços podem entrar no dia a dia
            de uma operação industrial ou portuária.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-brand-green/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-bold text-brand-lime">
                    {item.number}
                  </span>
                  <Icon size={24} className="text-brand-green" />
                </div>
                <span className="mt-8 inline-block rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-lime">
                  {item.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/contato"
            className="inline-flex rounded-full bg-brand-green px-6 py-3 font-heading font-bold text-white transition hover:bg-brand-lime hover:text-brand-dark"
          >
            Falar sobre minha operação
          </Link>
        </div>
      </div>
    </section>
  );
}
