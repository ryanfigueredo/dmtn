"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomSheetHeader from "./sheet-header";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050510]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            height={24}
            width={40}
            className="brightness-0 invert opacity-90"
            src="/dmtn.svg"
            alt="DMTN"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#solucoes" className="hover:text-white transition-colors">
            Soluções
          </a>
          <a href="#cases" className="hover:text-white transition-colors">
            Cases
          </a>
          <a href="#metodologia" className="hover:text-white transition-colors">
            Metodologia
          </a>
          <a href="#tecnologias" className="hover:text-white transition-colors">
            Tecnologias
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center">
            <Link
              href="https://crm.dmtn.com.br/apresentacao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-medium px-5 py-2 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all"
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
