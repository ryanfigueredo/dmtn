"use client";

import Header from "@/app/dev/components/header";
import Footer from "@/app/dev/components/footer";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  FileText,
  Receipt,
  MessageSquare,
  BarChart3,
  Zap,
  Target,
  Wallet,
  CalendarDays,
  Mail,
  ShieldCheck,
  Smartphone,
  Globe,
  Layers,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Building2,
  Banknote,
} from "lucide-react";
import { useDiagnosticChat } from "@/app/_components/diagnostic-chat-provider";
import {
  trackConversion,
  trackEvent,
  CONVERSION_SEND_TO,
} from "@/app/_lib/gtag";

// ─── Feature data ──────────────────────────────────────────

const modules = [
  {
    icon: Users,
    title: "Leads & Pipeline",
    desc: "Kanban visual com arrasta-e-solta, funil de vendas, deteccao de duplicados e multi-visualizacoes (tabela, calendario, mapa).",
    color: "indigo",
  },
  {
    icon: MessageSquare,
    title: "Inbox WhatsApp",
    desc: "Conversas do WhatsApp integradas ao CRM. Prioridade automatica por relevancia, historico completo vinculado ao lead.",
    color: "emerald",
  },
  {
    icon: FileText,
    title: "Propostas & Contratos",
    desc: "Crie propostas profissionais com PDF automatico, envie e acompanhe aceite. Contratos com fluxo de aprovacao.",
    color: "violet",
  },
  {
    icon: Receipt,
    title: "Notas Fiscais (NFS-e)",
    desc: "Emissao de NFS-e direto do CRM, multiplos servicos cadastrados, consulta SEFIN, DANFSE em PDF e cancelamento.",
    color: "sky",
  },
  {
    icon: Wallet,
    title: "Financeiro Completo",
    desc: "Faturamento realizado vs. previsto, fluxo de caixa com categorias, entradas recorrentes e visao mensal detalhada.",
    color: "amber",
  },
  {
    icon: Zap,
    title: "Automacoes",
    desc: "Crie fluxos automaticos: quando um lead chega, envie e-mail, WhatsApp, crie tarefa ou dispare webhook. Zero codigo.",
    color: "rose",
  },
  {
    icon: Target,
    title: "Prospeccao",
    desc: "Busca de empresas por CNPJ com dados da Receita Federal. Crie listas de prospects e converta em leads com um clique.",
    color: "cyan",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Campanhas com editor HTML, templates prontos, agendamento, analytics de entrega e gestao de destinatarios.",
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Relatorios",
    desc: "Metricas em tempo real, fontes de leads, atividades recentes, reunioes do dia e analise por periodo.",
    color: "teal",
  },
];

const integrations = [
  {
    icon: Smartphone,
    name: "WhatsApp",
    desc: "Conexao direta via QR code",
  },
  {
    icon: Globe,
    name: "Meta Ads",
    desc: "Facebook & Instagram Leads",
  },
  {
    icon: Banknote,
    name: "BTG Empresas",
    desc: "Cobrancas e dados bancarios",
  },
  {
    icon: CalendarDays,
    name: "Google Calendar",
    desc: "Sync de reunioes e agenda",
  },
  {
    icon: Sparkles,
    name: "IA (Claude)",
    desc: "Assistente inteligente integrado",
  },
  {
    icon: Layers,
    name: "Objetos Custom",
    desc: "Modele dados sob medida",
  },
];

const extras = [
  "Calculadora trabalhista (INSS, IRRF)",
  "Tickets internos com prioridade",
  "Calendario com agendamento",
  "Tarefas com datas e conclusao",
  "Permissoes por cargo (admin, SDR, dev)",
  "Comentarios de Facebook Ads",
  "Jornada do heroi (customer journey)",
  "Certificado digital A1 para NFS-e",
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  indigo: { bg: "bg-indigo-500/10", icon: "text-indigo-400", border: "border-indigo-500/20" },
  emerald: { bg: "bg-emerald-500/10", icon: "text-emerald-400", border: "border-emerald-500/20" },
  violet: { bg: "bg-violet-500/10", icon: "text-violet-400", border: "border-violet-500/20" },
  sky: { bg: "bg-sky-500/10", icon: "text-sky-400", border: "border-sky-500/20" },
  amber: { bg: "bg-amber-500/10", icon: "text-amber-400", border: "border-amber-500/20" },
  rose: { bg: "bg-rose-500/10", icon: "text-rose-400", border: "border-rose-500/20" },
  cyan: { bg: "bg-cyan-500/10", icon: "text-cyan-400", border: "border-cyan-500/20" },
  purple: { bg: "bg-purple-500/10", icon: "text-purple-400", border: "border-purple-500/20" },
  teal: { bg: "bg-teal-500/10", icon: "text-teal-400", border: "border-teal-500/20" },
};

// ─── Component ─────────────────────────────────────────────

export default function CrmLanding() {
  const { openChat } = useDiagnosticChat();

  function handleCta() {
    trackConversion(CONVERSION_SEND_TO.scheduleClick);
    trackEvent("cta_click", { location: "crm_lp", label: "CRM CTA" });
    openChat();
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0F1629]">
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[120px] bg-indigo-600/15 -top-[300px] -right-[200px] pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] bg-purple-600/8 bottom-0 -left-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            CRM feito sob medida pela DMTN
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-grotesk font-bold leading-[1.12] tracking-tight text-white mb-6">
            Toda a sua operacao comercial
            <br />
            em um unico lugar —{" "}
            <span className="text-indigo-400">
              do lead ao boleto.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Leads, WhatsApp, propostas, NFS-e, financeiro, automacoes e IA integrados.
            Sem gambiarras, sem 10 ferramentas diferentes.
            Um CRM que funciona do jeito que sua empresa precisa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCta}
              className="group inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Quero conhecer o CRM
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <Link
              href="#modulos"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium text-base px-6 py-4 rounded-2xl transition-colors"
            >
              Ver funcionalidades
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Social proof bar ──────────────────────────────── */}
      <section className="bg-[#0F1629] border-y border-white/[0.04] py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Emissao de NFS-e integrada
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            WhatsApp nativo (sem API paga)
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            IA generativa embutida
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Zero mensalidade de terceiros
          </span>
        </div>
      </section>

      {/* ─── Modules grid ──────────────────────────────────── */}
      <section id="modulos" className="bg-[#0F1629] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-3">
              Funcionalidades
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-4">
              Tudo que voce precisa, nada que voce nao usa
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Cada modulo foi construido pensando em operacoes reais de vendas e
              servicos B2B. Sem bloatware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => {
              const c = colorMap[m.color] || colorMap.indigo;
              return (
                <div
                  key={m.title}
                  className={`group relative p-6 rounded-2xl border ${c.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}
                  >
                    <m.icon className={`w-5 h-5 ${c.icon}`} />
                  </div>
                  <h3 className="text-lg font-grotesk font-semibold text-white mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Integrations ──────────────────────────────────── */}
      <section className="bg-[#0B1120] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-3">
              Integracoes
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-4">
              Conectado com as ferramentas que voce ja usa
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((i) => (
              <div
                key={i.name}
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3">
                  <i.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  {i.name}
                </p>
                <p className="text-xs text-slate-500">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works / Differentials ──────────────────── */}
      <section className="bg-[#0F1629] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-400 tracking-wide uppercase mb-3">
                Por que o CRM DMTN?
              </p>
              <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-6">
                Construido sob medida, nao adaptado de um template
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Diferente de CRMs genericos que voce precisa &quot;dar um jeito&quot;
                de usar, o CRM DMTN foi construido a partir de operacoes reais de
                empresas B2B brasileiras. Emissao de nota fiscal, WhatsApp sem
                custo extra, financeiro integrado — tudo no mesmo lugar.
              </p>

              <div className="space-y-4">
                {[
                  "Sem custo por usuario — preco fixo",
                  "NFS-e integrada (sem sistema de nota separado)",
                  "WhatsApp conectado via QR (sem API paga Meta)",
                  "IA que entende seu pipeline de vendas",
                  "Personalizado para seu processo comercial",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — extras list */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-base font-grotesk font-semibold text-white">
                    E tem mais...
                  </h3>
                  <p className="text-xs text-slate-500">
                    Funcionalidades adicionais incluidas
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {extras.map((e) => (
                  <div
                    key={e}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                  >
                    <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-sm text-slate-300">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA final ─────────────────────────────────────── */}
      <section className="bg-[#0B1120] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-6">
            Pronto pra ter um CRM que{" "}
            <span className="text-indigo-400">realmente funciona?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Agende um diagnostico gratuito. Vamos entender sua operacao e mostrar
            como o CRM DMTN se encaixa no seu processo comercial.
          </p>
          <button
            onClick={handleCta}
            className="group inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base px-10 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            Agendar diagnostico gratuito
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="text-xs text-slate-600 mt-4">
            Sem compromisso. Sem cartao de credito.
          </p>
        </div>
      </section>

      {/* Curve transition into footer */}
      <div className="bg-[#0B1120]">
        <svg
          className="w-full block -mb-px"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ height: "40px" }}
        >
          <path
            d="M0,60 C360,15 1080,15 1440,60 L1440,60 L0,60 Z"
            fill="#0F1629"
          />
        </svg>
      </div>

      <Footer />
    </div>
  );
}
