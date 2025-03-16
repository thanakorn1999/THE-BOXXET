import React, { useEffect } from "react";
import NavBar from "../../component/navigationBar/NavBar";
import {
  OurProject,
  FooterSection,
  AboutSectionDescription,
  CustomerSection,
  AboutSection1,
} from "./Session";

import ourProject from "../../assets/page/our-project.png";
import aboutUs from "../../assets/page/aboutOus.png";
import { useLanguage } from "../utils/ComponentsUtil";
import useStore from "../../store";

const AboutUsPage: React.FC = () => {
  const { language } = useLanguage();
  const { withLanguage, setWithLanguage } = useStore();

  useEffect(() => {
    const handleResize = () => {
      setWithLanguage(window.innerWidth > 2400);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setWithLanguage]);

  return (
    <div className={`${withLanguage ? "container mx-auto" : ""}`}>
      <NavBar />
      <AboutSection1
        id="about-aboutUs-section"
        language={language}
        img={aboutUs}
      />
      <AboutSectionDescription
        id="about-aboutUsDes-section"
        language={language}
      />
      <CustomerSection id="customer-aboutus-section" language={language} />
      <OurProject
        id="ourProject-aboutus-section"
        language={language}
        pic={ourProject}
      />
      <FooterSection id="footer-aboutus-section" language={language} />
    </div>
  );
};

export default AboutUsPage;
