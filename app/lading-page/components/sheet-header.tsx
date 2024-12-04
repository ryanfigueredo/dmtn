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
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        {" "}
        <SheetHeader>
          <SheetTitle>DMTN Digital</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 py-4">
          <Link href="#consultoria-gratuita">Consultoria Gratuita</Link>
          <Link href="#solucoes">Soluções</Link>
          <Link href="#metodologia">Metodologia</Link>
          <Link href="#produtos">Produtos</Link>
          <Link
            className=""
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital"
          >
            <Button>Entrar em contato</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheetHeader;
