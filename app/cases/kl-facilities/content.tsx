"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  Trash2,
  Zap,
  CheckCircle,
  Smartphone,
  Star,
  ArrowLeft,
  Fingerprint,
  Users,
  ClipboardCheck,
  Shield,
  Fuel,
  MapPin,
  ExternalLink,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Folhas/mês eliminadas", Icon: Trash2 },
  { value: "90%", label: "Menos tempo operacional", Icon: Zap },
  { value: "100%", label: "Digital - zero papel", Icon: CheckCircle },
  { value: "6", label: "Apps nativos entregues", Icon: Smartphone },
];

const modules = [
  {
    Icon: Fingerprint,
    title: "Ponto Digital",
    desc: "App com selfie, GPS, geofence e modo offline. Reconhecimento facial via relógios EVO com servidor WebSocket dedicado. Integração em tempo real com dashboard gerencial.",
    color: "indigo",
  },
  {
    Icon: Users,
    title: "RH Completo",
    desc: "Gestão de colaboradores, crachás digitais, banco de talentos, vagas sociais e processos jurídicos trabalhistas. Painel completo para o setor de RH com indicadores de rotatividade e desempenho.",
    color: "violet",
  },
  {
    Icon: ClipboardCheck,
    title: "Checklists Operacionais",
    desc: "Inspeções em campo com fotos georreferenciadas, QR codes por unidade, templates personalizáveis e dashboard de conformidade. Relatórios automáticos por período e unidade.",
    color: "emerald",
  },
  {
    Icon: Smartphone,
    title: "Apps Nativos",
    desc: "2 apps em Kotlin (Android) + 2 em Swift (iOS) + 2 em Expo. Para colaboradores baterem ponto e supervisores acompanharem operações, pedidos e solicitações.",
    color: "blue",
  },
  {
    Icon: Shield,
    title: "Compliance e LGPD",
    desc: "Termos de implantação digitais, portal de exclusão de dados, manual técnico-jurídico e conformidade automatizada. Tudo alinhado às exigências da LGPD.",
    color: "amber",
    link: "https://www.klfacilities.com.br/compliance/privacidade",
    linkLabel: "Ver portal de privacidade",
  },
  {
    Icon: Fuel,
    title: "Operacional",
    desc: "Controle de gasolina com rotas GPS, registro de incidentes por categoria, protocolos de segurança e auditoria completa. Dashboard com visão geral das operações.",
    color: "rose",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-100" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "border-violet-100" },
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-100" },
  blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-100" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-100" },
  rose: { bg: "bg-rose-50", icon: "text-rose-600", border: "border-rose-100" },
};

const techStack = [
  "Next.js", "Prisma", "Kotlin", "Swift", "Expo", "Firebase",
  "WebSocket", "Looker Studio (Power BI do Google)", "Neon DB", "LGPD",
];

export default function KLFacilitiesContent() {
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

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-3">
              <Image
                src="/kl copy.svg"
                alt="KL Facilities"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-2">
                Case de sucesso
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-white">
                KL Facilities
              </h1>
              <p className="text-slate-400 mt-1">
                ERP completo - Gestão de Facilities e Terceirização
              </p>
              <Link
                href="https://klfacilities.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium mt-2 transition-colors"
              >
                klfacilities.com.br
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto mb-3">
                  <stat.Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <p className="text-2xl sm:text-3xl font-grotesk font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#0F1629] mb-6">
              O contexto
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A KL Facilities é uma empresa de facilities e terceirização com
              mais de 500 colaboradores atuando em diversas unidades. Toda a
              operação - ponto, checklists, controle de equipe, RH - era feita
              em papel.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Cada colaborador gerava pelo menos uma folha de ponto por mês,
              totalizando cerca de <strong>500 folhas de papel mensais</strong>.
              Além do custo e desperdício, o risco de perda, erro e retrabalho
              era constante.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#0F1629] mb-6">
              O desafio
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Digitalizar toda a operação de RH, ponto, compliance e gestão
              operacional de uma empresa com 500+ colaboradores distribuídos em
              múltiplas unidades. Criar um ecossistema integrado de web e apps
              nativos que funcionasse em campo, com ou sem internet.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Eliminar 500+ folhas de papel por mês",
                "Ponto digital com geolocalização e biometria",
                "Gestão de RH completa e centralizada",
                "Checklists de campo com evidência fotográfica",
                "Apps nativos para colaboradores e gestores",
                "Compliance LGPD em todos os módulos",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-indigo-600" />
                  </div>
                  <p className="text-slate-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-5">
              A solução
            </span>
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#0F1629]">
              6 módulos integrados
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => {
              const colors = colorMap[mod.color];
              return (
                <motion.div
                  key={i}
                  className={`bg-white border ${colors.border} rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center ${colors.icon} mb-4`}>
                    <mod.Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-grotesk font-bold text-[#0F1629] mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {mod.desc}
                  </p>
                  {"link" in mod && (
                    <a
                      href={mod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium mt-3 ${colors.icon} hover:opacity-80 transition-opacity`}
                    >
                      {"linkLabel" in mod ? mod.linkLabel : "Ver mais"}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apps Published */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#0F1629] mb-4">
              Veja em produção
            </h2>

            {/* Sistema web */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-semibold text-[#0F1629]">Sistema web em operação</p>
                <p className="text-sm text-slate-500">ERP completo da KL Facilities, em produção desde 2025</p>
              </div>
              <a
                href="https://klfacilities.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F1629] text-white text-sm font-medium hover:bg-[#1a2340] transition-colors shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
                Acesse o sistema
              </a>
            </div>

            {/* Apps nas stores */}
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Apps publicados nas stores
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F1629]">KL Colaboradores</h3>
                    <p className="text-xs text-slate-500">Ponto eletrônico para funcionários</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://apps.apple.com/br/app/kl-colaboradores/id6757887033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F1629] text-white text-sm font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kl.colaboradores"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F1629] text-white text-sm font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                    Google Play
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
                    <Users className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F1629]">KL Facilities</h3>
                    <p className="text-xs text-slate-500">Gestão para supervisores e gestores</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://apps.apple.com/br/app/kl-facilities/id6757905858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F1629] text-white text-sm font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kl.adm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F1629] text-white text-sm font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-0.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl text-[#0F1629] font-medium leading-relaxed mb-8">
              &ldquo;Antes da DMTN, a KL Facilities vivia uma realidade que muitos
              empresários enfrentam: a bagunça operacional oculta em pilhas de
              papel. Eram cerca de 500 folhas de ponto por mês. Um pesadelo
              logístico e administrativo, sem contar o risco de perdas e erros.
              Hoje, tudo é digital - do ponto ao checklist, do RH ao
              compliance.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-indigo-100 overflow-hidden">
                <Image
                  src="/luciano.png"
                  alt="Luciano Tuyuty"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[#0F1629]">Luciano Tuyuty</p>
                <p className="text-sm text-slate-500">CEO - KL Facilities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Stack tecnológica
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium text-slate-600 px-4 py-2 rounded-full bg-slate-50 border border-slate-100"
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
              Sua empresa tem desafios parecidos?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Fale com a gente e descubra como a DMTN pode transformar sua operação.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#agendar"
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25"
              >
                Agendar diagnóstico gratuito
              </Link>
              <Link
                href="https://wa.me/5521997624873?text=Ol%C3%A1%2C%20vi%20o%20case%20da%20KL%20e%20gostaria%20de%20conversar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white font-medium transition-colors"
              >
                Falar no WhatsApp
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
