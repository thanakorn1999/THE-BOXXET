export interface Translations {
    home: string;
    about: string;
    service: string;
    gallery: string;
    contactUs: string;
  }

export class Constants {
    /**
     * translations
     */
    public static translations: { [key: string]: Translations } = {
        EN: {
          home: "Home",
          about: "About",
          service: "Our Service",
          gallery: "Gallery",
          contactUs: "Contract",
        },
        TH: {
          home: "หน้าหลัก",
          about: "เกี่ยวกับเรา",
          service: "ผลงานของเรา",
          gallery: "บริการ",
          contactUs: "ติดต่อเรา",
        },
    };
    

}