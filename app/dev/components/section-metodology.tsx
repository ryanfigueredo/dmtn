"use client";

import { motion } from "framer-motion";
import { Search, Layout, Code2, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Explorar",
    desc: "Imersão no seu negócio. Entendemos processos, dores e oportunidades antes de escrever uma linha de código.",
    Icon: Search,
  },
  {
    step: "02",
    title: "Planejar",
    desc: "Arquitetura da solução, design de interfaces e planejamento de entregas com milestones claros.",
    Icon: Layout,
  },
  {
    step: "03",
    title: "Construir",
    desc: "Desenvolvimento ágil com entregas parciais. Você acompanha cada evolução em tempo real.",
    Icon: Code2,
  },
  {
    step: "04",
    title: "Lançar",
    desc: "Deploy, treinamento da equipe e suporte contínuo. Seu sistema nasce pronto para escalar.",
    Icon: Rocket,
  },
];

export default function MetodologiaSection() {
  return (
    <section id="metodologia" className="py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-5">
            Nosso processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-[#0F1629] mb-4">
            Quatro etapas para transformar sua operação
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Do diagnóstico ao lançamento, sem complicação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-white border border-slate-100 hover:border-indigo-200 rounded-2xl p-6 transition-all duration-300 h-full overflow-hidden hover:shadow-lg hover:shadow-indigo-500/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="absolute text-[80px] font-grotesk font-black text-slate-100/80 -top-4 -right-2 leading-none select-none">
                {item.step}
              </span>
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-600 mb-5 transition-colors">
                  <item.Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#0F1629] font-grotesk font-bold mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
