import type { Metadata } from "next";
import ContatoHero from "@/components/ContatoHero";
import ContatoContent from "@/components/ContatoContent";

export const metadata: Metadata = {
  title: "Contato | INSPMAQ",
  description:
    "Fale com a INSPMAQ pelo WhatsApp, e-mail ou formulário para orçamentos e dúvidas.",
};

export default function ContatoPage() {
  return (
    <main>
      <ContatoHero />
      <ContatoContent />
    </main>
  );
}