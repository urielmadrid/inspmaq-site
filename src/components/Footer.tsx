import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white/80 font-body">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <Link href="/" className="font-heading text-2xl font-bold text-white">
            INSP<span className="text-brand-lime">MAQ</span>
          </Link>
          <p className="mt-3 text-sm leading-6">
            Manutenção, inspeção técnica e locação de caminhão guindauto para
            operações industriais e portuárias.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/inspmaq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da INSPMAQ"
              className="transition hover:text-brand-lime"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/5553981018934"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da INSPMAQ"
              className="transition hover:text-brand-lime"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading mb-3 font-semibold text-white">
            Navegue
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand-lime">Início</Link></li>
            <li><Link href="/servicos" className="hover:text-brand-lime">Serviços</Link></li>
            <li><Link href="/contato" className="hover:text-brand-lime">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading mb-3 font-semibold text-white">
            Serviços
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/servicos#manutencao" className="hover:text-brand-lime">Manutenção Industrial</Link></li>
            <li><Link href="/servicos#inspecoes" className="hover:text-brand-lime">Inspeções Técnicas</Link></li>
            <li><Link href="/servicos#guindauto" className="hover:text-brand-lime">Locação de Guindauto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading mb-3 font-semibold text-white">
            Vamos conversar
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Rio Grande - RS e região</li>
            <li>+55 (53) 98101-8934</li>
            <li>contato@inspmaq.com.br</li>
          </ul>
          <Link
            href="/contato"
            className="mt-4 inline-block rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-lime hover:text-brand-dark"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        <div className="flex flex-col items-center justify-center gap-2 px-6 sm:flex-row sm:gap-4">
          <span>© {new Date().getFullYear()} INSPMAQ. Todos os direitos reservados.</span>
          <span className="hidden sm:inline">•</span>
          <Link
            href="/politica-de-privacidade"
            className="transition hover:text-white"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
