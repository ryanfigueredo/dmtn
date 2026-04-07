import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { ToastProvider, ToastViewport } from "./_components/ui/toast";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DMTN - Soluções Digitais Inovadoras",
  description:
    "Transformamos ideias em soluções digitais ágeis e eficientes. Conheça nossa abordagem moderna para impulsionar negócios com tecnologia de ponta.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className="font-outfit antialiased bg-[#28264F] overflow-x-hidden">
        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17323139020"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17323139020');
          `}
        </Script>

        {/* Apollo Tracking */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){
              var n=Math.random().toString(36).substring(7),
                  o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;
              o.async=true;
              o.defer=true;
              o.onload=function(){
                window.trackingFunctions.onLoad({appId:"69d41c7ed11bea000d07edbb"});
              };
              document.head.appendChild(o);
            }
            initApollo();
          `}
        </Script>

        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
