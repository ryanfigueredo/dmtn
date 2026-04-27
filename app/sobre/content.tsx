"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScheduleButton from "@/app/_components/schedule-button";
import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import {
  ArrowLeft,
  Target,
  Eye,
  Rocket,
  MessageCircle,
  Handshake,
  Zap,
  MapPin,
} from "lucide-react";

const values = [
  {
    Icon: Rocket,
    title: "Entrega",
    desc: "Não existe projeto sem resultado. Entregamos com foco, qualidade e no prazo combinado.",
  },
  {
    Icon: MessageCircle,
    title: "Transparência",
    desc: "Escopo claro. Comunicação direta. Sem promessa que não será cumprida.",
  },
  {
    Icon: Handshake,
    title: "Parceria",
    desc: "Não somos fornecedor - somos parceiro técnico. Entendemos o negócio e evoluímos junto.",
  },
  {
    Icon: Zap,
    title: "Impacto",
    desc: "Código não é fim, é meio. O que importa é o tempo economizado e o erro eliminado.",
  },
];

const jdt = [
  {
    num: "01",
    title: "Entregue ou Aprenda Rápido",
    desc: "Testamos, erramos e corrigimos. O que não funciona a gente descobre logo.",
  },
  {
    num: "02",
    title: "Fale a Língua do Cliente",
    desc: "Não falamos em tecnologia. Falamos em problema resolvido.",
  },
  {
    num: "03",
    title: "Dono do Problema",
    desc: "Pegamos o problema e resolvemos. Não repassamos.",
  },
  {
    num: "04",
    title: "80/20 na Prática",
    desc: "Focamos no 20% que resolve 80% da dor.",
  },
  {
    num: "05",
    title: "Código com Propósito",
    desc: "Nenhuma linha de código é escrita sem saber o impacto que vai gerar.",
  },
];

export default function SobreContent() {
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
              Sobre a DMTN
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-white mb-5">
              Transformamos processos em software
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              A DMTN Sistemas existe para transformar ideias em código que
              impactam milhares de pessoas. Eliminamos retrabalho, geramos
              visibilidade em tempo real e blindamos processos com automação.
            </p>
          </motion.div>
        </div>
        <svg className="w-full block -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#FAFAF8" />
        </svg>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              className="bg-white border border-slate-100 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
                <Target className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-grotesk font-bold text-[#0F1629] mb-3">
                Missão
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Transformar ideias em código que impactam milhares de pessoas.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-slate-100 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-5">
                <Eye className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-grotesk font-bold text-[#0F1629] mb-3">
                Visão
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ser referência em tecnologia que transforma operações no Brasil.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-5">
              Nossos valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-[#0F1629]">
              O que nos move todo dia
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                  <val.Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-grotesk font-bold text-[#0F1629] mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JDT */}
      <section className="bg-[#0F1629]">
        <svg className="w-full block bg-[#FAFAF8] -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#0F1629" />
        </svg>
        <div className="max-w-4xl mx-auto px-6 pb-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-5">
              JDT
            </span>
            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-4">
              Jeito DMTN de Trabalhar
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Princípios que guiam cada decisão e cada entrega.
            </p>
          </motion.div>

          <div className="space-y-4">
            {jdt.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-5 flex items-start gap-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className="text-sm font-bold text-indigo-400 font-grotesk mt-0.5">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="border-b border-white/[0.06]" />
      </section>

      {/* Localização */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-8 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-xl font-grotesk font-bold text-[#0F1629]">
                  Nossas bases
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-[#0F1629] mb-1">Curitiba - PR (Matriz)</p>
                <p className="text-sm text-slate-500 mb-2">Barigui Business Center</p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Rua General Mário Tourinho, 1746, Sala 1601
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0F1629] mb-1">Rio de Janeiro - RJ</p>
                <p className="text-sm text-slate-500 mb-2">Ipanema</p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Rua Visconde de Pirajá, 414, Sala 718
                </p>
              </div>
            </div>
          
          </motion.div>
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
              Quer conhecer a DMTN de perto?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Agende um diagnóstico gratuito e descubra como podemos transformar
              sua operação.
            </p>
            <ScheduleButton location="sobre" />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
