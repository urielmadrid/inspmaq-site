"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

const navContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-brand-darker/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.div
  initial={{ opacity: 0, scale: 0.6 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.2 }}
>
  <Link
    href="/"
    className="flex items-center gap-2 hover:scale-105 transition-transform"
  >
    <Image
  src="/inspmaq-icon.png"
  alt="Ícone INSPMAQ"
  width={40}
  height={40}
  className="h-8 w-auto -translate-y-0.5"
  priority
/>
    <span className="font-heading text-2xl font-bold text-white">
      INSP<span className="text-brand-lime">MAQ</span>
    </span>
  </Link>
</motion.div>

        <motion.nav
  variants={navContainer}
  initial="hidden"
  animate="visible"
  aria-label="Navegação principal"
  className="hidden md:flex items-center gap-8 font-body text-white/90"
>
  {navLinks.map((link) => (
    <motion.div key={link.href} variants={navItem} whileHover={{ y: -2 }}>
      <Link href={link.href} className="relative group py-1 inline-block">
        {link.label}
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-brand-lime scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </Link>
    </motion.div>
  ))}
</motion.nav>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.1 }}
  className="hidden md:block"
>
  <Link
    href="/contato"
    className="bg-brand-green hover:bg-brand-lime hover:text-brand-dark hover:scale-105 transition-all px-5 py-2 rounded-full font-heading font-semibold text-white inline-block"
  >
    Entre em contato
  </Link>
</motion.div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navegação principal"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 px-6 pb-6 font-body text-white/90 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-lime transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="bg-brand-green text-center px-5 py-2 rounded-full font-heading font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Entre em contato
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}