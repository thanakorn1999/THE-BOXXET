import NavBar from "../../component/navigationBar/NavBar";
import { OurProject, FooterSection, OurServiceSection, ServiceSection} from "./Session";
import gallery from "../../assets/page/gallary-section.png"
import ourProject from "../../assets/page/our-project.png"
import { useLanguage } from '../utils/ComponentsUtil';



const GalleryPage: React.FC =() => {
  const { language } = useLanguage();
  return (
    <div>
        <NavBar /> 
      <OurServiceSection id='' language={language} img={gallery}/>
      <ServiceSection id="service-section" language={language} img={""}/>
      <OurProject id="ourProject-gallery-section" language={language} pic={ourProject} />
      <FooterSection id="footer-gallery-section" language={language} />
    </div>
  )
}

export default GalleryPage