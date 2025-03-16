import NavBar from "../../component/navigationBar/NavBar";
import { OurProject, FooterSection, OurServiceSection, ServiceSection} from "./Session";
import gallery from "../../assets/page/gallary-section.png"
import ourProject from "../../assets/page/our-project.png"
import { useLanguage } from '../utils/ComponentsUtil';
import useStore from "../../store";
import { useEffect } from "react";




const GalleryPage: React.FC =() => {
  const { withLanguage, setWithLanguage } = useStore();

      useEffect(() => {
        const handleResize = () => {
          setWithLanguage(window.innerWidth > 2400);
        };
    
        handleResize(); // Check initial width
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, [setWithLanguage]);

  const { language } = useLanguage();
  return (
    <div className={`${withLanguage ? "container mx-auto" : ""}`}>
        <NavBar /> 
      <OurServiceSection id='' language={language} img={gallery}/>
      <ServiceSection id="service-section" language={language} img={""}/>
      <OurProject id="ourProject-gallery-section" language={language} pic={ourProject} />
      <FooterSection id="footer-gallery-section" language={language} />
    </div>
  )
}

export default GalleryPage