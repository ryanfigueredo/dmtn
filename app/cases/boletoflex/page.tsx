import type { Metadata } from "next";
import BoletoFlexContent from "./content";

export const metadata: Metadata = {
  title: "Projeto BoletoFlex - DMTN Sistemas",
  description:
    "Sistema de gestão de duplicatas e boletos com automação de cobranças e controle financeiro completo.",
};

export default function BoletoFlexPage() {
  return <BoletoFlexContent />;
}
