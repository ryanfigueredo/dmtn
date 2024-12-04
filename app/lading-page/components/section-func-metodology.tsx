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
      className="h-full bg-[#121212] p-10"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-4 text-center"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col gap-8 rounded-lg bg-white p-4 text-start md:max-w-2xl md:p-8"
          variants={itemVariants}
        >
          <div>
            <motion.h1
              className="text-2xl font-extrabold text-black"
              variants={itemVariants}
            >
              Consultoria de Diagnóstico Gratuita
            </motion.h1>
            <motion.p
              className="text-md my-2 text-justify text-black"
              variants={itemVariants}
            >
              Quer entender qual modalidade é ideal para o seu projeto?
              <br />
              <br />
              Agende uma consultoria gratuita e converse com nossos
              especialistas. Eles vão indicar o melhor caminho para o sucesso da
              sua empresa.
              <br />
              <br />
              Lembre-se: não existe ideia ruim, apenas ideias que ainda não
              foram lançadas. Clique no botão abaixo e agende sua consultoria
              agora!
            </motion.p>
            <motion.h1
              className="text-xl font-bold text-black"
              variants={itemVariants}
            >
              Vamos conversar sobre o seu projeto
            </motion.h1>
          </div>
          <motion.div variants={itemVariants}>
            <Link href="#form-section">
              <Button>
              Quero receber contato <ArrowRight />
              </Button>
            </Link>
            <p className="mt-4 text-xs">
              Nossos especialistas estão prontos para atender você!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FuncMetodology;
