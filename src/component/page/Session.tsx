import { Constants, Translations } from "../constants/Constants";
import ipsos from "../../assets/page/Ipsos.png"
import niq from "../../assets/page/niq.png"
import central from "../../assets/page/central.png"
import theMall from "../../assets/page/the-mall.png"
import customeAsia from "../../assets/page/customasia.png"
import theBoxxetIcon from "../../assets/logo/the-boxext.png"
import facebook from "../../assets/page/facebook.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LineIcon from "../../assets/page/lineIcon.png"
import FooterImg from "../../assets/page/footerimg.jpeg"
import {Swiper,SwiperSlide} from "swiper/react"
import {FreeMode, Navigation, Pagination,Autoplay} from 'swiper/modules'
import {ServiceData} from "../../component/constants/index.js"
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

import aboutUsbuttom from "../../assets/page/about-ous-buttom.png"
import aboutUsbuttomright from "../../assets/page/about-ous-right.png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import {BoothSystem} from "../constants/Booth-System-index.js"
import { BoothData } from "../constants/Booth-System-index-v1.ts";
import TheBoxxetMailImg from "../../assets/logo/the-boxxet-send-enmail-logo.jpeg"

// css
import 'swiper/swiper-bundle.css';
import React, { useRef, useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {GalleryImg} from "../../component/constants/gallery-index.ts"
import { FaLine } from "react-icons/fa6";
import { Link } from "react-router-dom";


interface SessionProps {
  id: string;
  language: string;
  pic: string;
  landing: string;
}

export const Session: React.FC<SessionProps> = ({ id, language, pic, landing }) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <section id={id} className="px-[7vw] py-[1vw] max-w-[90vw] lg:h-[70vh] md:h-[80vh] sm:h-[90vh]" >
      
      {/* Header ABOUT */}
      <div className="text-left w-full  mt-8 ">
        <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-5xl border-b-4 border-black inline-block px-4">
          {translations[language].about}
        </h1>
      </div>

      {/* Layout: รูป + ข้อความ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4vw] justify-center items-center mt-12 w-full">
        
        {/* รูปภาพ */}
        <div className="flex justify-center max-w-[500px]">
          <img src={pic} alt={landing} className="w-full h-auto object-cover rounded-xl shadow-lg" />
        </div>

        {/* ข้อความ */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-[700px]">
          <h1 className="sm:text-xs md:text-xl lg:text-3xl 2xl:text-4xl  font-bold">
            {translations[language].contractUsMainTitle}
          </h1>
          <h2 className="sm:text-xs md:text-xl lg:text-2xl 2xl:text-3xl mt-2">
            {translations[language].contractUsSubTitle}
          </h2>
          <p className="text-gray-600 mt-6 text-pretty whitespace-normal indent-6 leading-relaxed">
            {translations[language].contractUsdescription}
          </p>

          <Link to="/contact" className="text-center bg-customBlue text-customYellow py-3 px-6 rounded-lg hover:bg-customYellow hover:text-customBlue transition-all mt-6 text-[clamp(1rem, 2vw, 1.25rem)]">
            {translations[language].contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
};

interface OurProjectProps {
  id: string;
  language: string;
  pic: string;
}

export const OurProject: React.FC<OurProjectProps> = ({ id, language, pic }) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <section id={id} className="w-full h-[50vh]">
      <div className="relative w-full h-full flex">
        {/* รูปพื้นหลัง */}
        <img
          src={pic}
          alt="Styled"
          className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-150"
        />
        <div className="absolute inset-0 bg-[#09283C99] opacity-50"></div>

        {/* เนื้อหา */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl px-6">
          <h1 className="text-customYellow font-bold sm:text-2xl md:text-4xl lg:text-5xl">
            {translations[language].ourProject}
          </h1>
          <p className="text-white mt-4 text-base md:text-lg lg:text-xl">
            {translations[language].ourProjectDesp}
          </p>
          <Link
            to="/gallery-page"
            className="mt-6 bg-customYellow text-customBlue py-3 px-6 rounded-lg hover:bg-customBlue hover:text-customYellow transition-all text-lg md:text-xl"
          >
            {translations[language].gallery}
          </Link>
        </div>
      </div>
    </section>
  );
};




interface CustomerProps {
  id: string;
  language: string;

}

export const CustomerSection: React.FC<CustomerProps> = ({ id, language }) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <section id={id} className="w-full h-[50vh] flex justify-center items-center mt-8 px-4">
      <div className="text-center w-full max-w-8xl">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-semibold">{translations[language].customers}</h1>
        <div className="flex flex-wrap justify-center items-center mt-6 gap-12">
          <img src={ipsos} alt="Ipsos" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
          <img src={niq} alt="NIQ" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
          <img src={central} alt="Central" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
          <img src={theMall} alt="The Mall" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
          <img src={customeAsia} alt="Custom Asia" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  id: string;
  language: string;
  img: string;
}

export const ServiceSection: React.FC<ServiceProps> = ({ id, language, img }) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  if (img){
    return (
      <section id={id} className="relative min-h-[100vh] py-[1vw] max-w-[100vw] lg:h-[70vh] md:h-[80vh] sm:h-[90vh]">
        <div>
          <img src={img} alt="#" className="absolute w-full h-full object-cover filter brightness-50 contrast-150" />
          <div className="absolute w-full h-full bg-[#155C8A] opacity-50"></div>
          <div className="ml- flex text-left justify-center flex-col h-[100vh]">
            <div className="relative w-full max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white border-b-4 border-yellow-500 inline-block px-4">{translations[language].serviceSection}</h1>
            </div>
            <div className="relative self-start w-full max-w-3xl mx-auto mt-6">
              <p className="text-customYellow text-lg md:text-xl">{translations[language].serviceSectionDesc}</p>
            </div>
            <div className="relative flex items-center w-full mt-5 px-4 md:px-8">
              {/* ปุ่ม Prev */}
              <button className="swiper-button-prev-custom text-customYellow hover:text-blue-400">
                <ExpandCircleDownOutlinedIcon fontSize="large" className="rotate-90" />
              </button>

              {/* Swiper (Wrapper ครอบเพื่อให้ติดกับปุ่ม) */}
              <div className="flex-grow max-w-screen-lg">
                <Swiper
                  breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
                    340: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
                    700: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 12 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 16 },
                  }}
                  freeMode={true}
                  pagination={{ clickable: true }}
                  navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation, FreeMode, Autoplay]}
                  className="max-w-full"
                >
                  {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                      <Link to={item.link}>
                        <div className="flex flex-col gap-6 mb-8 group relative shadow-lg rounded-xl h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.backgroundImage})` }}
                          />
                          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                          <div className="relative flex gap-3">
                            <div className="absolute left-1/2 top-80 transform -translate-x-1/2 -translate-y-1/2 w-full text-center transition-all duration-500 group-hover:top-10">
                              <h1 className="text-xl lg:text-2xl font-bold text-customYellow">{item.title}</h1>
                            </div>
                            {item.bullets && item.bullets.length > 0 && (
                              <div className="absolute left-1/2 top-[110%] transform -translate-x-1/2 w-[80%] text-left opacity-0 transition-all duration-500 group-hover:top-20 group-hover:opacity-100">
                                <ul className="relative list-disc list-inside text-white text-sm lg:text-lg space-y-1">
                                  {item.bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ปุ่ม Next */}
              <button className="swiper-button-next-custom text-customYellow hover:text-blue-400">
                <ExpandCircleDownOutlinedIcon fontSize="large" className="-rotate-90" />
              </button>
            </div>

          </div>
        </div>
      </section>
    );
}else{
    return (
      <section id={id} className="relative">
        <div className="w-full h-[595px] object-cover">
          <div className="flex items-center justify-center flex-col h-screen">
            <div className="relative flex justify-center items-center w-full mt-5 gap-4">
              <button className="swiper-button-prev-custom text-black hover:text-customYellow ml-32">
                <ArrowBackIosIcon fontSize="large" />
              </button>
              <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 3,
                  slidesPerGroup:2,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[ Pagination, Navigation, FreeMode, Autoplay]}
              className="max-w-[90%] lg:max-w-[80%]"
            >
              {ServiceData.map((item) => (
                <SwiperSlide key={item.title}>
                  <Link to={item.link}>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.backgroundImage})` }}
                      />
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex gap-3">
                        <div className="absolute left-1/2 top-80 transform -translate-x-1/2 -translate-y-1/2 w-full text-center transition-all duration-500 group-hover:top-10">
                          <h1 className="text-xl lg:text-2xl font-bold text-customYellow">{item.title}</h1>
                        </div>
                        {item.bullets && item.bullets.length > 0 && (
                          <div className="absolute left-1/2 top-[110%] transform -translate-x-1/2 w-[80%] text-left opacity-0 transition-all duration-500 group-hover:top-20 group-hover:opacity-100 ">
                            <ul className="relative list-disc list-inside text-white text-sm lg:text-lg space-y-1">
                              {item.bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-next-custom text-black hover:text-customYellow mr-32">
                <ArrowBackIosIcon fontSize="large" className="rotate-180"/>
              </button>
          </div>
          </div>
        </div>
      </section>
    );
  }
  
};

export const FooterSection:React.FC<CustomerProps> = ({ id, language }) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <footer id={id} className="lg:w-[1440px] lg:h-[313px] md:h-[557px] md:w-[744px] sm:h-[875px] ">
      {/* ภาพพื้นหลัง */}
      <img
        src={FooterImg}
        alt="Styled"
        className="absolute w-full h-[50vh] object-cover filter brightness-50 contrast-150"
      />
      {/* เลเยอร์พื้นหลังเพื่อให้สีเข้มขึ้น */}
      <div className="absolute w-full h-[50vh] bg-[#155C8A] opacity-50"></div>

      {/* คอนเทนต์ที่แสดงข้อความ */}
      <div className="relative flex flex-col justify-center top-[40px]">
        <div className="flex text-white justify-center space-x-8">
          
          <div><img src={theBoxxetIcon} alt="Logo" className="flex w-[164px] h-[187px] sm:w-[140px] sm:h-[160px] md:w-[150px] md:h-[170px] lg:w-[164px] lg:h-[187px]" /></div>
          <div className="text-left">
            <div>
              <h1 className="text-white text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">{translations[language].service}</h1>
            </div>
            <div className="mt-10">
              <h2 className="text-lg">Booth System</h2>
              <h2 className="text-lg">Booth Set</h2>
              <h2 className="text-lg">Element Design</h2>
              <h2 className="text-lg">Event Rental</h2>
              <h2 className="text-lg">Activity</h2>
            </div>
          </div>
          <div className="text-left">
            <div><h1 className="text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">FaceBook</h1></div>
            <div className="mt-10"><img src={facebook} alt="Facebook" className="w-[214px] h-[136px]"/></div>
          </div>

          <div className="text-left">
            <h1 className="text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">{translations[language].contactUs}</h1>
            <div className="flex items-left gap-2 mt-10">
              <MailOutlineIcon />
              <h1>theboxxet.contact@gmail.com</h1>
            </div>
            <div className="flex items-left gap-2">
              <CallOutlinedIcon />
              <h1>095-956-5419, 064-265-9428</h1>
            </div>
            <div className="flex text-left gap-2">
              <PlaceOutlinedIcon />
              <h1 className="text-balance h-[123px] w-[238px]">The Villa Ramindra 14 134 The Villa Ramindra Bang Khen Tha Raeng, Bang Khen, Bangkok 10220</h1>
            </div>

          </div>
          
          <div className="text-left">
            <h1 className="text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">QR Line OA</h1>
            <div className="mt-10"><img src={LineIcon} alt="Line QR" className=" w-[123px] h-[124px]" /></div>
          </div>
        </div>
        <h1 className="mt-2 flex justify-center text-customeWhite">© 2025 THE BOXXET. ltd. All rights reserved.</h1>
      </div>
    </footer>
  );
};

interface AboutUsProps {
  id: string;
  language: string;
  img: string;
}

export const AboutSection1: React.FC<AboutUsProps> = ({id, language, img}) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div>
      <section id={id}>
        <div className="relative w-full ipadairx:h-[200px] ipadprox:h-[180px] lg:h-[172px] md:h-[172px] sm:h-[96px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <h1 className="absolute font-bold lg:text-5xl md:text-4xl sm:text-2xl text-customeWhite border-b-4 border-customYellow left-24 mt-14">
            {translations[language].aboutImpl}
          </h1>
        </div>
      </section>
    </div>
  )
}

export const GallerySection: React.FC<AboutUsProps> = ({id, language, img}) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div>
       <section id={id}>
         <div className="relative w-full lg:h-[172px] md:h-[172px] sm:h-[96px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
           <h1 className="absolute font-bold lg:text-5xl md:text-4xl sm:text-2xl text-customeWhite border-b-4 border-customYellow left-24 mt-14">
             {translations[language].gallery}
           </h1>
         </div>
       </section>
    </div>
  )
}

export const OurServiceSection: React.FC<AboutUsProps> = ({id, language, img}) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div>
       <section id={id}>
        <div className="relative w-full lg:h-[172px] md:h-[172px] sm:h-[96px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <h1 className="absolute font-bold ipadairx:text-6xl ipadprox:text-5xl lg:text-5xl md:text-4xl sm:text-2xl text-customeWhite border-b-4 border-customYellow left-24 mt-14">
            {translations[language].ourProject}
          </h1>
        </div>
      </section>
    </div>
  )
}

export const ContactSection: React.FC<AboutUsProps> = ({id, language, img}) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div>
       <section id={id}>
        <div className="relative w-full lg:h-[172px] md:h-[172px] sm:h-[96px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <h1 className="absolute font-bold  lg:text-5xl md:text-4xl sm:text-2xl text-customeWhite border-b-4 border-customYellow left-24 mt-14">
            {translations[language].contactUs}
          </h1>
        </div>
      </section>
    </div>
  )
}

interface AboutUsDescProps {
  id: string;
  language: string;

}

export const AboutSectionDescription: React.FC<AboutUsDescProps> = ({id,language}) => {
  const langKey = language.toUpperCase();
  const translations: { [key: string]: Translations } = Constants.translations;
  return(
    <section id={id} className="lg:w-[1440px] lg:h-[606px] md:w-[714px] md:h-[444px] sm:w-[320px] flex justify-center items-center">
      <div className="flex lg:w-[1127px] lg:h-[542px] sm:w-[288px] sm:h-[1447px] gap-6 ">
        <div className="text-black sm:h-[537px] sm:w-[288px] lg:w-[360px] lg:h-[542px]">
          <div className="lg:w-[360px] lg:h-[29px]"><h1 className="lg:text-2xl md:text-xl sm:text-xs">'ITSMA (อิษมา)'</h1></div>
          <div className="lg:w-[360px] lg:h-[242px] md:w-[531px] md:h-[95px] ">
            <p className="mt-6 indent-6 text-pretty sm:text-xs md:text-xl lg:text-[14px] ">{translations[language].aboutPage2Description1}</p>
          </div>
            <div className="lg:w-[360px] lg:h-[223px] sm:w-[288px] sm:h-[192px] mt-6">
              <img src={aboutUsbuttom} alt="#" className="w-full h-full" />
            </div>
          </div>
        <div className="w-[522px] lg:h-[550px] mr-6">
          <h1 className="text-5xl sm:text-xl text-customBlue font-bold">THE BOXXET</h1>
          <h1 className="text-xs sm:text-[10px] text-black">(บริษัท เดอะ บ๊อกซ์เซ็ต จำกัด)</h1>
          <h1 className="text-xl text-black">DESIGN FOR YOUR FUTURE</h1>
          <div className="text-black flex flex-col text-wrap indent-6 lg:w-[552px] lg:h-[538px]">
            <div className="lg:w-[552px] lg:h-[120px] md:w-[531px] md:h-[95px] sm:w-[288px] sm:h-[84px] mt-6">
              <p dangerouslySetInnerHTML={{ __html: translations[language].aboutPage2Description2 }} />
            </div>
            <div className="lg:w-[552px] lg:h-[120px] md:w-[531px] md:h-[95px] sm:w-[288px] sm:h-[84px] mt-6">
              <p >{translations[language].aboutPage2Description3}</p>
            </div>
            <div className="lg:w-[552px] lg:h-[120px] md:w-[531px] md:h-[95px] sm:w-[288px] sm:h-[84px] mt-16">
              <p >{translations[langKey].aboutPage2Description4}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[167px] lg:h-[542px]">
          <img src={aboutUsbuttomright} alt="styled"  className="w-full h-full"/>
        </div>
      </div>
    </section>
  );
}

interface BoothProps {
  id: string;
  language: string;
  pageId: string
}

export const BoothsSection:React.FC<BoothProps> = ({id, pageId}) => {
  const selectedBoothCategory = BoothData.find(booth => booth.id === pageId)
  const [selectedBoothId, setSelectedBoothId] = useState<string>(
    selectedBoothCategory?.data[0].title || ""
  )

  const selectedBooth = selectedBoothCategory?.data.find(booth => booth.title === selectedBoothId)
  const [selectedImageIndex, setSelectedImagIndex] = useState(0);

  const swiperRef = useRef<any>(null)

  const handleThumbnailClick = (index: number) => {
    setSelectedImagIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return(
    <div id={id} className="w-[1440px] h-[1075px]">
      <div>
        <div className="flex mt-20 ml-40">
        <h1 className="text-black text-4xl">{selectedBoothCategory?.titleMain}</h1>
      </div>
      <div className="flex flex-col justify-start ml-40 mt-8 ">
          <div className="flex text-center gap-6">{selectedBoothCategory?.data.map((booth, index)=>(
            <div key={index} className={`group hover:bg-customYellow ${selectedBoothId === booth.title ? "bg-customYellow" : ""}`}
              onClick={()=> setSelectedBoothId(booth.title)}>
            <img src={booth.img[0]} alt="#" className="w-[167px] h-[167px]" />
            <h1>{booth.title}</h1>
          </div>
          ))}
          </div>
          <div className="bg-customYellow w-[1230px] h-2"></div>
        </div>
        <div className="mt-6 ml-[156px]">
          <div className="flex justify-center items-center gap-8">
            <div className="flex">
              <button className="swiper-button-prev-custom"><ArrowBackIosIcon/></button>
              <Swiper 
                slidesPerView={1}
                initialSlide={selectedImageIndex}
                onSlideChange={(swiper) => setSelectedImagIndex(swiper.activeIndex)}
                onSwiper={(swiper) => swiperRef.current =swiper}
                style={{width: "434px", height: "406px"}}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                modules={[Navigation]}
                className="w-[434px] h-[406px]"
              >{selectedBooth?.img.filter(img => img).map((img,index) =>(
                <SwiperSlide key={index}><img src={img} className="w-full h-full" /></SwiperSlide>
              ))}
              </Swiper>
              <button className="swiper-button-next-custom"><ArrowBackIosIcon className="rotate-180"/></button>
            </div>
            <div className="bg-gray-400 h-[422px] w-1"></div>
            <div className="text-left w-[630px] h-[490px] bg-gray-200">
              <div className="mt-4 ml-4 mr-4">
                <div className="w-[513px] h-9">
                  <h1 className="text-2xl">{selectedBooth?.title}</h1>
                </div>
                {selectedBooth?.price && selectedBooth?.price.length >0 &&(
                  <div>
                    <h2 className="text-xs mt-6">ราคาเริ่มต้น</h2>
                    <h1 className="text-xl">฿ {selectedBooth?.price}</h1>
                  </div>
                )}
                <div className="w-[520px] h-[132px] mt-6">
                  {selectedBooth?.descriptionTitle && selectedBooth?.descriptionTitle.length > 0 &&(
                    <h1 className="text-xs">{selectedBooth?.descriptionTitle}</h1>
                  )}
                  <div className="w-[488px] h-[154px]">
                    {selectedBooth?.Description && selectedBooth.Description.length > 0 && (
                      <ul className="list-disc ml-5 mt-3 max-h-40 overflow-y-auto border border-gray-300 rounded-md p-2">
                        {selectedBooth?.Description?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="w-[600px]">
                    {selectedBooth?.Implementation && selectedBooth?.Implementation.length >0 &&(
                      <ButtomBlue title={selectedBooth?.Implementation ?? ""}/>
                    )}
                  </div>
                  <div className="flex mt-6 justify-center items-center">
                    <ContractButtom />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-20 justify-start">
            {selectedBooth?.img.map((img, index) => (
              <div key={index} className={`w-[182px] h-[164px] gap-2 border-2 transition-all duration-300 ${
                selectedImageIndex === index ? "border-customYellow" : "border-transparent"}`} 
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={img} alt="" className="w-full h-full"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ButtomBlueProps {
  title: string;
}
const ButtomBlue: React.FC<ButtomBlueProps> = ({title}) =>{
  return(
    <div className="bg-[#0E2433] text-white text-center px-6 py-2 rounded-full text-xs font-medium mt-6">
      {title}
    </div>
  )
}

const ContractButtom: React.FC = () =>{
  return(
    <Link to={"/contact"} className="bg-yellow-400 text-black font-bold text-lg px-6 py-3 rounded-lg focus:outline-dashed hover:text-white">
      Contact
    </Link>
  )
}

export const ContractComponent:React.FC<AboutUsDescProps> =({id,language}) =>{
  const translations: { [key: string]: Translations } = Constants.translations;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mail: "",
    subject: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ฟังก์ชันส่งอีเมล
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDescription = `เรื่อง: ${formData.subject} \n\nเรียน: ทางบริษัท The Boxxet \n\n ขอแสดงความนับถือ,\n\n จาก ${formData.name} มีความประสงค์ต้องการติดต่อข้อมูลเพิ่มเติมเกี่ยวกับ${formData.description} \n\n ขอแสดงความนับถือ,\n ${formData.name}\nเบอร์ติดต่อ: ${formData.phone}`;

    // สร้างข้อมูลที่ต้องการส่ง
    const mailtoLink = `mailto:theboxxet.contact@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formattedDescription)}`;

    window.location.href = mailtoLink
  };

  return(
    <section id={id} className="w-[1440px] h-[710px] flex justify-center items-center">
      <div className="flex ">
        <div className="flex flex-col w-[551px] h-[579px] justify-center items-center">
          <div className="flex w-[163px] h-[170px] items-start">
            <img src={TheBoxxetMailImg} alt="" className="h-full w-full" />
          </div>
          <div className="flex gap-1 mt-6 justify-start w-[503px] h-6">
            <MailOutlineIcon />
            <h1>theboxxet.contact@gmail.com</h1>
          </div>
          <div className="flex gap-1 mt-6 w-[503px] h-6">
            <PhoneIcon />
            <h1>095-956-5419, 064-265-9428</h1>
          </div>
          <div className="flex gap-1 mt-6 w-[503px] h-[66px]">
            <LocationOnOutlinedIcon/>
            <div className="flex flex-col">
              <h1 className="font-bold">The Villa Ramindra</h1>
              <h1>{translations[language].address}</h1>
            </div>
          </div>
          <div className="flex gap-1 mt-6 w-[503px] h-[66px]">
            <FacebookOutlinedIcon/>
            <div className="flex flex-col">
              <h1 className="font-bold">THE BOXXET</h1>
              <a href="https://www.facebook.com/boxxet">https://www.facebook.com/boxxet</a>
            </div>
          </div>
          <div className="flex gap-1 mt-6 w-[503px] h-[150px]">
            <FaLine/>
            <div className="flex flex-col">
              <h1 className="font-bold">Line Official</h1>
              <img src={LineIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[551px] h-[623px] mt-6 ml-6 mr-6 text-left">
          <div>
            <h1 className="font-bold text-xl">{translations[language].contactUs}</h1>
          </div>
          <div className="w-[503px] h-[66px] mt-4">
            <h1 className="text-wrap">{translations[language].contractUsDescription}</h1>
          </div>
          <div className="w-[503px] h-[379px] mt-6 ">
            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Contact number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
              <input
                type="email"
                name="mail"
                placeholder="Mail"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface GalleryProps {
  id: string;
  language: string;
  page: Number;
}

export const GalleryComponentPage: React.FC<GalleryProps> = ({ id, language }) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  const totalPages = GalleryImg.length;
  const [currentPage, setCurrentPage] = useState(1);

  // หารูปของหน้าปัจจุบัน
  const currentGallery = GalleryImg.find(g => g.page === currentPage);
  const selectedImages = currentGallery ? currentGallery.images : [];

  return (
      <div id={id} className="items-center justify-center w-[1440px] h-[1860px] mt-8">
          <div className="flex flex-col items-center text-left">
              <div className="flex flex-col self-start ml-40">
                  <h1>{translations[language].galleryDescription}</h1>
              </div>
              <div className="w-[1130px] h-[1620px]">
                  <GalleryImgSection images={selectedImages} />
              </div>

              {/* Pagination */}
              <div className="flex justify-between w-[300px] mt-14">
                  <button
                      className={`px-4 py-2 bg-gray-200 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                  >
                      Previous
                  </button>
                  <span>Page {currentPage} of {totalPages}</span>
                  <button
                      className={`px-4 py-2 bg-gray-200 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                  >
                      Next
                  </button>
              </div>
          </div>
      </div>
  );
};

interface GalleryImgSectionProps {
  images: string[];
}

const GalleryImgSection: React.FC<GalleryImgSectionProps> = ({ images }) => {
  return (
      <div className="mt-6">
          <div className="w-[1130px] h-[500px]">
              <img src={images[0]} alt="" className="w-full h-full" />
          </div>
          <div className="mt-6 flex gap-6 w-[1130px] h-[279px]">
              {images.slice(1, 4).map((img, index) => (
                  <img key={index} src={img} alt="" className="w-full h-full" />
              ))}
          </div>
          <div className="w-[1130px] h-[500px] mt-6">
              <img src={images[4]} alt="" className="w-full h-full" />
          </div>
          <div className="mt-6 flex gap-6 w-[1130px] h-[279px]">
              {images.slice(5, 8).map((img, index) => (
                  <img key={index} src={img} alt="" className="w-full h-full" />
              ))}
          </div>
      </div>
  );
};