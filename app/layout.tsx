import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { ToastProvider, ToastViewport } from "./_components/ui/toast";
import { DiagnosticChatProvider } from "./_components/diagnostic-chat-provider";
import Script from "next/script";

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
    type: "website",
    locale: "pt_BR",
    siteName: "DMTN Sistemas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Sob Medida para Empresas | DMTN Sistemas - Curitiba",
    description:
      "Software sob medida para empresas. A DMTN Sistemas cria ERPs, apps nativos e automações que eliminam retrabalho e geram resultados.",
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
        {/* Google Ads Tag — lazyOnload para não bloquear LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17323130920"
          strategy="lazyOnload"
        />
        <Script id="google-ads-tag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17323130920');
            gtag('event', 'conversion', {
              'send_to': 'AW-17323130920/1KCDCO7xgJ4cEKiAqMRA',
              'value': 1.0,
              'currency': 'BRL'
            });
          `}
        </Script>


        <DiagnosticChatProvider>
          <ToastProvider>
            {children}
            <ToastViewport />
          </ToastProvider>
        </DiagnosticChatProvider>
      </body>
    </html>
  );
}
