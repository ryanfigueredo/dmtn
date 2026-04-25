import React from "react";
import Header from "./dev/components/header";
import HeaderSection from "./dev/components/section-header";
import SegmentsSection from "./dev/components/segments-section";
import InstitucionalSection from "./dev/components/section-institucional";
import ValuesSection from "./dev/components/values-section";
import JdtSection from "./dev/components/jdt-section";
import CasesSection from "./dev/components/cases-section";
import MetodologiaSection from "./dev/components/section-metodology";
import DiagnosticSection from "./dev/components/diagnostic-section";
import Footer from "./dev/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
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
        <Footer />
      </div>
    </div>
  );
}
