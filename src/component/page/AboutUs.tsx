import React from "react";
import NavBar from "../../component/navigationBar/NavBar";
import { OurProject, FooterSection, AboutSection, AboutSectionDescription, CustomerSection  } from "./Session";
import { useState } from "react";
import ourProject from "../../assets/page/our-project.png"
import aboutUs from "../../assets/page/aboutOus.png" 

const AboutUsPage: React.FC =() => {
  type Langague = "EN" | "TH"
  const [language, setLanguage] = useState<Langague>('EN');
  return (
    <div >
      <NavBar 
        about="about-aboutUsDes-section" 
        gallery="customer-aboutus-section" 
        contactUs="footer-aboutus-section"
        language={language}
        setLanguage={setLanguage}
        page="about-page"
      /> 
      <AboutSection id = "about-aboutUs-section" language={language} sectionKey="about" img={aboutUs}/>
      <AboutSectionDescription id="about-aboutUsDes-section" language={language}/>
      <CustomerSection id="customer-aboutus-section" language={language}/>
      <OurProject id="ourProject-aboutus-section" language={language} pic={ourProject} />
      <FooterSection id="footer-aboutus-section" language={language} />
    </div>
    
  );
};




export default AboutUsPage;

