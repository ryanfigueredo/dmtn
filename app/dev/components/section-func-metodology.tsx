"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useDiagnosticChat } from "@/app/_components/diagnostic-chat-provider";

const FuncMetodology = () => {
  const { openChat } = useDiagnosticChat();
  return (
    <section className="py-24 relative" id="consultoria">
      <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-indigo-600/8 top-[30%] -left-[150px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase mb-5">
            Comece agora
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Agende seu diagnóstico{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              gratuito
            </span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Assim como em uma consulta médica, o diagnóstico é a etapa inicial
            para entender os sintomas, identificar problemas e prescrever as
            melhores soluções para o seu negócio.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 sm:p-10 shadow-[0_0_40px_rgba(99,102,241,0.06)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto mb-6 border border-indigo-500/15">
              <MessageSquare className="w-7 h-7" strokeWidth={1.5} />
            </div>

            <h3 className="text-white font-semibold text-lg mb-2">
              Diagnóstico: o check-up do seu projeto
            </h3>
            <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Nossos especialistas atuam como médicos para o seu negócio, prontos
              para ouvir suas necessidades, realizar uma análise detalhada e
              indicar os melhores caminhos para resultados incríveis.
            </p>

            <button
              onClick={() => openChat()}
              className="group inline-flex items-center gap-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Agendar meu diagnóstico
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <Link
              href="https://wa.me/5521997624873"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500/60 hover:text-zinc-400 transition-colors mt-2 inline-block"
            >
              Prefere falar direto? WhatsApp →
            </Link>

            <p className="text-xs text-zinc-600 mt-4">
              Nossos especialistas estão prontos para ouvir você e cuidar do seu
              projeto!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default FuncMetodology;
