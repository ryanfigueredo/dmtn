import React from "react";
import Image from "next/image";
import { CircleCheckBig, CircleX } from "lucide-react";

const ComparisonTable = () => {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-lg">
      {/* Cabeçalho com "DMTN" e "Outras opções" */}

      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-[#1D1D1D] text-white">
            <th className="text-left"></th>
            <th className="py-2 text-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/dmtn.svg"
                  alt="DMTN Logo"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
            </th>
            <th className="py-2 text-center">
              <div className="flex flex-col items-center">
                <p className="text-xs">
                  Outras <br />
                  opções
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              title: "Desenvolvimento Ágil por Sprints",
              dmtn: true,
              other: false,
            },
            {
              title: "Acompanhamento Contínuo e Transparente",
              dmtn: true,
              other: false,
            },
            { title: "Metodologia DMTN", dmtn: true, other: false },
            {
              title: "Sistema de Monitoramento Avançado",
              dmtn: true,
              other: false,
            },
            { title: "Custo-Benefício", dmtn: true, other: false },
            { title: "Design Inteligente (LD)", dmtn: true, other: false },
          ].map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#5451A1]" : "bg-[#1D1D1D]"
              } font-bold text-white`}
            >
              <td className="">{row.title}</td>
              <td className="py-2 text-center">
                {row.dmtn ? (
                  <CircleCheckBig color="white" />
                ) : (
                  <CircleX color="red" />
                )}
              </td>
              <td className="py-2 text-center">
                {row.other ? (
                  <CircleCheckBig color="white" />
                ) : (
                  <CircleX color="red" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
