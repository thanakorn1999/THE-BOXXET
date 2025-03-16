import React from "react";
import NavBar from "../../component/navigationBar/NavBar";
import { OurProject, FooterSection, AboutSectionDescription, CustomerSection, AboutSection1  } from "./Session";

import ourProject from "../../assets/page/our-project.png"
import aboutUs from "../../assets/page/aboutOus.png" 
import { useLanguage } from "../utils/ComponentsUtil";

const AboutUsPage: React.FC =() => {
  const { language } = useLanguage();
  return (
    <div >
      <NavBar /> 
      <AboutSection1 id="about-aboutUs-section" language={language} img={aboutUs}/>
      <AboutSectionDescription id="about-aboutUsDes-section" language={language}/>
      <CustomerSection id="customer-aboutus-section" language={language}/>
      <OurProject id="ourProject-aboutus-section" language={language} pic={ourProject} />
      <FooterSection id="footer-aboutus-section" language={language} />
    </div>
    
  );
};




export default AboutUsPage;

