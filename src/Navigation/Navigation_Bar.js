import React from "react";
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { MDBIcon } from 'mdb-react-ui-kit';

// Form Completion Function
export default function NavigationBar (){

    return(

   <Navbar sticky="top"  bg="white" expand="lg">
 
  <Navbar.Brand >
        <Image href="/" className="image-responsive" width="35%"  src="./img/ADStypeLogoB.png" alt="ADS Amanzunza Debt Soultion Pty Ltd Logo"/>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" /> 
    
    
    <Navbar.Collapse id="navbarScroll">
  
    <a href="/" className="link-lighter md-2" > <MDBIcon icon='home' size='lg' /> </a>
    <Nav.Link href="/about-us" className="link-dark md-2" > About</Nav.Link>

      <Nav
        className="me-auto md-2"
        style={{ maxHeight: '100px',fontWeight:'bolder' }}
        navbarScroll
   
      >

        <NavDropdown title="Services" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/services-solutions">Debt Administration</NavDropdown.Item>
        <NavDropdown.Item href="/services-solutions">Debt Review Cancellation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/services-solutions" >
   Judgements & Adverse
        </NavDropdown.Item>
        </NavDropdown>
     </Nav>   

  <Nav.Link  className="link-dark md-2" href="/contact-us">Contact</Nav.Link>
    </Navbar.Collapse>
</Navbar>


    );
}