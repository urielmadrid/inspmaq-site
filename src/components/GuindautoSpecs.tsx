"use client";
import { motion } from "framer-motion";
import { ClipboardCheck, Ruler, ShieldCheck, Truck } from "lucide-react";
const notes = [
  { icon: Truck, title: "Equipamento", text: "Caminhão guindauto para operações de movimentação e transporte de cargas." },
  { icon: ShieldCheck, title: "Segurança", text: "A operação deve ser dimensionada conforme as condições e requisitos de cada serviço." },
  { icon: Ruler, title: "Dimensionamento", text: "Capacidade, alcance e configuração são definidos de acordo com a demanda informada." },
  { icon: ClipboardCheck, title: "Consulta técnica", text: "Fale com a equipe para confirmar a configuração adequada para sua operação." },
];
export default function GuindautoSpecs() {
  return <section className="bg-brand-mist"><div className="max-w-5xl mx-auto px-6 py-20">
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }} className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center">Características do Equipamento</motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">{notes.map((note,index)=>{const Icon=note.icon; return <motion.div key={note.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.5}} transition={{duration:0.5,delay:index*0.1}} className="bg-white rounded-2xl p-6 text-center shadow-sm">
      <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto"><Icon className="text-brand-green" size={22}/></div>
      <p className="font-heading text-lg font-bold text-brand-dark mt-4">{note.title}</p>
      <p className="font-body text-brand-dark/80 text-sm leading-relaxed mt-2">{note.text}</p>
    </motion.div>})}</div>
  </div></section>;
}
