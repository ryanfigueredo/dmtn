"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/_components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function TechSection() {
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

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Anima os filhos em sequência
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center py-20 md:flex-row"
      initial="hidden"
      whileInView="visible" // Ativa a animação ao entrar no viewport
      viewport={{ once: true, amount: 0.2 }} // Configura quando a animação será ativada
      variants={containerVariants}
    >
      <motion.div className="w-96 space-y-6" variants={itemVariants}>
        <h1 className="text-2xl font-bold">
          Aplicamos as tecnologias e ferramentas mais avançadas do mercado no
          seu projeto.
        </h1>
        <p className="font-semibold text-[#353232] opacity-50">
          Projetos incríveis exigem ferramentas incríveis
        </p>
        <Button>
          Começar agora <ArrowUpRight />
        </Button>
      </motion.div>

      <motion.div className="px-8 py-12" variants={containerVariants}>
        <motion.div
          className="grid grid-cols-4 gap-8 md:grid-cols-5"
          variants={containerVariants}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative flex h-20 w-20 flex-col items-center justify-center space-y-2 rounded-full bg-white p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
              variants={itemVariants}
            >
              <Image
                width={32}
                height={32}
                src={tech.logo}
                alt={tech.name}
                className="h-8 w-8 object-contain transition-opacity duration-300 ease-in-out hover:opacity-80"
              />
              <p className="text-xs font-medium text-gray-700">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}