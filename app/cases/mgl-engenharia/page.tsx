import type { Metadata } from "next";
import MGLContent from "./content";

export const metadata: Metadata = {
  title: "Projeto MGL Engenharia - DMTN Sistemas",
  description:
    "Sistema de gestão de perícias trabalhistas com controle NR-1, NR-15, upload de fotos e laudos técnicos.",
};

export default function MGLPage() {
  return <MGLContent />;
}
