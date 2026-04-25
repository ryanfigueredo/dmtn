import type { Metadata } from "next";
import KLFacilitiesContent from "./content";

export const metadata: Metadata = {
  title: "Case KL Facilities - DMTN Sistemas",
  description:
    "ERP completo para gestão de facilities e terceirização. 500 folhas de ponto/mês eliminadas, 6 apps nativos, 100% digital.",
};

export default function KLFacilitiesPage() {
  return <KLFacilitiesContent />;
}
