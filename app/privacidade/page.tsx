import type { Metadata } from "next";
import PrivacidadeContent from "./content";

export const metadata: Metadata = {
  title: "Política de Privacidade - DMTN Sistemas",
  description:
    "Saiba como a DMTN Sistemas coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
  openGraph: {
    title: "Política de Privacidade - DMTN Sistemas",
    description:
      "Saiba como a DMTN Sistemas coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
    type: "website",
    url: "https://www.dmtn.com.br/privacidade",
  },
};

export default function PrivacidadePage() {
  return <PrivacidadeContent />;
}
