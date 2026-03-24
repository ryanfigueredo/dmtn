import React from "react";
import Header from "./components/header";
import ServicesSection from "./components/services-section";
import HeaderSection from "./components/section-header";
import MetodologiaSection from "./components/section-metodology";
import TechSection from "./components/techs-section";
import Footer from "./components/footer";
import FuncMetodology from "./components/section-func-metodology";
import CasesSection from "./components/cases-section";

const LandingPage = () => {
  return (
    <div className="bg-[#050510] min-h-screen overflow-x-hidden">
      <Header />
      <HeaderSection />
      <ServicesSection />
      <CasesSection />
      <MetodologiaSection />
      <FuncMetodology />
      <TechSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
