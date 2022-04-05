import React from "react";
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { MDBIcon } from 'mdb-react-ui-kit';


// Form Completion Function
export default function NavigationBar (){

    return(

<>
   <Navbar NavbarSticky="true"  bg="light" expand="lg">
 
  <Navbar.Brand href="./">
        <Image fluid classname="ADSLogo" width="50%"  src="./img/ADStypeLogoB.png" alt="ADS Amanzunza Debt Soultion Pty Ltd Logo"/>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" /> 
    
    
    <Navbar.Collapse id="navbarScroll">
  
    <Nav.Link  className="link-dark ms-2" href="./"> <MDBIcon icon='home' size='lg' /></Nav.Link>
    <Nav.Link className="link-dark ms-2" href="/about">About</Nav.Link>

      <Nav
        className="me-auto  my-lg-0"
        style={{ maxHeight: '100px',fontWeight:'bolder' }}
        navbarScroll
   
      >

   
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/services">Debt Administration</NavDropdown.Item>
          <NavDropdown.Item href="/services">Debt Review Cancellation</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/services">
           Judgements & Adverse
          </NavDropdown.Item>
        </NavDropdown>
     </Nav>   

  <Nav.Link  className="link-dark ms-2" href="/contact-us">Contact</Nav.Link>
    </Navbar.Collapse>
</Navbar>


</>


    );
}