import { useEffect, useState } from "react"
import LogoIcon from "../../assets/logo/the-boxext.png"
import transalateIcon from "../../assets/logo/g_translate.png"
import dropDownIcon from "../../assets/logo/Chevron down.png"
import Button from '../page/Button'
import { Link } from "react-router-dom"
import { ServiceDropDown, LanguageSwitcher, useLanguage } from "../utils/ComponentsUtil"
import HambergerNavBar from "../navigationBar/hamberger-nav-bar"


interface NavBar {
  about: string;
  gallery: string;
  contactUs: string;
  language: "EN" | "TH";
  setLanguage: (lang: "EN" | "TH" ) => void
  page: string; 
}


const NavBar: React.FC = () => {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { language} = useLanguage(); 
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isMobile) {
    return <HambergerNavBar />;
  } else {
    return (
      <nav className="bg-gradient-to-r from-[#09283C] to-[#155C8A] p-4 text-white w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img src={LogoIcon} alt="Logo" className="w-14 uppercase ml-8" />
          </a>
  
          {/* Hamburger Menu Button (Mobile) */}
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
  
          {/* Nav Links */}
          <div className={`lg:flex ${menuOpen ? "block" : "hidden"} flex-col lg:flex-row gap-4 items-center w-full lg:w-auto mt-4 lg:mt-0`}>
            <Link to="/">{Button.LetterNavBarButton("#", language, "home")}</Link>
            <Link to= "/about-us">{Button.LetterNavBarButton("#", language, "about")}</Link>
            <button >
                <div className="relative">
                  <div className="flex gap-1 items-center cursor-pointer hover:text-black hover:bg-customYellow px-3 py-2 rounded" onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}>
                    {Button.LetterNavBarButton("#",language,"service")}
                    <img src={dropDownIcon} alt="Dropdown Icon" className="w-3" />
                  </div>
                    {serviceDropdownOpen && <ServiceDropDown/>}
                </div>
              </button>
            <Link to="/gallery-page"><button>{Button.LetterNavBarButton("#", language, "gallery")}</button></Link>
            <Link to="/contact"><button>{Button.LetterNavBarButton("#", language, "contactUs")}</button></Link>
            <span className="hidden lg:block">|</span>
            <div className="relative">
              <div className="flex gap-1 items-center cursor-pointer hover:text-black hover:bg-customYellow px-3 py-2 rounded" onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
                <img src={transalateIcon} alt="Translate Icon" className="w-6" />
                <span>{language}</span>
                <img src={dropDownIcon} alt="Dropdown Icon" className="w-3" />
              </div>
              {languageDropdownOpen && <LanguageSwitcher/>}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar