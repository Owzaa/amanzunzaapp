import React from "react";
import { NavLink } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => (
  <div className="footer">
    <p className="text-muted text-center" >Copyright © 2022 | Amanzunza Debt Solutions (Pty) Ltd |
    <span id="weblink"><p>Website:<NavLink href="https://www.amanzunzadebtsolutions.co.za">www.amanzunzadebtsolution.co.za</NavLink></p></span>   </p>
         <h5 className="text-muted">Social Media Links:</h5>
  <span className="SocialIcons">
        <a href="https://www.facebook.com/"><MDBIcon fab size="2x" icon="facebook" /></a>
        <a href="https://www.messenger.com/"> <MDBIcon fab size="2x"  icon="facebook-messenger" /> </a>
        <a href="https://www.instagram.com/"><MDBIcon fab size="2x"  icon="instagram" /> </a>
  <a href="https://www.linkedin.com/"><MDBIcon fab size="2x"  icon="linkedin" /> </a>
  <a href="https://www.linkedin.com/"><MDBIcon fab size="2x"  icon="google-plus" /></a>
  </span>
  
  </div>
);

export default Footer;