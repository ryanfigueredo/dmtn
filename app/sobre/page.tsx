import type { Metadata } from "next";
import SobreContent from "./content";

export const metadata: Metadata = {
  title: "Sobre a DMTN - Quem somos",
  description:
    "Software house em Curitiba que transforma processos em software. Conheça nossa missão, valores e o Jeito DMTN de Trabalhar.",
};

export default function SobrePage() {
  return <SobreContent />;
}
