
import ReactGA from 'react-ga4';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



import HomePage from './containers/HomePage/index';
import AboutPage from './containers/AboutPage/index'; 
import ServicesPage from './containers/ServicesPage/index'; 
import NotFoundPage from './containers/NotFoundPage/index'; 


export default function App() {
 
 
    const gaTrackingId = "UA-205554703-3"; // enter your Tracking ID
      ReactGA.initialize(gaTrackingId);
      ReactGA.send({ hitType: "pageview",page: "/"});
     

 

    return (
    
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="" element={<NotFoundPage/>} />
      </Routes>
     </Router>
  );
}