 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "inspmaq-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    const frame = window.requestAnimationFrame(() => setVisible(!consent));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);

    if (value === "accepted") {
      window.dispatchEvent(new Event("inspmaq-analytics-accepted"));
    }
  }

  if (visible !== true) return null;

  return (
    <aside
      aria-label="Preferências de cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-brand-darker/98 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-heading text-lg font-bold text-white">
            Sua privacidade importa
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-white/80">
            Usamos cookies necessários para o funcionamento do site e, se você
            permitir, cookies de análise para entender como as páginas são
            utilizadas. Você pode aceitar ou recusar a análise.
            <Link
              href="/politica-de-privacidade"
              className="ml-1 text-brand-lime underline underline-offset-2"
            >
              Saiba mais.
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            onClick={() => choose("rejected")}
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/50"
          >
            Recusar análise
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-lime hover:text-brand-dark"
          >
            Aceitar
          </button>
        </div>
      </div>
    </aside>
  );
}
