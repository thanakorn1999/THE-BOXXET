import { useState } from "react";
import imageMainPage from "../../assets/mainpage/mainPagePic.png"
import theBoxxetIcon from "../../assets/logo/the-boxext.png"
import transalateIcon from "../../assets/logo/g_translate.png"
import dropDownIcon from "../../assets/logo/Chevron down.png"
import Session from "./AboutUs";
import Button from "./Button";
import AboutUsImage from "../../assets/mainpage/about-us.png"

const mainPage =() => {
    type Langague = "EN" | "TH"

    // constant 

    const DESIGN_MESSAGE: string = "DESIGN FOR YOUR FUTURE";
    const THE_BOXXET: string = "THE BOXXET";
    const DESCRIPTION_MESSAGE_TOP: string = "Booth and Event rental services, Designed to suit all your types of events and activities";
    const  DESCRIPTION_MESSAGE_footer: string = "Contract Us @theboxxet"

    const [language, setLanguage] = useState<Langague>('TH');
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  
    const toggleLanguage = (lang: "EN" | "TH") => {
      setLanguage(lang);
      setLanguageDropdownOpen(false);
    };

    
    // dropdown 
    const languageDropdown = () => {
      return (
        <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow-lg py-2 z-50 w-40">
          <div className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer" onClick={() => toggleLanguage("EN")}>
            English
          </div>
          <div className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer" onClick={() => toggleLanguage("TH")}>
            ภาษาไทย
          </div>
        </div>
      );
    };

    const IconArrowForward = ({ size = "text-sm" }: { size?: string }) =>{
        return (
            <a href="#" className={`material-symbols-outlined ${size}`}>arrow_forward_ios</a>
        );
    };

    const IntroSectionOfMainPage = () => {
      return (
        <div className="absolute flex flex-col items-center justify-center w-full px-4 text-center"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          
          {/* ข้อความด้านบน */}
          <p className="text-customeWhite font-bold text-2xl sm:text-3xl md:text-5xl leading-tight tracking-wide mt-60 w-full">
            {DESIGN_MESSAGE}
          </p>
    
          {/* ข้อความใหญ่ */}
          <p className="text-customYellow font-bold text-5xl sm:text-6xl md:text-8xl tracking-wider flex-1 w-full ">
            {THE_BOXXET}
          </p>
    
          {/* คำอธิบาย */}
          <p className="text-customeWhite text-lg sm:text-xl md:text-2xl italic max-w-screen-md mt-40">
            {DESCRIPTION_MESSAGE_TOP}
          </p>
    
          {/* ติดต่อเรา */}
          <a href="#" className="text-customYellow text-lg sm:text-xl md:text-2xl italic mt-4">
            {DESCRIPTION_MESSAGE_footer}
          </a>
        </div>
      );
    };

    const NavSectionOfMainPage = () => {
      return (
        <div className="relative top-0 left-0 w-full z-50 bg-transparent ">
          <div className="container mx-auto max-w-screen-xl flex justify-between items-center py-4 px-6 text-white">
            {/* ด้านซ้าย  Icon */}
            <div className="flex items-center gap-4">
              <a href="#">
                <img src={theBoxxetIcon} alt="Logo" className="w-14 uppercase" />
              </a>
            </div>

            {/* ด้านขวา */}
            <div className="flex gap-4 items-center">
              {Button.LetterNavBarButton("#",language,"home")}
              {Button.LetterNavBarButton("#",language,"about")}
              <div className="relative">
                <div className="flex gap-1 items-center cursor-pointer hover:text-black hover:bg-customYellow px-3 py-2 rounded" onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}>
                {Button.LetterNavBarButton("#",language,"service")}
                  <img src={dropDownIcon} alt="Dropdown Icon" className="w-3" />
                </div>
                {serviceDropdownOpen && serviceDropDown()}
              </div>
              {Button.LetterNavBarButton("#",language,"gallery")}
              {Button.LetterNavBarButton("#",language,"contactUs")}
              <span>|</span>
              <div className="relative">
                <div
                  className="flex gap-1 items-center cursor-pointer hover:text-black hover:bg-customYellow px-3 py-2 rounded"
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                >
                  <img src={transalateIcon} alt="Translate Icon" className="w-6" />
                  <span>{language}</span>
                  <img src={dropDownIcon} alt="Dropdown Icon" className="w-3" />
                </div>
                {/* เรียกใช้งาน function languageDropdown */}
                {languageDropdownOpen && languageDropdown()}
              </div>
          </div>
        </div>
      </div>
      );
    };

    // ALL Service dropdown

    const serviceDropDown = () => {
      return (
        <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow- py-2 z-50 w-64">
          {Button.dropdownTypeArrow("All Services",null,"","#")}
          {Button.dropdownTypeArrow("Booth System",IconArrowForward,"text-sm","#")}
          {Button.dropdownTypeArrow("Element Design",IconArrowForward,"text-sm","#")}
          {Button.dropdownTypeArrow("Event Rental",IconArrowForward,"text-sm","#")}
          {Button.dropdownTypeArrow("Activity",IconArrowForward,"text-sm","#")}
          {Button.dropdownTypeArrow("Element Design",IconArrowForward,"text-sm","#")}
        </div>
      );
    };

    
    return (
      <section>
        <div className="relative h-screen bg-gray-900">
          <img
            src={imageMainPage}
            alt="Styled"
            className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50 contrast-150"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#09283C] opacity-50"></div>
          <div>
            <NavSectionOfMainPage />
            <IntroSectionOfMainPage />
          </div>
        </div>
        {Session("ABOUT",language,AboutUsImage,"#")}
      </section>
    );
  };

export default mainPage