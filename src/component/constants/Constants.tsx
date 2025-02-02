export interface Translations {
    home: string;
    about: string;
    service: string;
    gallery: string;
    contactUs: string;
    contractUsMainTitle: string;
    contractUsSubTitle: string;
    contractUsdescription: string;
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
          contractUsMainTitle: "THE BOXXET (บริษัท เดอะ บ๊อกซ์เซ็ต จำกัด)",
          contractUsSubTitle: "DESIGN FOR YOUR FUTURE",
          contractUsdescription: "Established in 1993 as “Itsma”, we bring over 32 years of expertise in exhibition board rentals, trade shows, and comprehensive marketing research services. Our focus has always been on understanding and exceeding customer expectations, ensuring seamless execution and maximum impact for every project. Trusted by numerous organizations, we continually innovate to deliver exceptional value and build enduring relationships with our clients."
        },
        TH: {
          home: "หน้าหลัก",
          about: "เกี่ยวกับเรา",
          service: "ผลงานของเรา",
          gallery: "บริการ",
          contactUs: "ติดต่อเรา",
          contractUsMainTitle: "THE BOXXET (บริษัท เดอะ บ๊อกซ์เซ็ต จำกัด)",
          contractUsSubTitle: "DESIGN FOR YOUR FUTURE",
          contractUsdescription: "ด้วยประสบการณ์ยาวนานกว่า '32 ปี' จากการเริ่มต้นในปี พ.ศ. 2536 ภายใต้ชื่อเดิม “อิษมา” บริษัทของเราได้สั่งสมความเชี่ยวชาญด้านการให้บริการเช่าบอร์ดนิทรรศการและงานจัดแสดงสินค้า งานวิจัยการตลาดแบบครบวงจร ความมุ่งมั่นของเราคือการใส่ใจในความต้องการของลูกค้า และสร้างสรรค์บริการที่ตอบโจทย์ทุกความพึงพอใจ เพื่อให้งานของคุณดำเนินไปอย่างราบรื่นและเปี่ยมด้วยประสิทธิภาพ เราภูมิใจที่ได้เป็นส่วนหนึ่งในความสำเร็จของหลากหลายองค์กร และเรายังคงพัฒนาความสามารถของเราอย่างต่อเนื่อง เพื่อส่งมอบคุณค่าและสร้างความเชื่อมั่นให้กับลูกค้าของเราในทุกโอกาส"
        },
    };
    

}