"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  ScanFace,
  MessageSquare,
  Tag,
  Shield,
} from "lucide-react";

const services = [
  {
    Icon: Monitor,
    title: "ERPs e Sistemas de Gestao",
    desc: "Sistemas completos sob medida: financeiro, RH, operacoes, compliance, auditoria e dashboards em tempo real.",
    tag: "Web App",
  },
  {
    Icon: Smartphone,
    title: "Apps Nativos iOS e Android",
    desc: "Aplicativos nativos em Kotlin e Swift, alem de apps cross-platform com React Native e Expo.",
    tag: "Mobile",
  },
  {
    Icon: ScanFace,
    title: "Ponto Digital e Biometria",
    desc: "Reconhecimento facial, geofence GPS, selfie com validacao, relogios EVO integrados via WebSocket.",
    tag: "IoT + Mobile",
  },
  {
    Icon: MessageSquare,
    title: "IA e Automacao",
    desc: "Chatbots inteligentes, qualificacao de leads automatica, atendimento via WhatsApp com IA generativa.",
    tag: "IA",
  },
  {
    Icon: Tag,
    title: "Controle RFID",
    desc: "Inventario em 15 minutos com 99,9% de precisao. Hardware incluso, implementacao completa.",
    tag: "IoT",
  },
  {
    Icon: Shield,
    title: "Compliance e LGPD",
    desc: "Termos digitais, exclusao de dados, conformidade juridica e manuais tecnicos integrados ao sistema.",
    tag: "Juridico",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-24 relative">
      {/* Orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-indigo-600/5 top-0 -left-[200px] pointer-events-none" />

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
            Solucoes que{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              movem negocios
            </span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Da ideia ao produto em producao. Construimos sistemas robustos que
            resolvem problemas reais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300 h-full relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <service.Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-zinc-600 px-2.5 py-1 rounded-full bg-zinc-800/50">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
