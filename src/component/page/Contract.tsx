import NavBar from "../navigationBar/NavBar";
import { OurProject, FooterSection, ContractComponent, CustomerSection, ContactSection } from "./Session";
import ContractImg from "../../assets/page/contact-img.png"
import ourProject from "../../assets/page/our-project.png"
import { useLanguage } from '../utils/ComponentsUtil';

const Contract:React.FC =() => {
  const { language } = useLanguage();
  return (
    <div>
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