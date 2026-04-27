"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScheduleButton from "@/app/_components/schedule-button";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  BarChart3,
  Database,
  RefreshCcw,
  Server,
  Plug,
} from "lucide-react";

const features = [
  {
    Icon: Database,
    title: "Ingestão Multi-banco",
    desc: "Conecta PostgreSQL, SQL Server e Firebird - ERPs legados de diferentes clientes - a uma base unificada.",
  },
  {
    Icon: Server,
    title: "Agente Instalável",
    desc: "Agente leve instalável na máquina de cada cliente, que faz a leitura e sync automático dos dados.",
  },
  {
    Icon: RefreshCcw,
    title: "Sync Automático",
    desc: "Sincronização periódica de vendas, estoque e financeiro sem intervenção manual.",
  },
  {
    Icon: Plug,
    title: "API Unificada",
    desc: "API REST centralizada no Supabase que normaliza dados de diferentes ERPs em um schema único.",
  },
];

const techStack = ["Python", "PostgreSQL", "SQL Server", "Firebird", "Supabase", "API REST"];

export default function InfoMercadosContent() {
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
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/15">
              <BarChart3 className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-blue-300 text-xs font-semibold tracking-wider uppercase mb-1">
                Projeto
              </span>
              <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-white">
                InfoMercados
              </h1>
              <p className="text-slate-400">
                Pipeline de Integração ERP Multi-banco
              </p>
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
              A InfoMercados precisava consolidar dados de vendas, estoque e
              financeiro de dezenas de clientes que usam ERPs diferentes -
              PostgreSQL, SQL Server e Firebird. O desafio era criar um pipeline
              de ingestão escalável que funcionasse de forma automática.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              A DMTN desenvolveu um agente instalável que cada cliente roda em
              sua máquina, extraindo dados do ERP local e sincronizando com uma
              API centralizada no Supabase. A normalização é feita em tempo de
              ingestão, permitindo análises unificadas independente do ERP de
              origem.
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
              Como funciona
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
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
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
              Precisa integrar dados de ERPs?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Fale com a gente e descubra como a DMTN pode ajudar.
            </p>
            <ScheduleButton location="case-infomercados" className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25" />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
