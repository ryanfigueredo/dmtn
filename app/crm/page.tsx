import type { Metadata } from "next";
import CrmLanding from "./content";

export const metadata: Metadata = {
  title: "CRM DMTN — Gestao comercial completa para sua empresa",
  description:
    "CRM completo com leads, propostas, NFS-e, WhatsApp, automacoes e financeiro integrado. Feito sob medida pela DMTN Sistemas.",
  alternates: { canonical: "/crm" },
  openGraph: {
    title: "CRM DMTN — Gestao comercial completa",
    description:
      "Leads, propostas, NFS-e, WhatsApp, automacoes e financeiro em um so lugar.",
    url: "https://www.dmtn.com.br/crm",
    type: "website",
    locale: "pt_BR",
    siteName: "DMTN Sistemas",
  },
};

export default function Page() {
  return <CrmLanding />;
}
