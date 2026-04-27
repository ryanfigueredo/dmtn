"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDiagnosticChat } from "@/app/_components/diagnostic-chat-provider";

const technologies = [
  { name: "Firebase", logo: "/techs/fire.svg" },
  { name: "Neon", logo: "/techs/neon.svg" },
  { name: "Next.js", logo: "/techs/nextjs.svg" },
  { name: "WebFlow", logo: "/techs/webflow.svg" },
  { name: "AWS", logo: "/techs/aws.svg" },
  { name: "MP", logo: "/techs/mp.svg" },
  { name: "Stripe", logo: "/techs/stripe.svg" },
  { name: "Bubble", logo: "/techs/bubble.svg" },
  { name: "Figma", logo: "/techs/figma.svg" },
  { name: "Supabase", logo: "/techs/supabase.svg" },
];

export default function TechSection() {
  const { openChat } = useDiagnosticChat();
  return (
    <section
      id="tecnologias"
      className="py-24 relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <motion.div
            className="lg:w-[40%] space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] text-indigo-300 text-xs font-medium tracking-wider uppercase">
              Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Tecnologias e ferramentas mais avançadas do mercado
            </h2>
            <p className="text-zinc-400">
              Projetos incríveis exigem ferramentas incríveis. Usamos o que há de
              melhor para entregar performance, segurança e escalabilidade.
            </p>
            <div className="flex flex-col">
              <button
                onClick={() => openChat()}
                className="group inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Começar agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <Link
                href="https://wa.me/5521997624873"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500/60 hover:text-zinc-400 transition-colors mt-1.5"
              >
                Prefere falar direto? WhatsApp →
              </Link>
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="lg:w-[60%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  className="group relative flex flex-col items-center justify-center gap-2 aspect-square rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Image
                    width={32}
                    height={32}
                    src={tech.logo}
                    alt={tech.name}
                    className="h-8 w-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
