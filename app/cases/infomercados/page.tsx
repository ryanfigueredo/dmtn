import type { Metadata } from "next";
import InfoMercadosContent from "./content";

export const metadata: Metadata = {
  title: "Projeto InfoMercados - DMTN Sistemas",
  description:
    "Pipeline de ingestão multi-ERP que conecta PostgreSQL, SQL Server e Firebird a uma API unificada com Supabase.",
};

export default function InfoMercadosPage() {
  return <InfoMercadosContent />;
}
