"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderSection = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Anima os filhos em sequência
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="mt-10 flex flex-col items-center gap-2 p-12 md:flex-row md:items-center md:justify-center md:gap-96"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Texto e botão */}
      <motion.div className="space-y-6" variants={itemVariants}>
        <motion.h1
          className="text-4xl font-bold text-[#353232] md:max-w-72 md:text-5xl"
          variants={itemVariants}
        >
          Sua Solução 
          Digital 
          Começa Aqui
        </motion.h1>
        <motion.p
          className="text-justify text-base text-[#353232] md:w-56 md:text-lg"
          variants={itemVariants}
        >
          Realize uma consultoria gratuita para tirar sua ideia do papel com tecnologia ágil
          e eficiente.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="#form-section">
          <Button>
            Iniciar meu projeto <ArrowUpRight />
          </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Imagem */}
      <motion.div className="flex justify-center mt-4" variants={itemVariants}>
        <Image
          src="/working.png"
          alt="Ilustração de lâmpadas representando ideias"
          className="h-auto w-auto max-w-xs md:max-w-md"
          height={473}
          width={474}
          priority={true}
          onDragStart={handleDragStart} // Evitar arrastar a imagem
        />
      </motion.div>
    </motion.div>
  );
};

export default HeaderSection;
