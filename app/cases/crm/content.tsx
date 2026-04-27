"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScheduleButton from "@/app/_components/schedule-button";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  MessageCircle,
  Users,
  Calendar,
  Mail,
  FileText,
  BarChart3,
  Ticket,
  Inbox,
  DollarSign,
  Bot,
  Share2,
  GitBranch,
  ExternalLink,
} from "lucide-react";

const features = [
  {
    Icon: MessageCircle,
    title: "Bot WhatsApp Inteligente",
    desc: "Fluxo conversacional automatizado que capta leads, coleta informações e agenda reuniões - tudo via WhatsApp com a Meta Cloud API.",
  },
  {
    Icon: Users,
    title: "Gestão de Leads",
    desc: "Kanban com pipeline completo: novo, qualificado, proposta, negociado e fechado. Histórico de interações, origem e scoring automático.",
  },
  {
    Icon: Inbox,
    title: "Inbox Multicanal",
    desc: "Hub de mensagens que agrega WhatsApp e Facebook em uma caixa de entrada unificada com status de entrega e leitura.",
  },
  {
    Icon: Calendar,
    title: "Agendamento Automático",
    desc: "Integração com Google Calendar e Google Meet para agendar reuniões direto pelo bot, com lembretes automáticos por e-mail.",
  },
  {
    Icon: FileText,
    title: "Propostas e Documentos",
    desc: "Upload, versionamento e preview de propostas vinculadas a cada lead. Organização por cliente com histórico completo.",
  },
  {
    Icon: Mail,
    title: "E-mail Marketing e Automações",
    desc: "Campanhas com templates, disparo segmentado, tracking de abertura/cliques e automações por trigger (lead criado, status mudou, reunião agendada).",
  },
  {
    Icon: Ticket,
    title: "Tickets e Tarefas",
    desc: "Sistema de tickets interno com prioridades, status (aberto a resolvido) e tarefas vinculadas a leads com prazos e responsáveis.",
  },
  {
    Icon: DollarSign,
    title: "Faturamento e Caixa",
    desc: "Controle financeiro com receita prevista vs realizada, despesas por categoria e fluxo de caixa mensal.",
  },
  {
    Icon: BarChart3,
    title: "Dashboard com Métricas",
    desc: "Métricas em tempo real: origem dos leads, funil de conversão, reuniões agendadas, tarefas pendentes e performance do time.",
  },
  {
    Icon: Share2,
    title: "Integração Facebook Ads",
    desc: "Sync automático de leads gerados por formulários do Facebook Ads. Inbox de comentários com resposta direta.",
  },
  {
    Icon: Bot,
    title: "IA com Claude",
    desc: "Qualificação automática de leads, transcrição de ligações, coaching de vendas e respostas inteligentes no WhatsApp.",
  },
  {
    Icon: GitBranch,
    title: "Board de Desenvolvimento",
    desc: "Kanban interno para projetos de desenvolvimento com integração ao GitHub: PRs, issues e branches sincronizados.",
  },
];

const techStack = [
  "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Meta Cloud API",
  "Google APIs", "Claude AI", "Baileys", "Resend", "Facebook API",
];

export default function DmtnCrmContent() {
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
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/15">
              <Users className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-violet-300 text-xs font-semibold tracking-wider uppercase mb-1">
                Projeto Interno
              </span>
              <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-white">
                CRM
              </h1>
              <p className="text-slate-400">
                CRM completo com WhatsApp, E-mail, IA e Financeiro
              </p>
              <Link
                href="https://crm.dmtn.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium mt-2 transition-colors"
              >
                crm.dmtn.com.br
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
              A DMTN precisava de um sistema próprio para captar e nutrir leads vindos
              de campanhas no Facebook e WhatsApp. O processo era manual: leads chegavam,
              ficavam perdidos em conversas e não havia visibilidade sobre o funil de vendas,
              propostas ou faturamento.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Construímos um CRM completo com 12 módulos integrados: bot WhatsApp que
              capta leads automaticamente, inbox multicanal, propostas, tickets internos,
              e-mail marketing com automações, controle financeiro, dashboard com métricas
              em tempo real e IA para qualificação e coaching de vendas.
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
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold tracking-wider uppercase mb-5">
              12 Módulos
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
                <feat.Icon className="w-6 h-6 text-violet-500 mb-3" strokeWidth={1.5} />
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
              Quer um CRM sob medida?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Automatize sua captação de leads e agende um diagnóstico gratuito.
            </p>
            <ScheduleButton location="case-crm" className="inline-flex items-center gap-2 bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/20" />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
