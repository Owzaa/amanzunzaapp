import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
//import HomeIndex from './Components/Home/Home';
import NavigationBar from "./Navigation/Navigation_Bar";
import './index.css';
import Footer from './Footer/Footer_Bottom';
import AboutUs from './Components/About-us/about';
import Services from './Components/Services/services';
import ContactForm from './Components/Contact/Contact';
import HomeIndex from './Components/Home/Home';
import {Route} from 'react-router-dom';
import { Routes } from 'react-router';


function App() {
        



 return (
 <Container className="wrap" >
    
  <Routes>
    <Route exact path="/" Component={HomeIndex}/>
    <Route  path="/about" Component={AboutUs}/>
    <Route path="/services" Component={Services}/>
    <Route path="/contact-us" component={ContactForm}/>
  </Routes>

 <NavigationBar  /> 
 <HomeIndex/>
<Footer/>

  </Container>
 
  );
}

export default App;
