import NavBar from "../../component/navigationBar/NavBar";
import {FooterSection, GallerySection,GalleryComponentPage  } from "./Session";
import gallery from "../../assets/gallery/gallery-page-section.png"
import { useLanguage } from '../utils/ComponentsUtil';



const GalleryPage: React.FC =() => {
    const { language } = useLanguage();
  return (
    <div>
        <NavBar/> 
      <GallerySection id = "about-gallery-section" language={language} img={gallery}/>
      <GalleryComponentPage id='1' language={language} page={1} />
      <FooterSection id="footer-gallery-section" language={language} />
    </div>
  )
}

export default GalleryPage