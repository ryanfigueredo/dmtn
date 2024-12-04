import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ToastProvider, ToastViewport } from "./_components/ui/toast";

export const metadata: Metadata = {
  title: "DMTN - Soluções Digitais Inovadoras",
  description:
    "Transformamos ideias em soluções digitais ágeis e eficientes. Conheça nossa abordagem moderna para impulsionar negócios com tecnologia de ponta.",
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "auto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
