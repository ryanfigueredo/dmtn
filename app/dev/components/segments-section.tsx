"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Car,
  Ruler,
  Heart,
  Truck,
  Calculator,
} from "lucide-react";

const segments = [
  {
    Icon: Building2,
    title: "Facilities & Terceirização",
    desc: "Gestão de equipes, ponto digital e compliance",
  },
  {
    Icon: Car,
    title: "Auto Peças & Varejo",
    desc: "Controle de estoque, RFID e vendas",
  },
  {
    Icon: Ruler,
    title: "Engenharia & Perícias",
    desc: "Laudos técnicos, NRs e gestão de processos",
  },
  {
    Icon: Heart,
    title: "Saúde & Clínicas",
    desc: "Prontuários, agendamentos e faturamento",
  },
  {
    Icon: Truck,
    title: "Logística & Distribuição",
    desc: "Rotas, rastreamento e gestão de entregas",
  },
  {
    Icon: Calculator,
    title: "Backoffice Financeiro",
    desc: "Contas, fluxo de caixa e relatórios",
  },
];

export default function SegmentsSection() {
  return (
    <section id="segments" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-[#6a6a6a] mb-4">
            Como transformamos sua <span className="text-[#0F1629] py-2">Operação</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors mb-4">
                <seg.Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-[#0F1629] mb-1">
                {seg.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {seg.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
