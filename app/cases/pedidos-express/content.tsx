"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScheduleButton from "@/app/_components/schedule-button";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  ShoppingBag,
  Printer,
  MessageCircle,
  Smartphone,
  ExternalLink,
} from "lucide-react";

const features = [
  {
    Icon: ShoppingBag,
    title: "Gestão de Pedidos em Tempo Real",
    desc: "Painel completo para restaurantes, barbearias e consultórios com status de pedidos, cardápio digital e controle de mesas.",
  },
  {
    Icon: Printer,
    title: "Impressão Térmica",
    desc: "Integração com impressoras térmicas ESC/POS de R$100 via Bluetooth - imprime comanda, recibo e pedido direto do app.",
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp via Meta API",
    desc: "Bot automatizado com a Meta Cloud API oficial para receber pedidos, confirmar agendamentos e enviar notificações ao cliente.",
  },
  {
    Icon: Smartphone,
    title: "Apps Nativos Kotlin e iOS",
    desc: "App Android em Kotlin e iOS em Swift para a equipe gerenciar pedidos, atualizar status e imprimir - tudo na palma da mão.",
  },
];

const techStack = ["Next.js", "Kotlin", "Swift", "PostgreSQL", "Prisma", "Meta Cloud API", "AWS", "ESC/POS"];

export default function PedidosExpressContent() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="bg-[#0F1629] pt-28">
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/15">
              <ShoppingBag className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-orange-300 text-xs font-semibold tracking-wider uppercase mb-1">
                Projeto DMTN
              </span>
              <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-white">
                PedidosExpress
              </h1>
              <p className="text-slate-400">
                Gestão de Pedidos com Impressão Térmica e WhatsApp
              </p>
              <Link
                href="https://pedidos.dmtn.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium mt-2 transition-colors"
              >
                pedidos.dmtn.com.br
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <svg className="w-full block -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#FAFAF8" />
        </svg>
      </section>

      {/* Context */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-grotesk font-bold text-slate-900 mb-4">
              O desafio
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Restaurantes, barbearias e consultórios precisavam de um sistema simples e
              barato para gerenciar pedidos, imprimir comandas e se comunicar com clientes.
              Impressoras térmicas caras e sistemas complexos não eram viáveis para negócios pequenos.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Criamos o PedidosExpress: uma plataforma multi-tenant com app Android em Kotlin
              que conecta via Bluetooth a impressoras térmicas ESC/POS de R$100, recebe pedidos
              pelo WhatsApp via Meta Cloud API oficial e oferece dashboard web completo. Cada
              tipo de negócio (restaurante, barbearia, consultório) tem fluxos personalizados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold tracking-wider uppercase mb-5">
              Funcionalidades
            </span>
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-slate-900">
              O que entregamos
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <feat.Icon className="w-6 h-6 text-orange-500 mb-3" strokeWidth={1.5} />
                <h3 className="font-semibold text-slate-900 mb-1">{feat.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">
            Stack utilizada
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white border border-slate-100 text-sm text-slate-600 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0F1629]">
        <svg className="w-full block bg-[#FAFAF8] -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#0F1629" />
        </svg>
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-5">
              Precisa de um sistema de pedidos?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Do cardápio digital à impressão da comanda - tudo integrado e acessível.
            </p>
            <ScheduleButton location="case-pedidos-express" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20" />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
