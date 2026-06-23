import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { ToastProvider, ToastViewport } from "./_components/ui/toast";
import { DiagnosticChatProvider } from "./_components/diagnostic-chat-provider";
import CookieBanner from "./_components/cookie-banner";
import TrackingScripts from "./_components/tracking-scripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dmtn.com.br"),
  title: "Software Sob Medida para Empresas | DMTN Sistemas - Curitiba",
  description:
    "Software sob medida para empresas. A DMTN Sistemas cria ERPs, apps nativos e automações que eliminam retrabalho e geram resultados. Diagnóstico gratuito.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software Sob Medida para Empresas | DMTN Sistemas - Curitiba",
    description:
      "Software sob medida para empresas. A DMTN Sistemas cria ERPs, apps nativos e automações que eliminam retrabalho e geram resultados.",
    url: "https://www.dmtn.com.br",
    type: "website",
    locale: "pt_BR",
    siteName: "DMTN Sistemas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DMTN Sistemas - Software Sob Medida para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Sob Medida para Empresas | DMTN Sistemas - Curitiba",
    description:
      "Software sob medida para empresas. A DMTN Sistemas cria ERPs, apps nativos e automações que eliminam retrabalho e geram resultados.",
    images: ["/og-image.jpg"],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="font-outfit antialiased overflow-x-hidden">
        <TrackingScripts />

        <DiagnosticChatProvider>
          <ToastProvider>
            {children}
            <CookieBanner />
            <ToastViewport />
          </ToastProvider>
        </DiagnosticChatProvider>
      </body>
    </html>
  );
}
