"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Zap,
  CheckCircle,
  Smartphone,
  Star,
  Scale,
  BarChart3,
  ArrowRight,
  ExternalLink,
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
  { value: 500, suffix: "", label: "Folhas/mês eliminadas", Icon: Trash2 },
  { value: 90, suffix: "%", label: "Menos tempo operacional", Icon: Zap },
  { value: 100, suffix: "%", label: "Digital - zero papel", Icon: CheckCircle },
  { value: 6, suffix: "", label: "Apps nativos entregues", Icon: Smartphone },
];

const klModules = [
  {
    title: "Ponto Digital",
    desc: "App com selfie, GPS, geofence e modo offline. Reconhecimento facial via relógios EVO com servidor WebSocket dedicado.",
    highlight: true,
  },
  {
    title: "RH Completo",
    desc: "Gestão de colaboradores, crachás digitais, banco de talentos, vagas sociais e processos jurídicos trabalhistas.",
    highlight: false,
  },
  {
    title: "Checklists Operacionais",
    desc: "Inspeções em campo com fotos georreferenciadas, QR codes por unidade, templates personalizáveis e dashboard de conformidade.",
    highlight: false,
  },
  {
    title: "Apps Nativos",
    desc: "2 apps em Kotlin (Android) + 2 em Swift (iOS) + 2 em Expo. Para colaboradores e supervisores.",
    highlight: true,
  },
  {
    title: "Compliance e LGPD",
    desc: "Termos de implantação digitais, portal de exclusão de dados, manual técnico-jurídico e conformidade automatizada.",
    highlight: false,
  },
  {
    title: "Operacional",
    desc: "Controle de gasolina com rotas GPS, registro de incidentes por categoria, protocolos e auditoria completa.",
    highlight: false,
  },
];

const techStack = [
  "Next.js", "Prisma", "Kotlin", "Swift", "Expo", "Firebase",
  "WebSocket", "Looker Studio (Power BI do Google)", "Neon DB",
];

const mglTechs = ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "RBAC", "NR-15"];
const jeanTechs = ["Python", "PostgreSQL", "SQL Server", "Firebird", "Supabase", "API REST"];

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-5">
            Case de sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-[#0F1629] mb-4">
            KL Facilities - de 500 folhas de papel para zero
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            ERP completo para gestão de facilities e terceirização com 500+ colaboradores.
          </p>
        </motion.div>

        {/* =============== KL FACILITIES =============== */}
        <motion.div
          className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 lg:p-12 mb-8 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-500"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", duration: 0.55, bounce: 0, delay: 0.1 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 overflow-hidden p-2">
              <Image
                src="/kl copy.svg"
                alt="Logo da KL Facilities"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-[#0F1629]">
                KL Facilities
              </h3>
              <p className="text-slate-500">
                ERP completo - Gestão de Facilities e Terceirização
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 border-l-3 border-indigo-500 pl-6">
            &ldquo;Antes da DMTN, a KL Facilities vivia uma realidade que muitos
            empresários enfrentam: a bagunça operacional oculta em pilhas de papel.
            Eram cerca de{" "}
            <span className="text-indigo-600 font-semibold">
              500 folhas de ponto por mês
            </span>
            . Um pesadelo logístico e administrativo, sem contar o risco de perdas
            e erros.&rdquo;
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {klStats.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mx-auto mb-3">
                  <stat.Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <p className="text-2xl sm:text-3xl font-grotesk font-bold text-[#0F1629]">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Modules */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Módulos entregues
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {klModules.map((mod, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 border transition-colors ${
                    mod.highlight
                      ? "bg-indigo-50/50 border-indigo-100"
                      : "bg-slate-50/50 border-slate-100"
                  }`}
                >
                  <h5 className="text-[#0F1629] font-semibold text-sm mb-1.5">
                    {mod.title}
                  </h5>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* App Store / Play Store badges */}
          <div className="mb-8 p-5 rounded-xl bg-slate-50 border border-slate-100">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Apps publicados nas stores
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-[#0F1629] mb-1">KL Colaboradores</p>
                <p className="text-xs text-slate-500 mb-3">Ponto eletrônico para funcionários</p>
                <div className="flex gap-2">
                  <a
                    href="https://apps.apple.com/br/app/kl-colaboradores/id6757887033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0F1629] text-white text-xs font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kl.colaboradores"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0F1629] text-white text-xs font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                    Google Play
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F1629] mb-1">KL Facilities</p>
                <p className="text-xs text-slate-500 mb-3">Gestão para supervisores e gestores</p>
                <div className="flex gap-2">
                  <a
                    href="https://apps.apple.com/br/app/kl-facilities/id6757905858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0F1629] text-white text-xs font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kl.adm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0F1629] text-white text-xs font-medium hover:bg-[#1a2340] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium text-slate-500 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Author + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-indigo-100 overflow-hidden">
                <Image
                  src="/luciano.png"
                  alt="Foto de Luciano Tuyuty"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#0F1629] font-semibold">Luciano Tuyuty</p>
                <p className="text-sm text-slate-500">CEO - KL Facilities</p>
              </div>
              <div className="flex gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
            <Link
              href="/cases/kl-facilities"
              className="group inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors"
            >
              Ver case completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* =============== OUTROS PROJETOS =============== */}
        <motion.div
          className="text-center mb-8 mt-16"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", duration: 0.45, bounce: 0 }}
        >
          <h3 className="text-xl font-grotesk font-bold text-[#0F1629]">
            Outros projetos
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* MGL */}
          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 h-full hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-300"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", duration: 0.45, bounce: 0, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                <Scale className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[#0F1629] font-semibold">MGL Engenharia</h3>
                <p className="text-xs text-slate-500">Gestão de Perícias Trabalhistas</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Sistema completo para gestão de processos trabalhistas com controle
              de perícias (NR-1, NR-15), upload de fotos com armazenamento S3,
              laudos técnicos e controle de acesso por perfil (RBAC).
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {mglTechs.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium text-slate-500 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href="/cases/mgl-engenharia"
              className="group inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
            >
              Ver projeto
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* InfoMercados */}
          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 h-full hover:shadow-lg hover:shadow-slate-100 transition-shadow duration-300"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", duration: 0.45, bounce: 0, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                <BarChart3 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[#0F1629] font-semibold">InfoMercados</h3>
                <p className="text-xs text-slate-500">Integração ERP Multi-banco</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Pipeline de ingestão que conecta ERPs legados (PostgreSQL, SQL
              Server, Firebird) a uma API unificada com Supabase. Agente
              instalável por cliente com sync automático de vendas, estoque e
              financeiro.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {jeanTechs.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium text-slate-500 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href="/cases/infomercados"
              className="group inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
            >
              Ver projeto
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
