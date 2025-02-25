import React, { useState } from 'react'
useState
import NavBar from "../../component/navigationBar/NavBar";
import {FooterSection, AboutSection,GalleryComponentPage  } from "./Session";
import gallery from "../../assets/gallery/gallery-page-section.jpeg"



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
      <AboutSection id = "about-gallery-section" language={language} sectionKey="Gallery" img={gallery}/>
      < GalleryComponentPage id='1' language={language} page={1} />
      <FooterSection id="footer-gallery-section" language={language} />
    </div>
  )
}

export default GalleryPage