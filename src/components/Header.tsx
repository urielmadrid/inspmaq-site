"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/#empresa", label: "A empresa" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-brand-darker/85 backdrop-blur-md">
      <div aria-hidden="true" className="brand-rule-thin" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)} aria-label="INSPMAQ - página inicial">
          <Image src="/inspmaq-logo-claro-sem-slogan.png" alt="INSPMAQ" width={2024} height={392} className="h-9 w-auto md:h-10" priority />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`border-b py-1 text-sm transition-colors ${
                isActive(link.href)
                  ? "border-brand-lime text-white"
                  : "border-transparent text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação principal"
          className="flex flex-col border-t border-white/10 px-6 pb-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/5 py-3.5 text-white/85 transition-colors hover:text-brand-lime"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
