
import { Button } from "@/app/_components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SectionPartners = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 py-36">
      {/* <div className="flex flex-wrap justify-center gap-8">
        <Image src="kl.svg" height={40} width={80} alt="" />
        <Image src="barber.svg" height={40} width={80} alt="" />
        <Image src="mury.svg" height={40} width={80} alt="" />
        <Image src="pedracom.svg" height={40} width={80} alt="" />
        <Image src="netshoes.svg" height={40} width={80} alt="" />
       
      </div> */}

      <div className="space-y-4 text-justify md:text-center">
        <h2 className="max-w-72 text-lg text-[#F5F5FF] md:max-w-96">
          Mais de 50 projetos realizados com sucesso para empresas de diversos
          setores. Junte-se a nós e transforme seu negócio em um case de
          sucesso.
        </h2>
        

        <div className="flex flex-col items-center">
          <a href="#agendar">
            <Button className="md:mt-8">
              Marcar uma conversa <ArrowRight />
            </Button>
          </a>
          <Link
            href="https://wa.me/5521997624873"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500/60 hover:text-zinc-400 transition-colors mt-2"
          >
            Prefere falar direto? WhatsApp →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionPartners;
