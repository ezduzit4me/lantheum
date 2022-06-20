
import ReactGA from 'react-ga4';
import { Routes,Route } from "react-router-dom";



import HomePage from './containers/HomePage/index';
import AboutPage from './containers/AboutPage/index'; 
import AsiaPage from './containers/AsiaPage/index'; 
import ContactPage from './containers/ContactPage/index'; 
import ServicesPage from './containers/ServicesPage/index'; 
import NotFoundPage from './containers/NotFoundPage/index'; 
import NewsPage from './containers/NewsPage/index'; 


export default function App() {
 
 
    const gaTrackingId = "UA-205554703-3"; // enter your Tracking ID
      ReactGA.initialize(gaTrackingId);
      ReactGA.send({ hitType: "pageview",page: "/"});
     

 

    return (
    
      
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/about" element={<AboutPage/>} exact/>
        <Route path="/asia" element={<AsiaPage/>} exact/>
        <Route path="/contact" element={<ContactPage/>} exact/>
        <Route path="/services" element={<ServicesPage/>} exact/>
        <Route path="/news" element={<NewsPage/>} exact/>
        <Route path="" element={<NotFoundPage/>} />
      </Routes>
     
  );
}