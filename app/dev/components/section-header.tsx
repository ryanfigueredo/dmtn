"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { trackConversion, trackEvent, CONVERSION_SEND_TO } from "@/app/_lib/gtag";
import { useDiagnosticChat } from "@/app/_components/diagnostic-chat-provider";

const HeaderSection = () => {
  const { openChat } = useDiagnosticChat();
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0F1629]">
      {/* Subtle gradient orbs */}
      <div className="absolute w-[700px] h-[700px] rounded-full blur-[120px] bg-indigo-600/15 -top-[300px] -right-[200px] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] bg-purple-600/8 bottom-0 -left-[150px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          className="mb-8"
        >
          
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-grotesk font-bold leading-[.98] tracking-tight text-white mb-8"
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 0.6, bounce: 0, delay: 0.15 }}
        >
          A Software House que desenvolve sua solução sob medida; e entrega 
          <br />
          <span className="text-indigo-400 py-2">
            controle, economia e tempo.
          </span>
        </motion.h1>

        

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
            className="group inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="#segments"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium text-base px-6 py-4 rounded-2xl transition-colors"
          >
            Veja Mais
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
