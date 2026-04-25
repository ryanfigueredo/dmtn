"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function InstitucionalSection() {
  return (
    <section id="sobre" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-5">
            Quem somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-[#0F1629] mb-6">
            Transformamos processos em software
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A DMTN Sistemas existe para transformar ideias em código que impactam
            milhares de pessoas. Eliminamos retrabalho, geramos visibilidade em
            tempo real e blindamos processos com automação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
              <Target className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-grotesk font-bold text-[#0F1629] mb-2">
              Missão
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Transformar ideias em código que impactam milhares de pessoas.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-5">
              <Eye className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-grotesk font-bold text-[#0F1629] mb-2">
              Visão
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Ser referência em tecnologia que transforma operações no Brasil.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
