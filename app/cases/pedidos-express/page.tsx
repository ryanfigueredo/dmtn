import type { Metadata } from "next";
import PedidosExpressContent from "./content";

export const metadata: Metadata = {
  title: "PedidosExpress - DMTN Sistemas",
  description:
    "Sistema multi-tenant de gestão de pedidos com apps nativos, impressão térmica e integração WhatsApp via Meta API.",
};

export default function PedidosExpressPage() {
  return <PedidosExpressContent />;
}
