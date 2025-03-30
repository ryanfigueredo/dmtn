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
    className="mt-4 pt-12 flex flex-col items-center gap-2 p-12 md:flex-row md:items-center md:justify-center md:gap-96"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Texto e botão */}
    <motion.div className="space-y-6 mt-9" variants={itemVariants}>
      <motion.h1
        className="text-4xl font-medium font-space-grotesk text-[#F5F5FF] md:max-w-72 md:text-5xl"
        variants={itemVariants}
      >
        O mundo constrói softwares e apps com a DMTN
      </motion.h1>
     
      <motion.div variants={itemVariants}>
        
      <Link
            className=""
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital"
          >
          <Button>
            Agendar uma consultoria <ArrowUpRight />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  
    {/* Container relativo para posicionamento */}
    <div className="relative flex justify-center items-center mt-4 h-[400px] w-[350px]">
      
      {/* Quadrado arredondado de fundo - fixo */}
      <div 
        className="absolute w-[333px] h-[333px] rounded-[40px] bg-[#7E8FFF]"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Notebook com animação e transbordamento */}
      <motion.div
        className=" z-10"
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10], // Maior amplitude de movimento
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%', 
          height: '120%'
        }}
      >
        <Image 
          src="/pc.png"
          alt="Notebook"
          width={2304}
          height={2497}
          className="object-contain w-full h-full"
          style={{
            filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.1))'
          }}
        />
      </motion.div>
    </div>
  </motion.div>
  );
};

export default HeaderSection;
