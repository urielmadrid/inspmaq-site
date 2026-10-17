import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const infoItems = [
  { icon: MapPin, label: "Localização", value: "Rio Grande - RS e região" },
  { icon: Phone, label: "WhatsApp", value: "+55 (53) 98101-8934", href: "https://wa.me/5553981018934" },
  { icon: Mail, label: "E-mail", value: "contato@inspmaq.com.br", href: "mailto:contato@inspmaq.com.br" },
];

export default function ContatoContent() {
  return (
    <section className="hairline-t py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Canais</p>
          <ul className="hairline-t mt-5">
            {infoItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <Icon aria-hidden="true" size={20} className="mt-1 shrink-0 text-brand-lime" />
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[.16em] text-white/55">{label}</span>
                    <span className="mt-1 block text-lg text-white">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label} className="hairline-b">
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 py-5 transition-colors hover:bg-white/[.03]">
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 py-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">Mensagem</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
