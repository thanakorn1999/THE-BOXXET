import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './component/page/MainPage';
import AboutUsPage from './component/page/AboutUs';
import GalleryPage from './component/page/Gallery';
import BoothSystem from "./component/page/Booth-System"
import BoothSet from "./component/page/Booth-Set"
import EventRental from "./component/page/Element-Design"
import RentalEvent from "./component/page/Rental-Event"
import ActivityEvent from "./component/page/Activity-Event"
import ContractPage from "./component/page/Contract"
import Gallery from "./component/page/GalleryPage"
import { LanguageProvider,ScrollToTop } from "./component/utils/ComponentsUtil";


const App: React.FC = () => {

  return (
    <LanguageProvider>
      <Router>
      <ScrollToTop/>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path = "/gallery" element={<GalleryPage/>}/>
          <Route path='/booth-system' element = {<BoothSystem/>} />
          <Route path='/booth-set'element={<BoothSet/>}/>
          <Route path='/element-design' element={<EventRental/>}/>
          <Route path='/event-rental' element={<RentalEvent/>}/>
          <Route path='/activity' element={<ActivityEvent/>}/>
          <Route path='/contact' element={<ContractPage/>}/>
          <Route path='/gallery-page' element={<Gallery/>}/>
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
