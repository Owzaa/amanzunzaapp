import React from 'react'; 
import {Route} from 'react-router-dom';
import AboutUs from './About-us/about';
import Services from './Services/services';
import ContactForm from './Contact/Contact';
import HomeIndex from './Home/Home';


 function Routes() {
    

    
return(

    <switch>
<Routes>
    <Route exact path="/" components={HomeIndex} />
    <Route  path="/about-us" components={AboutUs} />
    <Route path="/services" components={Services} />
    <Route path="/contact-us" components={ContactForm} />
</Routes>
    </switch>



    );
} 
export default Routes;