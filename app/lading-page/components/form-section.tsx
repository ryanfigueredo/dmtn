"use client";

import React, { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion"; // Importando motion

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import {
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/app/_components/ui/toast";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [showToast, setShowToast] = useState(false);

  // Estado para controlar a animação de quando os elementos entram na tela
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Refs para os elementos
  const formRef = useRef(null);
  const sidebarRef = useRef(null);

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o e-mail.");
      }

      setShowToast(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setShowToast(true);
    }
  };

  useEffect(() => {
    // Intersection Observer para detectar quando os elementos entram na tela
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // 10% do elemento visível
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === formRef.current) {
          setIsFormVisible(entry.isIntersecting);
        }
        if (entry.target === sidebarRef.current) {
          setIsSidebarVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (formRef.current) observer.observe(formRef.current);
    if (sidebarRef.current) observer.observe(sidebarRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (sidebarRef.current) observer.unobserve(sidebarRef.current);
    };
  }, []);

  return (
    <div className="my-10 px-8 md:my-20 md:px-2">
      <div className="flex flex-col justify-center gap-8 md:w-full md:flex-row">
        {/* Formulário de contato */}
        <motion.div
          ref={formRef}
          className="md:w-full md:max-w-lg"
          initial={{ opacity: 0, y: -20 }} // Inicia invisível e um pouco acima
          animate={{
            opacity: isFormVisible ? 1 : 0,
            y: isFormVisible ? 0 : -20,
          }} // Animação de opacidade e movimento no eixo Y
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-2xl font-bold">Entre em contato</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Explique brevemente suas necessidades"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Por favor, seja o mais detalhado possível.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </Form>

          {showToast && (
            <Toast>
              <ToastTitle>Email enviado!</ToastTitle>
              <ToastDescription>
                Aguarde que entraremos em contato em breve.
              </ToastDescription>
            </Toast>
          )}
        </motion.div>

        {/* Área lateral com informações */}
        <motion.div
          ref={sidebarRef}
          className="space-y-6 md:block md:max-w-md"
          initial={{ opacity: 0 }} // Inicialmente invisível
          animate={{ opacity: isSidebarVisible ? 1 : 0 }} // Animação de visibilidade
          transition={{ duration: 0.5 }} // Tempo de animação
        >
          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="mb-4 text-lg font-semibold">
              Nosso Tempo de Resposta
            </h3>
            <p>Receba uma resposta em até 24 horas úteis!</p>
          </div>

          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="mb-4 text-lg font-semibold">
              Por que escolher a DMTN?
            </h3>
            <p>
              A DMTN é especializada em soluções digitais ágeis e eficientes.
              Com uma equipe de especialistas, estamos prontos para ajudar seu
              negócio a crescer.
            </p>
          </div>

          <div className="rounded-lg bg-gray-100 p-6 shadow-md">
            <h3 className="mb-4 text-lg font-semibold">Nosso Suporte</h3>
            <p>
              Conte com nosso suporte dedicado para tirar todas as suas dúvidas!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
