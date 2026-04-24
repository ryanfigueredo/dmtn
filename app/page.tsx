import React from "react";
import Header from "./dev/components/header";
import ServicesSection from "./dev/components/services-section";
import HeaderSection from "./dev/components/section-header";
import MetodologiaSection from "./dev/components/section-metodology";
import TechSection from "./dev/components/techs-section";
import Footer from "./dev/components/footer";
import FuncMetodology from "./dev/components/section-func-metodology";
import CasesSection from "./dev/components/cases-section";
import InstitucionalSection from "./dev/components/section-institucional";
import DiagnosticSection from "./dev/components/diagnostic-section";

export default function Home() {
  return (
    <div className="bg-[#050510] min-h-screen overflow-x-hidden">
      <Header />
      <HeaderSection />
      <InstitucionalSection />
      <ServicesSection />
      <CasesSection />
      <MetodologiaSection />
      <FuncMetodology />
      <DiagnosticSection />
      <TechSection />
      <Footer />
    </div>
  );
}
