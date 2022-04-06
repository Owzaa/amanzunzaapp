import React from "react";
import { NavLink } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';
import "./footer.css";


const Footer = () => (
  <div className="footer">
      <div className="footer__element">
    <p className="text-muted text-center" >2022 Copyright ©  | Amanzunza Debt Solutions (Pty) Ltd |
     </p>
    <span className="text-center" id="weblink"><p>Website:<NavLink href="https://www.amanzunzadebtsolutions.co.za">www.amanzunzadebtsolution.co.za</NavLink></p></span>  
</div> 

<hr></hr>     
 
 <h5 className="text-muted">Follow us::</h5>
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