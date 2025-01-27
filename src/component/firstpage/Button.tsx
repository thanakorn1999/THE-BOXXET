import React from 'react';
import { Constants, Translations } from "../constants/Constants"; // import Constants จากไฟล์ Constants.tsx
// import { Link } from 'react-router-dom';


class Button {
  public static LetterNavBarButton(locations: string, language: string, key: keyof Translations): React.ReactNode {
    const translations: { [key: string]: Translations } = Constants.translations;
    const label = translations[language][key];
    return (
      <a href={locations} className="hover:text-black hover:bg-customYellow px-3 py-2 rounded">
        {label}
      </a>
    );
  }

  public static dropdownTypeArrow(
    description: string,
    Icon: React.ComponentType<{ size: string }> | null,
    size: string,
    link: string,
  ): React.ReactNode {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault(); // ป้องกันไม่ให้เกิดการนำทาง
    };

    if (Icon === null) {
      return (
        <a href={link} onClick={handleClick} className="flex px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
          <h1>{description}</h1>
        </a>
      );
    } else {
      return (
        <a href={link} onClick={handleClick} className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
          <p>{description}</p>
          <Icon size={size} />
        </a>
      );
    }
  }
    

}

export default Button;