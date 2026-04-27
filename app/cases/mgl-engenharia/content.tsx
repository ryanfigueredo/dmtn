"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScheduleButton from "@/app/_components/schedule-button";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  Scale,
  FileText,
  Upload,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    Icon: Scale,
    title: "Gestão de Perícias",
    desc: "Controle completo de processos trabalhistas com acompanhamento por etapa, status e prazo.",
  },
  {
    Icon: FileText,
    title: "Laudos Técnicos",
    desc: "Geração e gestão de laudos com base em NR-1 e NR-15, com templates padronizados.",
  },
  {
    Icon: Upload,
    title: "Upload de Fotos",
    desc: "Armazenamento seguro em AWS S3 com organização por processo e evidência fotográfica.",
  },
  {
    Icon: ShieldCheck,
    title: "RBAC Completo",
    desc: "Controle de acesso por perfil - administrador, perito, assistente técnico e visualizador.",
  },
];

const techStack = ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "RBAC", "NR-15"];

export default function MGLContent() {
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
              <Scale className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-1">
                Projeto
              </span>
              <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-white">
                Laudos Periciais MGL
              </h1>
              <p className="text-slate-400">
                Sistema de Gestão de Perícias Trabalhistas
              </p>
              <span className="inline-flex items-center gap-1.5 text-emerald-400/50 text-sm font-medium mt-2">
                Link em breve
              </span>
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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#0F1629] mb-6">
              Sobre o projeto
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A MGL Engenharia precisava de um sistema robusto para gerenciar
              perícias trabalhistas envolvendo normas regulamentadoras (NR-1 e
              NR-15). O desafio era centralizar documentos, fotos de campo,
              laudos técnicos e o fluxo de cada processo em um sistema seguro e
              organizado.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              A DMTN desenvolveu uma plataforma web completa com upload de fotos
              armazenadas em AWS S3, geração de laudos técnicos padronizados e
              controle de acesso por perfil (RBAC), garantindo que cada usuário
              visualize apenas o que lhe compete.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#0F1629]">
              Funcionalidades principais
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                  <feat.Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-grotesk font-bold text-[#0F1629] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Stack tecnológica
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium text-slate-600 px-4 py-2 rounded-full bg-white border border-slate-100"
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
              Precisa de um sistema de gestão?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Fale com a gente e descubra como a DMTN pode ajudar.
            </p>
            <ScheduleButton location="case-mgl" className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25" />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
