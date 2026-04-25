"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  Smartphone,
  ScanFace,
  MessageSquare,
  Tag,
  Shield,
} from "lucide-react";

const solutions = [
  {
    Icon: Monitor,
    title: "ERPs e Sistemas de Gestão",
    desc: "Sistemas completos sob medida: financeiro, RH, operações, compliance, auditoria e dashboards em tempo real. Cada módulo é construído para o processo específico do seu negócio.",
    tag: "Web App",
    color: "indigo",
    caseLink: "/cases/kl-facilities",
    caseName: "Case: KL Facilities",
  },
  {
    Icon: Smartphone,
    title: "Apps Nativos iOS e Android",
    desc: "Aplicativos nativos em Kotlin e Swift para máxima performance, além de apps cross-platform com React Native e Expo. Publicação completa na App Store e Google Play.",
    tag: "Mobile",
    color: "violet",
    caseLink: "/cases/kl-facilities",
    caseName: "Case: KL Facilities",
  },
  {
    Icon: ScanFace,
    title: "Ponto Digital e Biometria",
    desc: "Reconhecimento facial, geofence GPS, selfie com validação, relógios EVO integrados via WebSocket. Elimina papel e garante conformidade trabalhista.",
    tag: "IoT + Mobile",
    color: "emerald",
    caseLink: "/cases/kl-facilities",
    caseName: "Case: KL Facilities",
  },
  {
    Icon: MessageSquare,
    title: "IA e Automação",
    desc: "Chatbots inteligentes, qualificação de leads automática, atendimento via WhatsApp com IA generativa. Automação de processos repetitivos para liberar sua equipe.",
    tag: "IA",
    color: "sky",
    caseLink: null,
    caseName: null,
  },
  {
    Icon: Tag,
    title: "Controle RFID",
    desc: "Inventário em 15 minutos com 99,9% de precisão. Hardware incluso, implementação completa. Controle de estoque em tempo real com alertas automáticos.",
    tag: "IoT",
    color: "amber",
    caseLink: null,
    caseName: null,
  },
  {
    Icon: Shield,
    title: "Compliance e LGPD",
    desc: "Termos digitais, exclusão de dados, conformidade jurídica e manuais técnicos integrados ao sistema. Adequação completa à LGPD.",
    tag: "Jurídico",
    color: "rose",
    caseLink: "/cases/kl-facilities",
    caseName: "Case: KL Facilities",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; tagBg: string; tagText: string }> = {
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "hover:border-indigo-200", tagBg: "bg-indigo-50", tagText: "text-indigo-600" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "hover:border-violet-200", tagBg: "bg-violet-50", tagText: "text-violet-600" },
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "hover:border-emerald-200", tagBg: "bg-emerald-50", tagText: "text-emerald-600" },
  sky: { bg: "bg-sky-50", icon: "text-sky-600", border: "hover:border-sky-200", tagBg: "bg-sky-50", tagText: "text-sky-600" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "hover:border-amber-200", tagBg: "bg-amber-50", tagText: "text-amber-600" },
  rose: { bg: "bg-rose-50", icon: "text-rose-600", border: "hover:border-rose-200", tagBg: "bg-rose-50", tagText: "text-rose-600" },
};

export default function SolucoesContent() {
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-5">
              Nossas soluções
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-white mb-5">
              Tecnologia sob medida para cada necessidade
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Da ideia ao produto em produção. Construímos sistemas robustos que
              resolvem problemas reais do seu negócio.
            </p>
          </motion.div>
        </div>
        <svg className="w-full block -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#FAFAF8" />
        </svg>
      </section>

      {/* Solutions grid */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, i) => {
              const colors = colorMap[sol.color];
              return (
                <motion.div
                  key={i}
                  className={`bg-white border border-slate-100 ${colors.border} rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center ${colors.icon}`}>
                      <sol.Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className={`text-[10px] font-semibold tracking-wider uppercase ${colors.tagText} ${colors.tagBg} px-2.5 py-1 rounded-full`}>
                      {sol.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-grotesk font-bold text-[#0F1629] mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                    {sol.desc}
                  </p>
                  {sol.caseLink && (
                    <Link
                      href={sol.caseLink}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.icon} transition-colors`}
                    >
                      {sol.caseName}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0F1629]">
        <svg className="w-full block bg-[#FAFAF8]" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#0F1629" />
        </svg>
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-5">
              Não encontrou o que precisa?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Construímos soluções sob medida. Conte o seu desafio.
            </p>
            <Link
              href="/#agendar"
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25"
            >
              Agendar diagnóstico gratuito
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
