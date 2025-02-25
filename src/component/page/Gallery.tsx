import React, { useState } from 'react'
useState
import NavBar from "../../component/navigationBar/NavBar";
import { OurProject, FooterSection, AboutSection, ServiceSection, CustomerSection  } from "./Session";
import gallery from "../../assets/page/gallary-section.png"
import ourProject from "../../assets/page/our-project.png"



const GalleryPage: React.FC =() => {
    type Langague = "EN" | "TH"
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
      <AboutSection id = "about-gallery-section" language={language} sectionKey="Our Service" img={gallery}/>
      <ServiceSection id="service-section" language={language} img={""}/>
      <CustomerSection id="customer-gallery-section" language={language}/>
      <OurProject id="ourProject-gallery-section" language={language} pic={ourProject} />
      <FooterSection id="footer-gallery-section" language={language} />
    </div>
  )
}

export default GalleryPage