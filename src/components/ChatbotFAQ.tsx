"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useAnimation, useReducedMotion } from "framer-motion";
import { ArrowLeft, ChevronRight, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5553981018934";
const WHATSAPP_MESSAGE =
  "Olá, equipe INSPMAQ! 👋 Estou navegando pelo site de vocês e tenho uma dúvida. Podem me ajudar?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

type Faq = {
  question: string;
  answer: string[];
  link?: { href: string; label: string };
};

// Respostas institucionais: sem preços, prazos ou parcerias que o site não declare.
const faqs: Faq[] = [
  {
    question: "Quais serviços a INSPMAQ presta?",
    answer: [
      "A INSPMAQ atua em manutenção industrial, inspeções técnicas, locação de caminhão guindauto (Munck) com operador e assistência técnica em tombadores, incluindo equipamentos da marca SAUR.",
    ],
    link: { href: "/servicos", label: "Ver todos os serviços" },
  },
  {
    question: "Como funcionam as inspeções técnicas?",
    answer: [
      "A inspeção verifica o estado do equipamento e da operação, com registro do que foi avaliado e do que pede correção.",
      "Como referência, trabalhamos com as normas NR-11, NR-12, NR-29 e NR-35.",
    ],
    link: { href: "/servicos#inspecoes", label: "Conhecer as inspeções" },
  },
  {
    question: "Vocês fazem locação de guindauto?",
    answer: [
      "Sim. A INSPMAQ disponibiliza caminhão guindauto (Munck) com operador para movimentação de cargas pesadas em ambientes industriais e portuários.",
      "Para saber sobre disponibilidade e condições, fale diretamente com a equipe.",
    ],
    link: { href: "/frota", label: "Ver a frota" },
  },
  {
    question: "O que é a assistência técnica em tombadores?",
    answer: [
      "É o cuidado com os pontos críticos do equipamento: plataforma e estrutura soldada, cilindros e sistema hidráulico, travas e dispositivos de segurança, fixações, cabos e parte elétrica.",
      "SAUR é marca de terceiros. A INSPMAQ é uma empresa independente e presta assistência técnica nesses equipamentos.",
    ],
    link: { href: "/servicos#saur", label: "Ver assistência SAUR" },
  },
  {
    question: "Onde a INSPMAQ atua?",
    answer: [
      "Nossa sede fica em Rio Grande, RS, e atendemos operações industriais e portuárias de Rio Grande e região. No setor industrial desde 2014.",
    ],
  },
  {
    question: "Como solicito um orçamento ou contato?",
    answer: [
      "Pelo formulário da página de contato, pelo e-mail contato@inspmaq.com.br ou pelo WhatsApp +55 (53) 98101-8934.",
    ],
    link: { href: "/contato", label: "Ir para a página de contato" },
  },
];

const talkOption = faqs.length + 1;

export default function ChatbotFAQ() {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [typed, setTyped] = useState("");
  const [typedError, setTypedError] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Treme a cada 5 segundos enquanto o chat está fechado
  useEffect(() => {
    if (open || reduceMotion) return;
    const id = window.setInterval(() => {
      controls.start({
        rotate: [0, -14, 12, -10, 8, -5, 3, 0],
        x: [0, -3, 3, -2, 2, -1, 1, 0],
        transition: { duration: 0.7, ease: "easeInOut" },
      });
    }, 5000);
    return () => window.clearInterval(id);
  }, [open, reduceMotion, controls]);

  // Esc fecha o chat e devolve o foco ao botão
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const backToMenu = () => {
    setSelected(null);
    setTyped("");
    setTypedError(false);
    panelRef.current?.scrollTo({ top: 0 });
  };

  const choose = (n: number) => {
    setTypedError(false);
    setTyped("");
    if (n === talkOption) {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      return;
    }
    setSelected(n);
    panelRef.current?.scrollTo({ top: 0 });
  };

  const submitTyped = (e: React.FormEvent) => {
    e.preventDefault();
    const n = Number(typed.trim());
    if (Number.isInteger(n) && n >= 1 && n <= talkOption) {
      choose(n);
    } else {
      setTypedError(true);
    }
  };

  const current = selected !== null ? faqs[selected - 1] : null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Dúvidas frequentes"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-[min(22rem,calc(100vw-3rem))] origin-bottom-right overflow-hidden rounded-2xl border border-white/10 bg-brand-darker shadow-2xl shadow-black/60"
          >
            <div className="brand-rule-thin" />
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-brand-panel px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-darker ring-1 ring-brand-lime/40">
                  <Image src="/inspmaq-mark.png" alt="" width={22} height={22} />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-white">Dúvidas Frequentes</p>
                  <p className="font-mono text-[10px] uppercase tracking-[.16em] text-brand-lime">INSPMAQ</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                aria-label="Fechar dúvidas frequentes"
                className="rounded-full p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={panelRef} className="max-h-[min(26rem,60vh)] overflow-y-auto px-4 py-4">
              {current === null ? (
                <>
                  <div className="rounded-2xl rounded-tl-sm bg-brand-panel px-4 py-3 text-sm leading-6 text-brand-text">
                    Olá! 👋 Sou o assistente da INSPMAQ. Escolha o número da sua dúvida:
                  </div>
                  <ol className="mt-3 space-y-2">
                    {faqs.map((faq, i) => (
                      <li key={faq.question}>
                        <button
                          type="button"
                          onClick={() => choose(i + 1)}
                          className="group flex w-full items-center gap-3 rounded-xl border border-white/10 px-3 py-2.5 text-left text-sm text-white transition hover:border-brand-lime/60 hover:bg-white/[.04]"
                        >
                          <span className="font-mono text-xs text-brand-lime">{String(i + 1).padStart(2, "0")}</span>
                          <span className="flex-1">{faq.question}</span>
                          <ChevronRight size={16} className="text-white/30 transition group-hover:translate-x-0.5 group-hover:text-brand-lime" />
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        type="button"
                        onClick={() => choose(talkOption)}
                        className="group flex w-full items-center gap-3 rounded-xl border border-brand-green/60 bg-brand-green/15 px-3 py-2.5 text-left text-sm font-semibold text-white transition hover:bg-brand-green/30"
                      >
                        <span className="font-mono text-xs text-brand-lime">{String(talkOption).padStart(2, "0")}</span>
                        <span className="flex-1">Falar com a INSPMAQ</span>
                        <FaWhatsapp size={18} className="text-brand-lime" />
                      </button>
                    </li>
                  </ol>
                </>
              ) : (
                <div>
                  <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-green/25 px-4 py-2.5 text-sm text-white">
                    <span className="mr-2 font-mono text-xs text-brand-lime">{String(selected).padStart(2, "0")}</span>
                    {current.question}
                  </p>
                  <div className="mt-3 space-y-2 rounded-2xl rounded-tl-sm bg-brand-panel px-4 py-3 text-sm leading-6 text-brand-text">
                    {current.answer.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {current.link && (
                      <Link
                        href={current.link.href}
                        onClick={() => setOpen(false)}
                        className="inline-block border-b border-brand-lime pb-0.5 text-white transition hover:text-brand-lime"
                      >
                        {current.link.label}
                      </Link>
                    )}
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      <FaWhatsapp size={18} />
                      Falar com a INSPMAQ
                    </a>
                    <button
                      type="button"
                      onClick={backToMenu}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm text-white transition hover:border-white/40"
                    >
                      <ArrowLeft size={16} />
                      Voltar ao menu
                    </button>
                  </div>
                </div>
              )}
            </div>

            {current === null && (
              <form onSubmit={submitTyped} className="border-t border-white/10 bg-brand-panel px-4 py-3">
                <label htmlFor="faq-number" className="sr-only">
                  Digite o número da pergunta
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="faq-number"
                    inputMode="numeric"
                    autoComplete="off"
                    value={typed}
                    onChange={(e) => {
                      setTyped(e.target.value.replace(/\D/g, "").slice(0, 2));
                      setTypedError(false);
                    }}
                    placeholder={`Digite um número de 1 a ${talkOption}`}
                    className="min-w-0 flex-1 rounded-lg border border-white/15 bg-brand-darker px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand-lime focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-brand-lime px-4 py-2 text-sm font-bold text-brand-darker transition hover:brightness-110"
                  >
                    Enviar
                  </button>
                </div>
                {typedError && (
                  <p role="alert" className="mt-2 text-xs text-brand-gold">
                    Escolha um número entre 1 e {talkOption}.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="group relative">
        {/* Rótulo ao passar o mouse ou focar */}
        {!open && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-lg border-l-4 border-brand-lime bg-brand-darker px-4 py-2 font-heading text-sm font-bold text-brand-lime opacity-0 shadow-xl shadow-black/50 ring-1 ring-white/10 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
          >
            Dúvidas Frequentes
          </span>
        )}
        <motion.button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar dúvidas frequentes" : "Abrir dúvidas frequentes"}
          aria-expanded={open}
          initial={false}
          animate={controls}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-darker shadow-xl shadow-black/50 ring-2 ring-brand-lime/70 transition-shadow hover:ring-brand-lime focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-lime"
        >
          <Image src="/inspmaq-mark.png" alt="" width={38} height={38} />
        </motion.button>
      </div>
    </div>
  );
}