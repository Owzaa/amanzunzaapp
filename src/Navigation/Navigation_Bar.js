import React from "react";
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


// Form Completion Function
export default function NavigationBar (){

    return(

<>
   <Navbar bg="light" expand="md">
  <Container fluid>
  <Navbar.Brand href="#home">
        <Image fluid classname="ADSLogo" width="18%"  src="./img/ADSLogoB.png" alt="ADS Amanzunza Debt Soultion Pty Ltd Logo"/>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" /> 
    
    
    <Navbar.Collapse id="navbarScroll">

    <Nav.Link href="./">ADS</Nav.Link>
    <Nav.Link href="#about">About</Nav.Link>

      <Nav
        className="me-auto  my-lg-0"
        style={{ maxHeight: '100px' }}
   
      >

   
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Debt Counseling</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Debt Review</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           Debt Counselor Advise
          </NavDropdown.Item>
        </NavDropdown>
     </Nav>   

  <Nav.Link href="#contactForm">Contact</Nav.Link>
    </Navbar.Collapse>

 

    
  </Container>
</Navbar>


</>


    );
}