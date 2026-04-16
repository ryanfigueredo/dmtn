import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log("Variáveis de ambiente:", process.env);

    // Enviar e-mail
    await transporter.sendMail({
      from: `"Contato" <${process.env.EMAIL_USER}>`,
      to: "ryan@dmtn.com.br",
      subject: "Novo Contato",
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    });

    // Salvar no Neon usando Prisma
    await prisma.email.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Notificar CRM (cria lead + dispara WhatsApp pro comercial)
    const crmWebhook = process.env.CRM_LEAD_WEBHOOK_URL;
    const crmSecret = process.env.CRM_WEBHOOK_SECRET;
    if (crmWebhook && crmSecret) {
      try {
        await fetch(crmWebhook, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-site-secret": crmSecret,
          },
          body: JSON.stringify({ name, email, message, source: "site_contact_form" }),
        });
      } catch (err) {
        console.error("Falha ao notificar CRM:", err);
      }
    }

    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro:", error);
    return NextResponse.json(
      { message: "Erro ao enviar o e-mail." },
      { status: 500 },
    );
  }
}
