"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cog,
  Smartphone,
  Target,
  Users,
  Eye,
  Award,
  Building2,
  FileText,
  Tag,
  TrendingDown,
} from "lucide-react";

const pilares = [
  {
    Icon: Code2,
    title: "Desenvolvimento sob demanda",
    desc: "Sistemas completos feitos do zero, moldados exatamente ao seu processo — sem gambiarras, sem adaptações forçadas.",
  },
  {
    Icon: Cog,
    title: "Automação de processos",
    desc: "Eliminamos tarefas repetitivas, reduzimos erros humanos e liberamos sua equipe para o que realmente importa.",
  },
  {
    Icon: Smartphone,
    title: "Plataformas web e mobile",
    desc: "Apps nativos e plataformas web responsivas que funcionam em qualquer dispositivo, com performance e segurança.",
  },
];

const valores = [
  {
    Icon: Users,
    title: "Satisfação dos clientes",
    desc: "Cada entrega é medida pelo impacto real no dia a dia do cliente.",
  },
  {
    Icon: Award,
    title: "Meritocracia com a equipe",
    desc: "Reconhecemos quem entrega resultado — crescemos juntos.",
  },
  {
    Icon: Eye,
    title: "Transparência no processo",
    desc: "Você acompanha cada sprint, cada decisão, cada linha de código.",
  },
];

const cases = [
  {
    Icon: FileText,
    empresa: "KL Facilities",
    tag: "Gestão de Facilities",
    headline: "350 folhas de ponto/mês eliminadas",
    desc: "Digitalizamos todo o controle de ponto — reconhecimento facial, geofence, apps nativos. Fim do papel, controle total em tempo real.",
    resultado: "Zero papel, 90% menos tempo operacional",
    color: "indigo",
  },
  {
    Icon: Tag,
    empresa: "Vale Vale Auto Peças",
    tag: "Controle de Estoque RFID",
    headline: "R$100 mil de perda trimestral eliminados",
    desc: "Sistema RFID que faz inventário em 15 minutos com 99,9% de precisão. Hardware incluso, implementação completa.",
    resultado: "Inventário de 8h → 15min, perdas -80%",
    color: "emerald",
  },
];

export default function InstitucionalSection() {
  return (
    <>
      {/* ============ HERO / SOBRE NÓS ============ */}
      <section id="sobre" className="py-24 relative">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-indigo-600/5 -top-[100px] -left-[200px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase mb-5">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Transformamos{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                processos em software
              </span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A DMTN Sistemas existe para transformar ideias em código que
              impactam milhares de pessoas. Eliminamos retrabalho, geramos
              visibilidade em tempo real e blindamos processos com automação.
            </p>
          </motion.div>

          {/* Valores */}
          <div className="grid sm:grid-cols-3 gap-5">
            {valores.map((valor, i) => (
              <motion.div
                key={i}
                className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mb-4">
                    <valor.Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {valor.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>
      </section>

      {/* ============ O QUE FAZEMOS ============ */}
      <section id="pilares" className="py-24 relative">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-purple-600/5 top-[30%] -right-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase mb-5">
              O que fazemos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Três pilares que{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                sustentam resultados
              </span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              Do diagnóstico à entrega, cobrimos tudo o que sua operação precisa
              para escalar com controle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {pilares.map((pilar, i) => (
              <motion.div
                key={i}
                className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mb-5">
                    <pilar.Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl text-white font-bold mb-3">
                    {pilar.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{pilar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>
      </section>

      {/* ============ PARA QUEM ============ */}
      <section id="para-quem" className="py-24 relative">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-blue-600/5 top-0 left-[50%] -translate-x-1/2 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.06)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-indigo-600/8 -top-20 -right-20 pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase mb-5">
                  Para quem
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Empresas que precisam de{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    controle e escala
                  </span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Atendemos empresas de pequeno e médio porte com faturamento
                  entre R$50k e R$150k/mês que ainda dependem de processos
                  manuais, planilhas e retrabalho.
                </p>
                <div className="space-y-3">
                  {[
                    "Processos operacionais em papel ou planilhas",
                    "Falta de visibilidade em tempo real",
                    "Perda de controle com o crescimento da equipe",
                    "Retrabalho diário que consome horas",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="w-3 h-3 text-indigo-400" />
                      </div>
                      <p className="text-zinc-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/10 border border-white/[0.06] flex items-center justify-center">
                  <Building2
                    className="w-20 h-20 text-indigo-400/60"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>
      </section>

      {/* ============ CASES ============ */}
      <section id="cases-institucional" className="py-24 relative">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-purple-600/5 top-[20%] -right-[200px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase mb-5">
              Cases de sucesso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Resultados{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                comprovados
              </span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              Empresas que confiaram na DMTN para eliminar o caos operacional.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {cases.map((c, i) => {
              const isIndigo = c.color === "indigo";
              return (
                <motion.div
                  key={i}
                  className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 sm:p-8 h-full hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          isIndigo
                            ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/15"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/15"
                        }`}
                      >
                        <c.Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {c.empresa}
                        </h3>
                        <p className="text-xs text-zinc-500">{c.tag}</p>
                      </div>
                    </div>

                    <p
                      className={`text-lg font-bold mb-3 ${
                        isIndigo ? "text-indigo-300" : "text-emerald-300"
                      }`}
                    >
                      {c.headline}
                    </p>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                      {c.desc}
                    </p>

                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                        isIndigo
                          ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/15"
                          : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/15"
                      }`}
                    >
                      <TrendingDown className="w-3 h-3" />
                      {c.resultado}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 relative">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl bg-indigo-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            className="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden shadow-[0_0_120px_rgba(99,102,241,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute w-[200px] h-[200px] rounded-full blur-3xl bg-indigo-600/10 -top-10 -left-10 pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] rounded-full blur-3xl bg-purple-600/8 -bottom-10 -right-10 pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Pronto para eliminar o{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  retrabalho
                </span>
                ?
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-lg mb-10 leading-relaxed">
                Agende um diagnóstico gratuito e descubra como a DMTN pode
                transformar sua operação em semanas — não meses.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://crm.dmtn.com.br/apresentacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Agendar diagnóstico gratuito
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="https://wa.me/5521997624873?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20DMTN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-base px-6 py-4 rounded-2xl transition-colors"
                >
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
