import React from "react";
import Header from "./components/header";
import ServicesSection from "./components/services-section";
import HeaderSection from "./components/section-header";
import MetodologiaSection from "./components/section-metodology";
import TechSection from "./components/techs-section";
import Footer from "./components/footer";
import FuncMetodology from "./components/section-func-metodology";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeaderSection />
      <ServicesSection />
      <FuncMetodology />
      <MetodologiaSection />
      <TechSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
