import NavBar from "../navigationBar/NavBar";
import { OurProject, FooterSection, BoothsSection} from "./Session";
import ourProject from "../../assets/page/our-project.png"
import { useLanguage } from '../utils/ComponentsUtil';

const Boots:React.FC =() => {
  const { language } = useLanguage();
  return (
    <div>
        <NavBar /> 
      <BoothsSection id = "about-boots-section" language={language} pageId="1"/>
      <OurProject id="ourProject-boots-section" language={language} pic={ourProject} />
      <FooterSection id="footer-boots-section" language={language} />
    </div>
  );
};

export default Boots