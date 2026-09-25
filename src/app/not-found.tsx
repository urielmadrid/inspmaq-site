import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-brand-dark">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-20 text-center">
        <div className="mx-auto">
          <p className="font-heading text-7xl font-extrabold text-brand-lime md:text-9xl">
            404
          </p>
          <h1 className="mt-5 font-heading text-3xl font-bold md:text-5xl">
            Essa página não está aqui.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            O endereço pode ter mudado ou a página não existe mais. Você pode
            voltar para o início ou falar direto com a INSPMAQ.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-heading font-bold text-white transition hover:bg-brand-lime hover:text-brand-dark"
            >
              <Home size={18} />
              Voltar ao início
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-heading font-bold text-white transition hover:border-brand-lime hover:text-brand-lime"
            >
              <ArrowLeft size={18} />
              Ver serviços
            </Link>
            <a
              href="https://wa.me/5553981018934"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-heading font-bold text-white transition hover:border-brand-lime hover:text-brand-lime"
            >
              <MessageCircle size={18} />
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
