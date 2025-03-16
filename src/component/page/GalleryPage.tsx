import NavBar from "../../component/navigationBar/NavBar";
import { FooterSection, GallerySection, GalleryComponentPage } from "./Session";
import gallery from "../../assets/gallery/gallery-page-section.png";
import { useLanguage } from "../utils/ComponentsUtil";
import useStore from "../../store";
import { useEffect } from "react";

const GalleryPage: React.FC = () => {
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
      <GallerySection
        id="about-gallery-section"
        language={language}
        img={gallery}
      />
      <GalleryComponentPage id="1" language={language} page={1} />
      <FooterSection id="footer-gallery-section" language={language} />
    </div>
  );
};

export default GalleryPage;
