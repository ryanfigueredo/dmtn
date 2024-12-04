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
          <Link href="#">Consultoria Gratuita</Link>
          <Link href="#">Soluções</Link>
          <Link href="#">Metodologia</Link>
          <Link href="#">Produtos</Link>
          <Button className="mt-4">Entrar em contato</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheetHeader;
