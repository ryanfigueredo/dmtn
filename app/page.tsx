import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./_components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex w-full h-full justify-center  bg-[#28264F] p-6">
      <div className=" space-y-24 text-center">
        <Image
          src="/dmtn.svg"
          alt="DMTN"
          width={80}
          height={60}
          className="mx-auto filter brightness-0 invert"
        />
        <h1 className="text-4xl font-grotesk font-bold text-[#F5F5FF]">
          Soluções eficientes são <br />desenvolvidas pela DMTN.
        </h1>
       
        <div className="bg-[#F5F5FF] flex w-full max-w-[700px] mx-auto rounded-3xl overflow-hidden">
          {/* Container de texto */}
          <div className="flex-1 flex flex-col text-left justify-between p-8">
            <div>
              <h1 className="text-xl font-bold text-[#1F1E3E] mb-4">
                Desenvolva seu software sob medida com a DMTN
              </h1>
              <p className="text-lg text-[#1F1E3E]/80">
                Na DMTN, criamos soluções personalizadas para impulsionar o crescimento do seu negócio. Do conceito à implementação
              </p>
            </div>
            
            <Button asChild className="w-fit bg-[#7E8FFF] text-[#F5F5FF] rounded-full hover:bg-[#7E8FFF]/90">
              <Link href="/dev" className="flex items-center gap-2">
                Saiba mais
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Container da imagem */}
          <div className="flex-1 relative">
            <Image 
              src="/block1.png"
              alt="DMTN"
              fill
              className="object-cover"
            />
          </div>
        </div>

     
        <div className="flex items-center justify-center space-x-4">
          <div className=" bg-[#1F1E3E] h-16 w-16 items-center flex justify-center rounded-xl">
            <Link
              href="https://api.whatsapp.com/send?phone=5521999999999&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20DMTN."
              
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              src="/wpp.svg"
              alt="whats app"
              width={28}
              height={28}
            />
            </Link>
            
          </div>

          <div className=" bg-[#1F1E3E] h-16 w-16 items-center flex justify-center rounded-xl">
            <Link 
              href="https://www.instagram.com/dmtnsistemas/"
              target="_blank"
              rel="noopener noreferrer">
            
            <Image
              src="/insta.svg"
              alt="Instagram"
              width={28}
              height={28}
            />
            </Link>
          </div>

          <div className=" bg-[#1F1E3E] h-16 w-16 items-center flex justify-center rounded-xl">
            
            <Link 
              href="https://www.facebook.com/dmtnsistemas"
              target="_blank"
                rel="noopener noreferrer">

            <Image
              src="/fb.svg"
              alt="Facebook"
              width={28}
              height={28}
            />
            </Link>
          </div>

          <div className=" bg-[#1F1E3E] h-16 w-16 items-center flex justify-center rounded-xl">
            <Link
              href="https://www.linkedin.com/company/dmtnsistemas/"
              target="_blank"
              rel="noopener noreferrer">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
            </Link>
          </div>
        </div>

      
        <div className="z-50 w-full">
          {/* Versão desktop (hidden em mobile) */}
          <div className="hidden md:flex md:w-screen md:px-10 text-sm justify-between text-[#7E8FFF] relative">
            <p>Rua Visconde de Pirajá 414, Ipanema - RJ</p>
            <p className="absolute left-1/2 transform -translate-x-1/2">
              <a href="#" className="hover:underline">Política de Privacidade</a>
            </p>
            <p>@dmtnsistemas - 2025</p>
          </div>

          {/* Versão mobile (hidden em desktop) */}
          <div className="md:hidden flex flex-col items-center gap-4 py-4 text-sm text-[#7E8FFF]">
            <p>Rua Visconde de Pirajá 414, Ipanema - RJ</p>
            <p>
              <a href="#" className="hover:underline">Política de Privacidade</a>
            </p>
            <p>@dmtnsistemas - 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}