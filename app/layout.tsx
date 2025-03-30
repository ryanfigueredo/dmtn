import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { ToastProvider, ToastViewport } from "./_components/ui/toast";

export const metadata: Metadata = {
  title: "DMTN - Soluções Digitais Inovadoras",
  description:
    "Transformamos ideias em soluções digitais ágeis e eficientes. Conheça nossa abordagem moderna para impulsionar negócios com tecnologia de ponta.",
};

// Configuração das fontes
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk", // Definindo como variável CSS
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit", // Definindo como variável CSS
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="font-outfit antialiased bg-[#28264F]">
        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}