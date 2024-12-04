"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const FuncMetodologyTitle = () => {
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

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <motion.div
      id="consultoria-gratuita"
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 pb-4 text-center md:pb-10"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h1
        className="text-2xl font-bold md:text-3xl"
        variants={itemVariants}
      >
        Como funciona nosso método?
      </motion.h1>
      <motion.p className="font-bold opacity-50" variants={itemVariants}>
        Temos a solução ideal para suas necessidades, lançando seu projeto de
        forma organizada e segura, sem complicações.
      </motion.p>
    </motion.div>
  );
};

export default FuncMetodologyTitle;
