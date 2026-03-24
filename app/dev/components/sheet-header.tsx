import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "@/app/_components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const CustomSheetHeader = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#0a0a1a] border-zinc-800/50">
        <SheetHeader>
          <SheetTitle className="text-white">DMTN Digital</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 py-6">
          <a href="#solucoes" className="text-zinc-300 hover:text-white transition-colors">
            Soluções
          </a>
          <a href="#cases" className="text-zinc-300 hover:text-white transition-colors">
            Cases
          </a>
          <a href="#metodologia" className="text-zinc-300 hover:text-white transition-colors">
            Metodologia
          </a>
          <a href="#tecnologias" className="text-zinc-300 hover:text-white transition-colors">
            Tecnologias
          </a>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://crm.dmtn.com.br/apresentacao"
            className="mt-4"
          >
            <Button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white">
              Falar com especialista
            </Button>
          </Link>
          <Link
            href="https://wa.me/5521997624873"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-[11px] text-zinc-500 hover:text-zinc-400 transition-colors mt-2"
          >
            Prefere falar direto? WhatsApp →
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheetHeader;
