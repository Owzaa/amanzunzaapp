import React from "react";
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { MDBIcon } from 'mdb-react-ui-kit';

// Form Completion Function
export default function NavigationBar (){

    return(

   <Navbar sticky="top"  bg="white" expand="md">
 
  <Navbar.Brand >
        <Image href="./" className="image-responsive" width="50%"  src="./img/ADStypeLogoB.png" alt="ADS Amanzunza Debt Soultion Pty Ltd Logo"/>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" /> 
    
    
    <Navbar.Collapse id="navbarScroll">
  
    <a href="/" className="link-dark ms-4" > <MDBIcon icon='home' size='lg' /></a>
    <a href="/about-us" className="link-dark ms-2" >About</a>

      <Nav
        className="me-auto ms-0"
        style={{ maxHeight: '100px',fontWeight:'bolder' }}
        navbarScroll
   
      >

        <NavDropdown title="Services" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/services">Debt Administration</NavDropdown.Item>
        <NavDropdown.Item href="/services">Debt Review Cancellation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/services" >
   Judgements & Adverse
        </NavDropdown.Item>
        </NavDropdown>
     </Nav>   

  <Nav.Link  className="link-dark ms-2" href="/contact-us">Contact</Nav.Link>
    </Navbar.Collapse>
</Navbar>


    );
}