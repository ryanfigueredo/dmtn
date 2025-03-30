"use client";

import React from "react";
import { Tractor, ShoppingCart, Globe, ChefHat, ArrowRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesSection: React.FC = () => {
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Delay automático para os filhos
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="solucoes"
      className="relative py-20 md:mt-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Apenas anima ao entrar na viewport
      variants={containerVariants}
    >
      <div className="container mx-auto px-8">
        {/* Título e subtítulo */}
        <motion.div className="mb-12 text-center" variants={containerVariants}>
          <motion.h2
            className="text-2xl font-bold text-[#353232] md:text-4xl"
            variants={textVariants}
          >
            Soluções Personalizadas para Sua Necessidade
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-[#353232] opacity-70"
            variants={textVariants}
          >
            Transformamos, aprimoramos e impulsionamos negócios de todos os
            tamanhos pequenos, médios ou grandes com agilidade e sem
            complicação.
          </motion.p>
        </motion.div>

        {/* Cartões de serviços */}
        <motion.div className="grid grid-cols-1 px-2 gap-8 md:grid-cols-2">
          {[
            {
              Icon: ChefHat,
              title: "Padarias",
              description:
                "Criação de um aplicativo ou sistema para gerenciar pedidos, controlar entregas de pães e manter um catálogo digital atualizado para seus clientes.",
              bgColor: "bg-[#5451A1]",
              textColor: "text-white",
              circleColor: "bg-[#434173]",
            },
            {
              Icon: Tractor,
              title: "Agricultura e Pecuária",
              description:
                "Painel de controle para anotar demandas pecuárias, gerenciar estoque de insumos e acompanhar a produtividade da fazenda de forma eficiente.",
              bgColor: "bg-white",
              textColor: "text-[#353232]",
              circleColor: "bg-white",
            },
            {
              Icon: ShoppingCart,
              title: "Comércio e Lojas",
              description:
                "Sistemas de PDV para emissão de notas fiscais, controle de estoque em tempo real, e integração com plataformas de pagamento.",
              bgColor: "bg-white",
              textColor: "text-[#353232]",
              circleColor: "bg-white",
            },
            {
              Icon: Globe,
              title: "Negócios Digitais",
              description:
                "Desenvolvimento de plataformas e-commerce com integração para pagamento e envio automático de produtos.",
              bgColor: "bg-white",
              textColor: "text-[#353232]",
              circleColor: "bg-white",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center rounded-xl ${card.bgColor} p-10 text-center ${card.textColor} shadow-md`}
              variants={cardVariants}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`absolute h-16 w-16 rounded-full ${card.circleColor} shadow-[0_1px_5px_rgba(0,0,0,0.25)]`}
                ></div>
                <card.Icon className="relative z-10" />
              </div>
              <h3 className="mt-8 text-lg font-bold">{card.title}</h3>
              <p className="mt-2   text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto final e botão */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-6 text-center"
          variants={containerVariants}
        >
          <motion.p
            className="mt-8 text-xl font-bold text-[#353232]"
            variants={textVariants}
          >
            Vamos te ajudar a estabelecer sua empresa através da Tecnologia,
            design e estratégia personalizada.
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Link href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital">
              <Button>
              Marcar uma conversa <ArrowRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
