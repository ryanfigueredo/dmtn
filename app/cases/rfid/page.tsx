import type { Metadata } from "next";
import SaasRfidContent from "./content";

export const metadata: Metadata = {
  title: "RFID - DMTN Sistemas",
  description:
    "Plataforma de gestão de estoque com RFID, emissão de NFe, apps nativos Android/iOS e WhatsApp bot.",
};

export default function RfidPage() {
  return <SaasRfidContent />;
}
