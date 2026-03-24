"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Trash2,
  Zap,
  CheckCircle,
  Smartphone,
  Star,
  Tag,
  MessageCircle,
} from "lucide-react";

function useAnimatedCounter(end: number, duration: number) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, started]);

  return { count, start };
}

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { count, start } = useAnimatedCounter(value, duration);

  useEffect(() => {
    if (isInView) start();
  }, [isInView, start]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const klStats = [
  {
    value: 350,
    suffix: "",
    label: "Folhas/mes eliminadas",
    Icon: Trash2,
  },
  {
    value: 90,
    suffix: "%",
    label: "Menos tempo operacional",
    Icon: Zap,
  },
  {
    value: 100,
    suffix: "%",
    label: "Digital — zero papel",
    Icon: CheckCircle,
  },
  {
    value: 6,
    suffix: "",
    label: "Apps nativos entregues",
    Icon: Smartphone,
  },
];

const klModules = [
  {
    title: "Ponto Digital",
    desc: "App com selfie, GPS, geofence e modo offline. Reconhecimento facial via relogios EVO com servidor WebSocket dedicado.",
    highlight: true,
  },
  {
    title: "RH Completo",
    desc: "Gestao de colaboradores, crachas digitais, banco de talentos, vagas sociais e processos juridicos trabalhistas.",
    highlight: false,
  },
  {
    title: "Checklists Operacionais",
    desc: "Inspecoes em campo com fotos georeferenciadas, QR codes por unidade, templates personalizaveis e dashboard de conformidade.",
    highlight: false,
  },
  {
    title: "Apps Nativos",
    desc: "2 apps em Kotlin (Android) + 2 em Swift (iOS) + 2 em Expo. Para colaboradores baterem ponto e supervisores gerenciarem.",
    highlight: true,
  },
  {
    title: "Compliance e LGPD",
    desc: "Termos de implantacao digitais, portal de exclusao de dados, manual tecnico-juridico e conformidade automatizada.",
    highlight: false,
  },
  {
    title: "Operacional",
    desc: "Controle de gasolina com rotas GPS, registro de incidentes por categoria, protocolos e auditoria completa.",
    highlight: false,
  },
];

const techStack = [
  "Next.js",
  "Prisma",
  "Kotlin",
  "Swift",
  "Expo",
  "Firebase",
  "WebSocket",
  "Looker Studio",
  "Neon DB",
  "LGPD",
];

const rfidStats = [
  { label: "Inventario manual", value: "8h + 2 pessoas", positive: false },
  { label: "Com RFID", value: "15min + 1 pessoa", positive: true },
  { label: "Precisao", value: "99,9%", positive: true },
  { label: "Reducao de perdas", value: "-80%", positive: true },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 relative">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-purple-600/5 top-[20%] -right-[200px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section header */}
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
            Resultados que{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Empresas que confiaram na DMTN para revolucionar suas operacoes.
          </p>
        </motion.div>

        {/* =============== KL FACILITIES =============== */}
        <motion.div
          className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-10 lg:p-12 mb-8 relative overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.08)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-indigo-600/8 -top-20 -right-20 pointer-events-none" />

          <div className="relative">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-indigo-500/20 overflow-hidden p-2">
                <Image
                  src="/kl copy.svg"
                  alt="Logo da KL Facilities"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  KL Facilities
                </h3>
                <p className="text-zinc-500">
                  ERP completo — Gestao de Facilities e Terceirizacao
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-10 border-l-2 border-indigo-500/30 pl-6">
              &ldquo;Antes da DMTN, a KL Facilities vivia uma realidade que
              muitos empresarios enfrentam: a bagunca operacional oculta em
              pilhas de papel. Eram cerca de{" "}
              <span className="text-indigo-300 font-semibold">
                350 folhas de ponto por funcionario
              </span>{" "}
              todos os meses. Um pesadelo logistico e administrativo, sem contar
              o risco de perdas e erros.&rdquo;
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {klStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-xl p-4 text-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto mb-2">
                    <stat.Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Modules */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
                Modulos entregues
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {klModules.map((mod, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-4 border transition-colors ${
                      mod.highlight
                        ? "bg-indigo-500/5 border-indigo-500/15"
                        : "bg-zinc-900/30 border-zinc-800/30"
                    }`}
                  >
                    <h5 className="text-white font-medium text-sm mb-1.5">
                      {mod.title}
                    </h5>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium text-zinc-500 px-3 py-1.5 rounded-full bg-zinc-800/40 border border-zinc-800/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-zinc-800/50">
              <div className="w-12 h-12 rounded-full border border-indigo-500/20 overflow-hidden">
                <Image
                  src="/luciano.png"
                  alt="Foto de Luciano Tuyuty"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold">Luciano Tuyuty</p>
                <p className="text-sm text-zinc-500">CEO — KL Facilities</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =============== MINI CASES =============== */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* RFID */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 sm:p-8 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/15">
                <Tag className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold">
                  DMTN Estoque Inteligente
                </h3>
                <p className="text-xs text-zinc-500">Sistema RFID completo</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {rfidStats.map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-900/40 rounded-xl p-3 text-center border border-zinc-800/30"
                >
                  <p className="text-[10px] text-zinc-600 mb-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      item.positive ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Hardware incluso com implementacao completa. Leitura por
              proximidade, relatorios automaticos e integracao com sistemas
              existentes.
            </p>
          </motion.div>

          {/* PedidosExpress */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 sm:p-8 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/15">
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold">PedidosExpress</h3>
                <p className="text-xs text-zinc-500">
                  Pedidos via WhatsApp
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              Sistema completo de pedidos via WhatsApp com apps nativos (Kotlin +
              iOS) que imprimem diretamente na impressora termica. Integrado com
              gestao de cardapio e acompanhamento em tempo real.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Kotlin",
                "Swift",
                "Impressao Termica",
                "WhatsApp API",
                "Cardapio Digital",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium text-zinc-500 px-2.5 py-1 rounded-full bg-zinc-800/40 border border-zinc-800/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>
    </section>
  );
}
