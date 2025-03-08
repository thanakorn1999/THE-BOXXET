import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BoothData} from "../constants/Booth-System-index-v1"



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

export const ServiceDropDown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (titleMain: string) => {
    setOpenDropdown(openDropdown === titleMain ? null : titleMain);
  };

  const navigate = useNavigate();

  return (
    <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow- py-2 z-50 w-64 ">
        <div onClick={() => navigate("/gallery")} className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left ml-2 mr-2">
          <p>All Service</p>  
        </div>
      {BoothData.map((category) => (
        <div key={category.id} className="flex rounded relative">
          {/* Main Dropdown */}
          <div
            className="w-full text-left text-lg p-2 rounded"
            onClick={() => toggleDropdown(category.titleMain)}
          >
            <div className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
              <p>{category.titleMain}</p>
              <IconArrowForward size={"text-sm"} />
            </div>
          </div>

          {/* Submenu - If Open */}
          {openDropdown === category.titleMain && (
            <div className="absolute left-64 mt-2 space-y-2 bg-customBlue rounded shadow w-64">
              {category.data.map((item) => (
                <div key={item.title} className="relative">
                  {/* Sub Dropdown */}
                  <div
                    className="w-full text-left text-md p-2 rounded"
                    onClick={() => navigate(category.link)}
                  >
                    <div className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
