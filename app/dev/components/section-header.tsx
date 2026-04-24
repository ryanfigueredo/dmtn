"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { trackConversion, trackEvent, CONVERSION_SEND_TO } from "@/app/_lib/gtag";

const HeaderSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl bg-indigo-600/10 -top-[200px] -right-[200px] pointer-events-none animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-purple-600/8 -bottom-[100px] -left-[100px] pointer-events-none animate-[float_6s_ease-in-out_2s_infinite]" />
      <div className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-blue-600/6 top-[40%] left-[60%] pointer-events-none animate-[float_6s_ease-in-out_infinite]" />

      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
      `}</style>

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
            </span>
            Software House — Curitiba
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Transformamos empresas com{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            tecnologia sob medida
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          ERPs completos, apps nativos, sistemas com IA, ponto digital com
          reconhecimento facial e automações que eliminam processos manuais.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="#agendar"
            onClick={() => {
              trackConversion(CONVERSION_SEND_TO.scheduleClick);
              trackEvent("cta_click", { location: "hero", label: "Agendar diagnóstico gratuito" });
            }}
            className="group inline-flex items-center gap-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#cases"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-base px-6 py-4 rounded-2xl transition-colors"
          >
            Ver cases de sucesso
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </section>
  );
};

export default HeaderSection;
