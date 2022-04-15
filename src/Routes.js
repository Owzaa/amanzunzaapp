import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './Components/About-us/about';
import ServicePage from './Components/Services/services';
import ContactForm from './Components/Contact/Contact';
import Home from './Components/Home/Home';




export default function routes(){
   return (
      <Routes>
         <Route  path="/" element={<Home />} />
         <Route path="about-us" element={<AboutUs/>} /> 
         <Route path="/services-solutions" element={<ServicePage/>} /> 
         <Route path="/contact-us" element={<ContactForm />} />
        
      </Routes>
   )
}

