import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Navigation/Navigation_Bar";
import './index.css';
import Footer from './Footer/Footer_Bottom';
import { useRoutes } from "react-router-dom";
import Home from './Components/Home/Home';
import AboutUs from './Components/About-us/about';
import ServicePage from './Components/Services/services';
import ContactForm from './Components/Contact/Contact';
import "./Main.css";





function App() {
  let element = useRoutes([
    {path: "/",
      element: <Home />},
      
        
    {path: "/about-us",element: <AboutUs />},
        
     {path: "/services-solutions", element: <ServicePage /> },
      
    
    { path: "/contact-us", element: <ContactForm /> },
  ]);

 return (
 <div className="App" >
    <NavigationBar/> 
       
       <div className='content'>  {element}   </div>

      <Footer/>

  </div>
 
  );
}

export default App;
