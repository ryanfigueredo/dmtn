import type { Metadata } from "next";
import DmtnCrmContent from "./content";

export const metadata: Metadata = {
  title: "CRM - DMTN Sistemas",
  description:
    "CRM completo com 12 módulos: WhatsApp bot, inbox multicanal, propostas, tickets, e-mail marketing, financeiro e IA.",
};

export default function DmtnCrmPage() {
  return <DmtnCrmContent />;
}
