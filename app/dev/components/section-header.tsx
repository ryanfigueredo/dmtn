"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { trackConversion, trackEvent, CONVERSION_SEND_TO } from "@/app/_lib/gtag";
import { useDiagnosticChat } from "@/app/_components/diagnostic-chat-provider";

const HeaderSection = () => {
  const { openChat } = useDiagnosticChat();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1629]">
      {/* Subtle gradient orbs */}
      <div className="absolute w-[700px] h-[700px] rounded-full blur-[120px] bg-indigo-600/15 -top-[300px] -right-[200px] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] bg-purple-600/8 bottom-0 -left-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] text-indigo-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
            </span>
            Software House - Curitiba
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-grotesk font-bold leading-[1.08] tracking-tight text-white mb-8"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.15 }}
        >
          Não vendemos sistemas.
          <br />
          <span className="text-indigo-400">
            Vendemos controle, economia e tempo.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 0.55, bounce: 0, delay: 0.3 }}
        >
          Sistemas completos para empresas que precisam parar de depender de
          planilhas, processos manuais e sistemas que ninguém sabe como funciona.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 0.5, bounce: 0, delay: 0.45 }}
        >
          <button
            onClick={() => {
              trackConversion(CONVERSION_SEND_TO.scheduleClick);
              trackEvent("cta_click", { location: "hero", label: "Agendar diagnóstico gratuito" });
              openChat();
            }}
            className="group inline-flex items-center gap-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="#cases"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium text-base px-6 py-4 rounded-2xl transition-colors"
          >
            Ver cases de sucesso
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full block"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  );
};

export default HeaderSection;
