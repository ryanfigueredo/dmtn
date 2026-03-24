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
            Solucoes
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
            href="https://wa.me/5521997624873?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20DMTN"
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
