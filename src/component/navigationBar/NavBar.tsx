import { useState } from "react"
import LogoIcon from "../../assets/logo/the-boxext.png"
import transalateIcon from "../../assets/logo/g_translate.png"
import dropDownIcon from "../../assets/logo/Chevron down.png"

const NavBar = () => {
    type Language = "EN" | "TH"
    
    const [language, setLanguage] = useState<Language>("TH");
    const translations: Record<Language, { [key: string]: string }> = {
        EN: {
        home: "Home",
        about: "About us",
        gallery: "Gallery",
        contactUs: "Contract us",
        },
        TH: {
        home: "หน้าหลัก",
        about: "เกี่ยวกับเรา",
        gallery: "บริการ",
        contactUs: "ติดต่อเรา",
        },
    };

    const toggleLanguage = (lang : Language) => {
        setLanguage(lang);
        setDropdownOpen(false)
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="bg-gradient-to-r from-[#09283C] to-[#155C8A] p-4 text-white">
          <div className="mx-auto flex justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2">
                <a href="#">
                  <img src={LogoIcon} alt="Logo" className="w-14 uppercase" />
                </a>
                {/* <a
                  href="#"
                  className="font-bold text-2xl sm:text-3xl hover:text-black hover:bg-customYellow px-2 py-1 rounded"
                >
                  THE BOXXET
                </a> */}
              </div>
              <div className="flex gap-4 items-center">
                <a href="#" className="hover:text-black hover:bg-customYellow px-2 py-1 rounded">
                  {translations[language].home}
                </a>
                <a href="#" className="hover:text-black hover:bg-customYellow px-2 py-1 rounded">
                  {translations[language].about}
                </a>
                <div className="mx-auto flex justify-between items-center gap-2">
                  <a href="#" className="hover:text-black hover:bg-customYellow px-2 py-1 rounded">
                    {translations[language].gallery}
                  </a>
                  <img src={dropDownIcon} alt="dropDownIcon" className="w-3" />
                </div>
                <a href="#" className="hover:text-black hover:bg-customYellow px-2 py-1 rounded">
                  {translations[language].contactUs}
                </a>
                <span>|</span>
                <div className="relative">
                  <div
                    className="flex gap-1 items-center cursor-pointer hover:text-black hover:bg-customYellow px-2 py-1 rounded"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <img src={transalateIcon} alt="transalteIcon" className="w-6" />
                    <span>{language}</span>
                    <img src={dropDownIcon} alt="dropDownIcon" className="w-3"/>
                  </div>
                  {dropdownOpen && (
                    <div className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg py-2">
                      <div
                        className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer"
                        onClick={() => toggleLanguage("EN")}
                      >
                        English
                      </div>
                      <div
                        className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer"
                        onClick={() => toggleLanguage("TH")}
                      >
                        ภาษาไทย
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default NavBar