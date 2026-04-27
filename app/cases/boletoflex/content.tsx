"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScheduleButton from "@/app/_components/schedule-button";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  FileText,
  Bell,
  BarChart3,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const features = [
  {
    Icon: FileText,
    title: "Gestão de Duplicatas",
    desc: "Controle completo de boletos e duplicatas com status em tempo real, filtros avançados e histórico de pagamentos.",
  },
  {
    Icon: Bell,
    title: "Cobranças Automatizadas",
    desc: "Régua de cobrança automática via e-mail e WhatsApp com lembretes configuráveis por perfil de cliente.",
  },
  {
    Icon: BarChart3,
    title: "Dashboard Financeiro",
    desc: "Visão consolidada de recebíveis, inadimplência e fluxo de caixa com gráficos em tempo real.",
  },
  {
    Icon: ShieldCheck,
    title: "Conciliação Bancária",
    desc: "Importação de extratos e conciliação automática com baixa de títulos integrada.",
  },
];

const techStack = ["Next.js", "Supabase", "Node.js", "API REST", "WhatsApp API"];

export default function BoletoFlexContent() {
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
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/15">
              <FileText className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-1">
                Projeto
              </span>
              <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-white">
                BoletoFlex
              </h1>
              <p className="text-slate-400">
                Gestão de Duplicatas e Automação de Cobranças
              </p>
              <Link
                href="https://boletoflex.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-medium mt-2 transition-colors"
              >
                boletoflex.com.br
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
              O BoletoFlex precisava de um sistema robusto para gerenciar milhares de
              duplicatas, automatizar cobranças e oferecer visibilidade financeira em
              tempo real para seus clientes. O processo manual gerava atrasos,
              inadimplência alta e falta de controle sobre os recebíveis.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Construímos uma plataforma completa que centraliza toda a operação de
              cobrança, desde a emissão do boleto até a conciliação bancária, com
              automações inteligentes que reduziram a inadimplência e o tempo operacional.
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
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wider uppercase mb-5">
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
                <feat.Icon className="w-6 h-6 text-emerald-500 mb-3" strokeWidth={1.5} />
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
              Precisa automatizar cobranças?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Fale com a gente e descubra como podemos otimizar seus recebíveis.
            </p>
            <ScheduleButton location="case-boletoflex" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20" />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
