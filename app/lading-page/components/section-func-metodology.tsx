"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/app/_components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FuncMetodology = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
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
      ref={ref}
      className="h-full bg-[#121212] p-20"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4 text-center"
        variants={itemVariants}
      >
        
        <motion.div
          className="flex flex-col gap-8 rounded-lg bg-white p-4 md:w-92 text-justify  md:max-w-2xl md:p-8"
          variants={itemVariants}
        >
          <div>
            
            <motion.h1
              className="text-2xl font-extrabold text-black"
              variants={itemVariants}
            >
              Diagnóstico: o check-up do seu projeto
            </motion.h1>
            <motion.p
              className="text-md my-2 text-justify text-gray-800"
              variants={itemVariants}
            > 
            <div className="text-justify">
            Assim como em uma consulta médica, o diagnóstico do seu projeto é a etapa inicial e essencial para entender os sintomas, identificar problemas e prescrever as melhores soluções. 
  </div>
            
            <div className="mt-2 text-justify">
            Nossos especialistas atuam como médicos para o seu negócio, prontos para ouvir suas necessidades, realizar uma análise detalhada e indicar os melhores caminhos para alcançar resultados incríveis.
  </div>
             
            
            </motion.p>
          
          </div>
          <motion.div variants={itemVariants}>
            <Link href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital">
              <Button>
              Agendar meu diagnóstico <ArrowRight />
              </Button>
            </Link>
            <p className="mt-4 text-xs">
            Nossos especialistas estão prontos para ouvir você e cuidar do seu projeto!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FuncMetodology;
