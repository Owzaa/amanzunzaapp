import React from 'react'; 
import {Route} from 'react-router';
import About__Us from './About-us/about';
import Services from './Services/services';
import ContactForm from './Contact/Contact';
import HomeIndex from './Home/Home';


export function Router() {
    

    
    return(

<switch>
    <Route path="/" {...HomeIndex('HomeIndex')} />
    <Route path="/about-us" {...About__Us('About_us')} />
    <Route path="/services" {...Services('Services')} />
    <Route path="/contact-us" {...ContactForm('ContactForm')} />
</switch>


    );
} 