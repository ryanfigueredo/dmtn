import React from "react";
import dynamic from "next/dynamic";
import Header from "./dev/components/header";
import HeaderSection from "./dev/components/section-header";
import SegmentsSection from "./dev/components/segments-section";
import Footer from "./dev/components/footer";

// Componentes abaixo da dobra — carregados sob demanda
const InstitucionalSection = dynamic(() => import("./dev/components/section-institucional"));
const ValuesSection = dynamic(() => import("./dev/components/values-section"));
const JdtSection = dynamic(() => import("./dev/components/jdt-section"));
const CasesSection = dynamic(() => import("./dev/components/cases-section"));
const MetodologiaSection = dynamic(() => import("./dev/components/section-metodology"));
const DiagnosticSection = dynamic(() => import("./dev/components/diagnostic-section"));

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeaderSection />
        <SegmentsSection />
        <InstitucionalSection />
        <ValuesSection />
        <JdtSection />
        <CasesSection />
        <MetodologiaSection />

        {/* Dark zone: Agent + Footer */}
        <div className="bg-[#0F1629]">
          <svg className="w-full block bg-[#FAFAF8] -mb-px" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: "60px" }}>
            <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="#0F1629" />
          </svg>
          <DiagnosticSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
