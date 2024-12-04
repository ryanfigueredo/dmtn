import React from "react";
import Header from "./components/header";
import ServicesSection from "./components/services-section";
import SectionPartners from "./components/section-partners";
import HeaderSection from "./components/section-header";
import MetodologiaSection from "./components/section-metodology";
import TechSection from "./components/techs-section";
import Footer from "./components/footer";
import FuncMetodology from "./components/section-func-metodology";
import FuncMetodologyTitle from "./components/section-func-metodolog-title";
import { ContactForm } from "./components/form-section";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[rgb(248,248,248)]">
      <div className="bg-transparent p-4 md:p-8">
        <Header />
      </div>
      <HeaderSection />
      <SectionPartners />
      <ServicesSection />
      <FuncMetodologyTitle />
      <FuncMetodology />
      <MetodologiaSection />
      <TechSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
