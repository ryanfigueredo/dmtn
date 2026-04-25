import type { Metadata } from "next";
import SolucoesContent from "./content";

export const metadata: Metadata = {
  title: "Soluções - DMTN Sistemas",
  description:
    "ERPs, apps nativos, ponto digital, IA e automação, controle RFID e compliance LGPD. Soluções sob medida para sua empresa.",
};

export default function SolucoesPage() {
  return <SolucoesContent />;
}
