"use client";

import { useState } from "react";

const serviceOptions = [
  "Manutenção Industrial",
  "Inspeção Técnica",
  "Locação de Caminhão Guindauto",
  "Outro",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefone: (form.elements.namedItem("telefone") as HTMLInputElement).value,
      servico: (form.elements.namedItem("servico") as HTMLSelectElement).value,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="font-body text-sm text-white/80">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            autoComplete="name"
            required
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="font-body text-sm text-white/80">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            autoComplete="organization"
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="font-body text-sm text-white/80">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="font-body text-sm text-white/80">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            autoComplete="tel"
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="servico" className="font-body text-sm text-white/80">Serviço de interesse</label>
        <select
          id="servico"
            name="servico"
          required
          defaultValue=""
          className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white focus:outline-none focus:border-brand-lime"
        >
          <option value="" disabled className="bg-brand-dark">
            Selecione um serviço
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="bg-brand-dark">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="font-body text-sm text-white/80">Mensagem</label>
        <textarea
          id="mensagem"
            name="mensagem"
          rows={4}
          required
          className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-brand-lime"
          placeholder="Descreva o que você precisa"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-green hover:bg-brand-lime hover:text-brand-dark transition-colors text-white py-3 rounded-full font-heading font-semibold disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Solicitar Orçamento"}
      </button>

      {status === "success" && (
        <p role="status" aria-live="polite" className="text-brand-lime text-sm text-center">Solicitação enviada com sucesso! Em breve entraremos em contato.</p>
      )}
      {status === "error" && (
        <p role="alert" className="text-red-400 text-sm text-center">Erro ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}