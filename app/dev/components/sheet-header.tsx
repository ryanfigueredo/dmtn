"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "@/app/_components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { trackConversion, trackEvent, CONVERSION_SEND_TO } from "@/app/_lib/gtag";

const navLinks = [
  { label: "Soluções", href: "/solucoes", homeHref: "#solucoes" },
  { label: "Cases", href: "/cases/kl-facilities", homeHref: "#cases" },
  { label: "Sobre", href: "/sobre", homeHref: "#sobre" },
  { label: "Metodologia", href: "/#metodologia", homeHref: "#metodologia" },
];

const CustomSheetHeader = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-white/80"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#0F1629] border-white/[0.06]">
        <SheetHeader>
          <SheetTitle className="text-white">DMTN Sistemas</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={isHome ? link.homeHref : link.href}
              className="text-white/60 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={isHome ? "#agendar" : "/#agendar"}
            onClick={() => {
              trackConversion(CONVERSION_SEND_TO.scheduleClick);
              trackEvent("cta_click", { location: "mobile_sheet", label: "Falar com especialista" });
            }}
            className="mt-4"
          >
            <Button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white">
              Falar com especialista
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheetHeader;
