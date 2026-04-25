"use client";

import { motion } from "framer-motion";
import { Rocket, MessageCircle, Handshake, Zap } from "lucide-react";

const values = [
  {
    Icon: Rocket,
    title: "Entrega",
    desc: "Não existe projeto sem resultado. Entregamos com foco, qualidade e no prazo combinado.",
    color: "indigo",
  },
  {
    Icon: MessageCircle,
    title: "Transparência",
    desc: "Escopo claro. Comunicação direta. Sem promessa que não será cumprida.",
    color: "sky",
  },
  {
    Icon: Handshake,
    title: "Parceria",
    desc: "Não somos fornecedor - somos parceiro técnico. Entendemos o negócio e evoluímos junto.",
    color: "violet",
  },
  {
    Icon: Zap,
    title: "Impacto",
    desc: "Código não é fim, é meio. O que importa é o tempo economizado e o erro eliminado.",
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "hover:border-indigo-200" },
  sky: { bg: "bg-sky-50", icon: "text-sky-600", border: "hover:border-sky-200" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600", border: "hover:border-violet-200" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "hover:border-amber-200" },
};

export default function ValuesSection() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
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
          {values.map((val, i) => {
            const colors = colorMap[val.color];
            return (
              <motion.div
                key={i}
                className={`bg-white border border-slate-100 ${colors.border} rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center ${colors.icon} mb-5`}
                >
                  <val.Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-grotesk font-bold text-[#0F1629] mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
