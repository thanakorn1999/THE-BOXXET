import { useNavigate } from "react-router-dom";
import { Constants, Translations } from "../constants/Constants"; // import Constants จากไฟล์ Constants.tsx
// import { Link } from 'react-router-dom';


class Button {
  public static LetterNavBarButton(locations: string, language: string, key: keyof Translations): React.ReactNode {
    const translations: { [key: string]: Translations } = Constants.translations;
    const label = translations[language][key];
    return (
      <div onClick={() => locations} className="hover:text-black hover:bg-customYellow px-3 py-2 rounded">
        {label}
      </div>
    );
  }

  public static dropdownTypeArrow(
    description: string,
    Icon: React.ComponentType<{ size: string }> | null,
    size: string,
    link: string,
  ): React.ReactNode {
    const navigate = useNavigate();
  
    const handleClick = (e: React.MouseEvent) => {
      if (link !== "#" && link !== null) {
        navigate(link); // นำทางไปยังลิงก์ที่ระบุ
      } else {
        e.preventDefault(); // ป้องกันการนำทางถ้า link เป็น "#" หรือ null
      }
    };
  
    if (Icon === null) {
      return (
        <div onClick={handleClick} className="flex px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
          <h1>{description}</h1>
        </div>
      );
    } else {
      return (
        <div onClick={handleClick} className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
          <p>{description}</p>
          <Icon size={size} />
        </div>
      );
    }
  }

}

export default Button;