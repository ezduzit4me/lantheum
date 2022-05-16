
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga";



import HomePage from './containers/HomePage/index';
import AboutPage from './containers/AboutPage/index'; 
import ServicesPage from './containers/ServicesPage/index'; 
import NotFoundPage from './containers/NotFoundPage/index'; 


export default function App() {
  const gaTrackingId = "UA-205554703-1"; // enter your Tracking ID
    ReactGA.initialize(gaTrackingId);
    ReactGA.pageview("/");
    ReactGA.pageview("/about");
    ReactGA.pageview("/services");
    ReactGA.event({
      category: "Lantheum",
      action: "Lantheum",
    });

 

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