import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] py-20 text-white">
      <div className="mx-auto flex items-start justify-center gap-8 space-y-8 md:flex-row md:items-start md:space-x-80 md:space-y-16">
        <div className="space-y-6 text-start md:text-left">
          <Image
            height={30}
            width={50}
            className="md:h-[55px] md:w-[80px]"
            src="/dmtnw.svg"
            alt="Logo"
          />
          
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#solucoes" className="hover:underline">
                Soluções
              </a>
            </li>
            <li>
              <a href="#metodologia" className="hover:underline">
                Metodologia
              </a>
            </li>
            <li>
              <a href="#produtos" className="hover:underline">
                Produtos
              </a>
            </li>
            <li>
              <a href="#consultoria" className="hover:underline">
                Consultoria gratuita
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6 text-start md:text-left">
         
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="https://wa.me/5521997624873?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20DMTN%20Digital"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 21 99762-4873
              </Link>
            </li>
            <li>
              <Link href="#trabalhe-conosco" className="">
                contato@dmtn.com.br
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/dmtndigital/" target="_blank" className="">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#trabalhe-conosco" className="">
                Trabalhe conosco
              </Link>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-white"></div>

      <div className="mt-4 flex justify-center p-6 text-center text-sm text-white md:max-w-full">
        Direitos Reservados © | DMTN DIGITAL CNPJ 00.000.000/0001-00 | Visconde
        de Pirajá 414, Ipanema - RJ
      </div>
    </footer>
  );
};

export default Footer;
