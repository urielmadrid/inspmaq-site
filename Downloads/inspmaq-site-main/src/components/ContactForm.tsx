"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefone: (form.elements.namedItem("telefone") as HTMLInputElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4"
    >
      <div>
        <label className="font-body text-sm text-white/60">Nome</label>
        <input
          type="text"
          name="nome"
          required
          className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label className="font-body text-sm text-white/60">E-mail</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label className="font-body text-sm text-white/60">Telefone</label>
        <input
          type="tel"
          name="telefone"
          className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label className="font-body text-sm text-white/60">Mensagem</label>
        <textarea
          name="mensagem"
          rows={4}
          required
          className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
          placeholder="Como podemos ajudar?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-green hover:bg-brand-lime hover:text-brand-dark transition-colors text-white py-3 rounded-full font-heading font-semibold disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "success" && (
        <p className="text-brand-lime text-sm text-center">Mensagem enviada com sucesso!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Erro ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}