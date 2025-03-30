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
          <Link href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital">Consultoria Gratuita</Link>
          <Link href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital">Soluções</Link>
          <Link href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital">Metodologia</Link>
          <Link href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital">Produtos</Link>
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
