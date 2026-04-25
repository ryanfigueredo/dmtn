"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const principles = [
  {
    title: "Entregue ou Aprenda Rápido",
    desc: "Testamos, erramos e corrigimos. O que não funciona a gente descobre logo.",
  },
  {
    title: "Fale a Língua do Cliente",
    desc: "Não falamos em tecnologia. Falamos em problema resolvido.",
  },
  {
    title: "Dono do Problema",
    desc: "Pegamos o problema e resolvemos. Não repassamos.",
  },
  {
    title: "80/20 na Prática",
    desc: "Focamos no 20% que resolve 80% da dor.",
  },
  {
    title: "Código com Propósito",
    desc: "Nenhuma linha de código é escrita sem saber o impacto que vai gerar.",
  },
];

export default function JdtSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#0F1629]">
      {/* Top curve */}
      <svg className="w-full block bg-[#FAFAF8] -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
        <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#0F1629" />
      </svg>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-5">
            Como trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-4">
            Jeito DMTN de Trabalhar
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Princípios que guiam cada decisão e cada entrega.
          </p>
        </motion.div>

        <div className="space-y-3">
          {principles.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white/[0.06] border-indigo-500/20"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-indigo-400 font-grotesk">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pl-16 text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom curve */}
      <svg
        className="w-full block -mb-px"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#FAFAF8" />
      </svg>
    </section>
  );
}
