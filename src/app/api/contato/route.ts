import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, empresa, email, telefone, servico, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Preencha os campos obrigatórios." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Site INSPMAQ <onboarding@resend.dev>",
      to: "contato@inspmaq.com.br",
      replyTo: email,
      subject: `Novo orçamento pelo site - ${nome}${empresa ? " (" + empresa + ")" : ""}`,
      text: `Nome: ${nome}\nEmpresa: ${empresa || "não informado"}\nE-mail: ${email}\nTelefone: ${telefone || "não informado"}\nServiço de interesse: ${servico || "não informado"}\n\nMensagem:\n${mensagem}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem." },
      { status: 500 }
    );
  }
}