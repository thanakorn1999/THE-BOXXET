import { Constants, Translations } from "../constants/Constants";

function Session(headerSesion: string, language: string, pic: string, landing: string) {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <section className="mx-20 h-screen flex flex-col justify-center">
      {/* Header ABOUT */}
      <div className="justify-start text-center sm:text-left">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-wide w-full">
          {headerSesion}
        </h1>
      </div>

      {/* รูปภาพซ้าย */}
      <div className="flex flex-col sm:flex-row justify-start items-center sm:items-start mt-20">
        <img src={pic} alt={landing} className="max-w-full h-auto object-cover sm:w-1/2" />
        {/* ข้อความขวา */}
        <div className="flex flex-col justify-center items-start text-left mx-9 sm:w-1/2 mt-9 sm:mt-0">
          <h1 className="text-xl font-bold">{translations[language].contractUsMainTitle}</h1>
          <h2 className="text-lg">{translations[language].contractUsSubTitle}</h2>
          <p className="text-gray-600 mt-9 whitespace-normal mb-4">{translations[language].contractUsdescription}</p>
          <button className="bg-customBlue text-customYellow py-2 px-4 rounded-lg hover:bg-customYellow hover:text-customBlue transition-all mt-4">
            {translations[language].contactUs}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Session;