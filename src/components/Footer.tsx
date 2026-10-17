import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const linkClass = "text-white/70 transition-colors hover:text-brand-lime";

export default function Footer() {
  return (
    <footer className="bg-brand-darker/80 font-body text-white/70">
      <div aria-hidden="true" className="brand-rule" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Link href="/" aria-label="INSPMAQ - página inicial" className="inline-block">
            <Image src="/inspmaq-logo-claro.png" alt="INSPMAQ - A solução em fabricação, manutenção e inspeção de qualidade." width={2024} height={496} className="h-16 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6">
            Manutenção industrial, inspeções técnicas, assistência técnica SAUR e locação de caminhão guindauto para
            operações industriais e portuárias. Sede em Rio Grande, RS, no setor industrial desde 2014.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="https://www.instagram.com/inspmaq" target="_blank" rel="noopener noreferrer" aria-label="Instagram da INSPMAQ" className={linkClass}>
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/5553981018934" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da INSPMAQ" className={linkClass}>
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow mb-4">Navegue</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className={linkClass}>Início</Link></li>
            <li><Link href="/servicos" className={linkClass}>Serviços</Link></li>
            <li><Link href="/#empresa" className={linkClass}>A empresa</Link></li>
            <li><Link href="/contato" className={linkClass}>Contato</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow mb-4">Serviços</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/servicos#manutencao" className={linkClass}>Manutenção industrial</Link></li>
            <li><Link href="/servicos#inspecoes" className={linkClass}>Inspeções técnicas</Link></li>
            <li><Link href="/servicos#guindauto" className={linkClass}>Locação de guindauto</Link></li>
            <li><Link href="/servicos#saur" className={linkClass}>Assistência técnica SAUR</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow mb-4">Institucional</h3>
          <ul className="space-y-2.5 text-sm">
            <li>Rio Grande - RS e região</li>
            <li><a href="mailto:contato@inspmaq.com.br" className={linkClass}>contato@inspmaq.com.br</a></li>
            <li><a href="https://wa.me/5553981018934" target="_blank" rel="noopener noreferrer" className={linkClass}>+55 (53) 98101-8934</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <span>© {new Date().getFullYear()} INSPMAQ. Todos os direitos reservados.</span>
          <Link href="/politica-de-privacidade" className="transition-colors hover:text-white">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
