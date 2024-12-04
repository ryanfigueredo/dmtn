import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CustomSheetHeader from "./sheet-header";

const Header = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between rounded-full border border-solid border-[#868585] p-6 md:p-10">
      <div>
        <Image
          height={30}
          width={50}
          className="md:h-[55px] md:w-[80px]"
          src="/dmtn.svg"
          alt="Logo"
        />
      </div>

      <div className="hidden gap-4 md:flex">
        <Link href="#consultoria-gratuita">Consultoria Gratuita</Link>
        <Link href="#solucoes">Soluções</Link>
        <Link href="#metodologia">Metodologia</Link>
        <Link href="#form-section">Produtos</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Link
            className=""
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital"
          >
            <Button>Entrar em contato</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <CustomSheetHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
