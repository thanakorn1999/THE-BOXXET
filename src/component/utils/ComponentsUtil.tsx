import React from "react";
import Button from "../page/Button";
import { useNavigate } from "react-router-dom";



export const ToggleLanguage = (
    lang: "EN" | "TH",
    setLanguage: React.Dispatch<React.SetStateAction<"EN" | "TH">>,
    setLanguageDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

export const ScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

interface LanguageDropdownProps {
    setLanguage: (lang: "EN" | "TH") => void;
    setLanguageDropdownOpen: (open: boolean) => void;
  }
  
  export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ setLanguage, setLanguageDropdownOpen }) => {
    const handleLanguageChange = (lang: "EN" | "TH") => {
      setLanguage(lang);
      setLanguageDropdownOpen(false);
    };
  
    return (
      <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow-lg py-2 z-50 w-40">
        <div className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer" onClick={() => handleLanguageChange("EN")}>
          English
        </div>
        <div className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer" onClick={() => handleLanguageChange("TH")}>
          ภาษาไทย
        </div>
      </div>
    );
  };

export const IconArrowForward = ({ size = "text-sm" }: { size?: string }) =>{
    return (
        <a href="#" className={`material-symbols-outlined ${size}`}>arrow_forward_ios</a>
    );
};

export const ServiceDropDown:React.FC = () => {
  const navigate = useNavigate();
    return (
      <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow- py-2 z-50 w-64">
        <div onClick={()=>navigate("/gallery")}>{Button.dropdownTypeArrow("All Services",null,"","#")}</div>
        <div onClick={()=>navigate("/booth-system")}>{Button.dropdownTypeArrow("Booth System",IconArrowForward,"text-sm","#")}</div>
        <div onClick={()=>navigate("/booth-set")}>{Button.dropdownTypeArrow("Booth Set",IconArrowForward,"text-sm","#")}</div>
        <div onClick={()=>navigate("/element-design")}>{Button.dropdownTypeArrow("Element Design",IconArrowForward,"text-sm","#")}</div>
        <div onClick={()=>navigate("/event-rental")}>{Button.dropdownTypeArrow("Event Rental",IconArrowForward,"text-sm","#")}</div>
        <div onClick={()=>navigate("/activity")}>{Button.dropdownTypeArrow("Activity",IconArrowForward,"text-sm","#")}</div>
      </div>
    );
};