"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Explorar",
    desc: "Imersão no seu negócio. Entendemos processos, dores e oportunidades antes de escrever uma linha de código.",
    gradient: "from-blue-500/20",
  },
  {
    step: "02",
    title: "Planejar",
    desc: "Arquitetura da solução, design de interfaces e planejamento de entregas com milestones claros.",
    gradient: "from-indigo-500/20",
  },
  {
    step: "03",
    title: "Construir",
    desc: "Desenvolvimento ágil com entregas parciais. Você acompanha cada evolução em tempo real.",
    gradient: "from-purple-500/20",
  },
  {
    step: "04",
    title: "Lançar",
    desc: "Deploy, treinamento da equipe e suporte contínuo. Seu sistema nasce pronto para escalar.",
    gradient: "from-violet-500/20",
  },
];

export default function MetodologiaSection() {
  return (
    <section id="metodologia" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase mb-5">
            Nosso processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Metodologia{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              DMTN
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Quatro etapas para transformar sua operação sem complicação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300 h-full overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <span className="text-5xl font-black text-white/[0.03] absolute -top-2 -right-1">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-300 text-sm font-bold mb-5 group-hover:bg-indigo-500/20 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>
    </section>
  );
}
