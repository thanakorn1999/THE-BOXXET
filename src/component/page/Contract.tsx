import React, { useState } from 'react'
useState
import NavBar from "../navigationBar/NavBar";
import { OurProject, FooterSection, ContractComponent, CustomerSection } from "./Session";
import ourProject from "../../assets/page/our-project.png"

const Contract:React.FC =() => {
    type Langague = "EN" | "TH";
    const [language, setLanguage] = useState<Langague>('EN');
  return (
    <div>
        <NavBar 
        about="aboutPage2Des-section" 
        gallery="ourProjectPage2-section"
        contactUs="footerPage2-section"
        language={language}
        setLanguage={setLanguage}
        page='gallery'
      /> 
      <ContractComponent id='contract-section' language={language}/>
      <CustomerSection id='customer-section' language={language}/>
      <OurProject id="ourProject-boots-section" language={language} pic={ourProject} />
      <FooterSection id="footer-boots-section" language={language} />
    </div>
  );
};

export default Contract