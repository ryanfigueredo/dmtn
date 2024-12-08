"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MetodologiaSection() {
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Anima os filhos em sequência
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="metodologia"
      className="flex flex-col items-center justify-center space-y-12 pt-24"
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      {/* Título e descrição */}
      <motion.div className="mb-12 text-center" variants={itemVariants}>
        <h1 className="text-3xl font-bold sm:text-4xl">Metodologia DMTN</h1>
        <p className="mx-auto mt-4 font-medium text-gray-600 sm:max-w-lg">
          Criamos uma abordagem própria para impulsionar e transformar negócios,
          descomplicando desafios complexos por meio da tecnologia. Conheça a
          Metodologia DMTN:
        </p>
      </motion.div>

      {/* Conteúdo principal */}
      <motion.div
        className="space-y-8 pb-28 text-[#353232]"
        variants={containerVariants}
      >
        {/* Primeira linha */}
        <motion.div
          className="flex flex-col gap-10 md:flex-row"
          variants={containerVariants}
        >
          {/* Quadro 1 */}
          <motion.div
            className="w-full rounded bg-gray-100 p-8 md:w-80"
            variants={itemVariants}
          >
            <div className="text-justify">
              <h2 className="text-2xl font-bold">01 - Explorar</h2>
              <p className="mt-2">
                Entendemos profundamente o seu negócio e descobrimos
                oportunidades de crescimento.
              </p>
            </div>
            <Image
              src="/explorar.svg"
              alt="Explorar"
              width={200}
              height={200}
              className="mt-4"
            />
          </motion.div>

          {/* Quadro 2 */}
          <motion.div
            className="flex flex-col items-center justify-end rounded bg-gray-100 p-8 md:w-96"
            variants={itemVariants}
          >
            <Image
              src="/planejar.svg"
              alt="Planejar"
              width={200}
              height={200}
              className="mb-4"
            />
            <div className="">
              <h2 className="text-2xl font-bold">02 - Planejar</h2>
              <p className="mt-2">
                Estruturamos soluções estratégicas com um design centrado no
                usuário.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Segunda linha */}
        <motion.div
          className="flex flex-col gap-10 md:flex-row"
          variants={containerVariants}
        >
          {/* Quadro 3 */}
          <motion.div
            className="rounded bg-gray-100 p-8 md:w-96"
            variants={itemVariants}
          >
            <Image
              src="/construir.svg"
              alt="Construir"
              width={200}
              height={200}
              className="mb-4"
            />
            <div className="text-justify">
              <h2 className="text-2xl font-bold">03 - Construir</h2>
              <p className="mt-2">
                Desenvolvemos seu projeto com as melhores práticas e tecnologias
                atuais.
              </p>
            </div>
          </motion.div>

          {/* Quadro 4 */}
          <motion.div
            className="flex flex-col justify-between rounded bg-gray-100 p-8 md:w-80"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-2xl font-bold">04 - Lançar</h2>
              <p className="mt-2">
                Garantimos uma entrega eficiente e segura, pronta para escalar.
              </p>
            </div>
            <Image
              src="/lancar.svg"
              alt="Lançar"
              width={300}
              height={200}
              className="mt-4"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
