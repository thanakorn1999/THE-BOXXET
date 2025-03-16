import { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/logo/the-boxext.png"; // ปรับ path ตามไฟล์จริง
import dropDownIcon from "../../assets/logo/Chevron down.png"; // ปรับ path ตามไฟล์จริง
import transalateIcon from "../../assets/logo/g_translate.png"; // ปรับ path ตามไฟล์จริง

const HambergerNavBar: React.FC<{ language: "EN" | "TH"; setLanguage: (lang: "EN" | "TH") => void }> = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-[#09283C] to-[#155C8A] p-4 text-white w-full h-auto">
      <div className="container mx-auto flex-col">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={LogoIcon} alt="Logo" className="w-14 uppercase" />
          </a>

          {/* Hamburger Menu Button (Mobile) */}
          <button className="lg:hidden text-white items-end text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      

        {/* Nav Links */}
        <div className={`lg:flex ${menuOpen ? "block" : "hidden"} p-8 lg:flex-row gap-4 lg:items-center w-full lg:w-auto mt-4 text-left`}>
          <Link to="/" className="hover:text-yellow-400 mt-4">Home</Link>
          <Link to="/about" className="flex text-center hover:text-yellow-400 mt-4">About</Link>
          <button onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)} className="relative hover:text-yellow-400 flex items-center mt-4">
            Services
            <img src={dropDownIcon} alt="Dropdown Icon" className="w-3 ml-1" />
          </button>
          
          {/* Dropdown Menu */}
          {serviceDropdownOpen && (
            <div className="absolute bg-[#155C8A] text-white mt-2 rounded-md shadow-lg w-40">
              <Link to="/booth-system" className="block px-4 py-2 hover:bg-yellow-400 mt-4">Booth System</Link>
              <Link to="/booth-set" className="block px-4 py-2 hover:bg-yellow-400 mt-4">Booth Set</Link>
              <Link to="/element-design" className="block px-4 py-2 hover:bg-yellow-400 mt-4">Element Design</Link>
              <Link to="/event-rental" className="block px-4 py-2 hover:bg-yellow-400 mt-4">Event Rental</Link>
            </div>
          )}

          <Link to="/gallery" className="flex hover:text-yellow-400 mt-4">Gallery</Link>
          <Link to="/contact" className="flex hover:text-yellow-400 mt-4">Contact</Link>

          {/* Language Selector */}
          <div className="relative">
            <button className="flex gap-1 items-center hover:text-yellow-400 mt-4" onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
              <img src={transalateIcon} alt="Translate Icon" className="w-6" />
              <span>{language}</span>
              <img src={dropDownIcon} alt="Dropdown Icon" className="w-3" />
            </button>
            {languageDropdownOpen && (
              <div className="absolute bg-[#155C8A] text-white mt-2 rounded-md shadow-lg w-24">
                <button onClick={() => setLanguage("EN")} className="block px-4 py-2 hover:bg-yellow-400">EN</button>
                <button onClick={() => setLanguage("TH")} className="block px-4 py-2 hover:bg-yellow-400">TH</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HambergerNavBar;
