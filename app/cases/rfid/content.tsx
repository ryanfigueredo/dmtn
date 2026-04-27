"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScheduleButton from "@/app/_components/schedule-button";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  Radio,
  Smartphone,
  MessageCircle,
  BarChart3,
  ExternalLink,
  FileText,
  Package,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    Icon: Radio,
    title: "Leitura RFID em Tempo Real",
    desc: "Apps nativos Android (Kotlin) e iOS (Swift) que leem tags RFID para entrada, saída e inventário de estoque instantâneo.",
  },
  {
    Icon: BarChart3,
    title: "Dashboard ERP Completo",
    desc: "Painel web com gestão de estoque, vendas, compras, clientes, produtos e relatórios em tempo real.",
  },
  {
    Icon: FileText,
    title: "Emissão de Nota Fiscal (NFe)",
    desc: "Emissão automática de notas fiscais eletrônicas integrada ao fluxo de vendas. Geração de PDF, envio por e-mail e armazenamento.",
  },
  {
    Icon: ShoppingCart,
    title: "Gestão de Vendas e Compras",
    desc: "Módulo completo de vendas com carrinho, descontos, formas de pagamento e controle de compras com fornecedores.",
  },
  {
    Icon: MessageCircle,
    title: "Bot WhatsApp Multi-tenant",
    desc: "Atendimento automatizado com fila de prioridade, menus interativos e respostas com IA (OpenAI/Claude) por tenant.",
  },
  {
    Icon: Smartphone,
    title: "Apps Nativos Android e iOS",
    desc: "Aplicativos nativos que se conectam a leitores RFID via Bluetooth, com sync em tempo real com o dashboard web.",
  },
  {
    Icon: Package,
    title: "Controle de Estoque",
    desc: "Inventário instantâneo com leitura em massa de tags RFID. Alertas de estoque mínimo, movimentações e histórico completo.",
  },
];

const techStack = ["Next.js", "Kotlin", "Swift", "AWS", "DynamoDB", "PostgreSQL", "WhatsApp API", "OpenAI", "NFe"];

export default function SaasRfidContent() {
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
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/15">
              <Radio className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-1">
                Projeto DMTN
              </span>
              <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-white">
                RFID
              </h1>
              <p className="text-slate-400">
                Gestão de Estoque Inteligente com RFID
              </p>
              <Link
                href="https://rfid.dmtn.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-2 transition-colors"
              >
                rfid.dmtn.com.br
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
              Madeireiras, oficinas e lojas enfrentavam o mesmo problema: controle de
              estoque manual, inventários demorados e perda de mercadoria. Precisávamos
              de uma solução que tornasse o inventário instantâneo e acessível.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Criamos uma plataforma SaaS completa com apps nativos que leem tags RFID
              via Bluetooth, um dashboard web com ERP integrado (vendas, compras, NFe,
              relatórios), emissão automática de notas fiscais e bot WhatsApp multi-tenant
              com IA para atendimento ao cliente. Tudo rodando na AWS com DynamoDB e PostgreSQL.
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
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold tracking-wider uppercase mb-5">
              Funcionalidades
            </span>
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-slate-900">
              O que entregamos
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <feat.Icon className="w-6 h-6 text-cyan-500 mb-3" strokeWidth={1.5} />
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
              Precisa de controle de estoque inteligente?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Automatize seu inventário com RFID e tenha visibilidade total em tempo real.
            </p>
            <ScheduleButton location="case-rfid" className="inline-flex items-center gap-2 bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20" />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
