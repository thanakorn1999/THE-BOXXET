import NavBar from "../navigationBar/NavBar";
import { OurProject, FooterSection, ContractComponent, CustomerSection, ContactSection } from "./Session";
import ContractImg from "../../assets/page/contact-img.png"
import ourProject from "../../assets/page/our-project.png"
import { useLanguage } from '../utils/ComponentsUtil';
import useStore from "../../store";
import { useEffect } from "react";


const Contract:React.FC =() => {
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
      <ContactSection id='conact-section-1' language={language} img = {ContractImg}/>
      <ContractComponent id='contract-section' language={language}/>
      <CustomerSection id='customer-section' language={language}/>
      <OurProject id="ourProject-boots-section" language={language} pic={ourProject} />
      <FooterSection id="footer-boots-section" language={language} />
    </div>
  );
};

export default Contract