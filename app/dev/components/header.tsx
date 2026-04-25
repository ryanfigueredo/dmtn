"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomSheetHeader from "./sheet-header";
import { trackConversion, trackEvent, CONVERSION_SEND_TO } from "@/app/_lib/gtag";

const navLinks = [
  {
    label: "Soluções",
    href: "/solucoes",
    homeHref: "#solucoes",
    children: [
      { label: "ERPs e Sistemas", href: "/cases/kl-facilities" },
      { label: "Apps Nativos", href: "/cases/pedidos-express" },
      { label: "Controle RFID", href: "/cases/rfid" },
      { label: "IA e Automação", href: "/solucoes" },
    ],
  },
  {
    label: "Cases",
    href: "/cases/kl-facilities",
    homeHref: "#cases",
    children: [
      { label: "KL Facilities", href: "/cases/kl-facilities" },
      { label: "Laudos Periciais MGL", href: "/cases/mgl-engenharia" },
      { label: "InfoMercados", href: "/cases/infomercados" },
      { label: "BoletoFlex", href: "/cases/boletoflex" },
      { label: "CRM", href: "/cases/crm" },
      { label: "RFID", href: "/cases/rfid" },
      { label: "PedidosExpress", href: "/cases/pedidos-express" },
    ],
  },
  {
    label: "Sobre",
    href: "/sobre",
    homeHref: "#sobre",
    children: [
      { label: "Sobre a DMTN", href: "/sobre" },
      { label: "Cases", href: "/cases/kl-facilities" },
      { label: "Metodologia", href: "/#metodologia" },
    ],
  },
  { label: "Metodologia", href: "/#metodologia", homeHref: "#metodologia" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1629]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className={`mx-auto px-10 md:px-16 lg:px-20 flex items-center transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
        {/* Logo - left */}
        <Link href="/" className="shrink-0">
          <Image
            height={40}
            width={64}
            className={`brightness-0 invert opacity-90 transition-all duration-500 hover:opacity-100 ${scrolled ? "scale-75" : "scale-100"}`}
            src="/dmtn.svg"
            alt="DMTN"
          />
        </Link>

        {/* Nav links - right-aligned, before CTA */}
        <nav className="hidden md:flex items-center gap-8 text-sm ml-auto mr-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  href={isHome ? link.homeHref : link.href}
                  className="text-white/60 hover:text-white transition-colors font-medium inline-flex items-center gap-1"
                >
                  {link.label}
                  <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-all group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[#0F1629]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-xl shadow-black/20 py-2 min-w-[180px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={isHome ? link.homeHref : link.href}
                className="text-white/60 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA - far right */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          <div className="hidden sm:flex items-center">
            <Link
              href={isHome ? "#agendar" : "/#agendar"}
              onClick={() => {
                trackConversion(CONVERSION_SEND_TO.scheduleClick);
                trackEvent("cta_click", { location: "header", label: "Falar com especialista" });
              }}
              className={`inline-flex text-sm font-semibold px-5 py-2 rounded-full transition-all ${
                scrolled
                  ? "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/20"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              Falar com especialista
            </Link>
          </div>
          <div className="md:hidden">
            <CustomSheetHeader />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
