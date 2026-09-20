import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white/80 font-body">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="font-heading text-2xl font-bold text-white">
            INSP<span className="text-brand-lime">MAQ</span>
          </span>
          <p className="mt-3 text-sm">
            Manutenção, inspeção técnica e locação de caminhão guindauto para
            operações industriais e portuárias.
          </p>
          <div className="flex gap-3 mt-4">

  
    <a href="https://www.instagram.com/inspmaq"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-brand-lime"
  >
    <FaInstagram size={20} />
  </a>
  
    <a href="https://wa.me/5553981018934"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="hover:text-brand-lime"
  >
    <FaWhatsapp size={20} />
  </a>
</div>
          </div>
      

        <div>
          <h3 className="font-heading text-white font-semibold mb-3">Links rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand-lime">Início</Link></li>
            <li><Link href="/servicos" className="hover:text-brand-lime">Serviços</Link></li>
            <li><Link href="/contato" className="hover:text-brand-lime">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-white font-semibold mb-3">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li>Manutenção Industrial</li>
            <li>Inspeções Técnicas</li>
            <li>Locação de Caminhão Guindauto</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-white font-semibold mb-3">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li>Rio Grande - RS</li>
            <li>+55 (53) 98101-8934</li>
            <li>contato@inspmaq.com.br</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} INSPMAQ. Todos os direitos reservados.
      </div>
    </footer>
  );
}