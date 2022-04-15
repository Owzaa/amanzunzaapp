import { MDBIcon } from 'mdb-react-ui-kit';
import React from "react";
import { NavLink } from "react-bootstrap";
import "./footer.css";

 const Font = {size: 16}; 

 React.createElement("h6", { style: Font });
const Footer = () => (
  
 

  <>
    <div className="footer">
      <aside className="address">
        <address>
  <div className="footerAddressHeader" > 
  <h6  className="text-muted" styles={Font}> Our Contact Details </h6> </div>
          <span>  <a href="mailto:thabo@adsolution.co.za">
            <MDBIcon fab size="2x" icon="mailBox" /> thabo@adsolution.co.za
          </a>


            <br></br>
            <a href="tel:+27721297813">Mobile: (+27)72 1297 813</a></span>
        </address>
      </aside>
      <div className="footer__element">
        <p className="text-center" >2022 Copyright ©  | Amanzunza Debt Solutions (Pty) Ltd |
        </p>
        <span className="text-center" id="weblink"><p>Website:<NavLink href="https://www.adsolution.co.za"> adsolution.co.za</NavLink></p></span>

      </div>  </div>
    <hr></hr>

    <h5 className="text-muted">Follow us:</h5>
    <span className="SocialIcons">
      <a href="https://www.facebook.com/adsolution/"><MDBIcon fab size="2x" icon="facebook" /></a>
      <a href="https://www.messenger.com/adsolution/"> <MDBIcon fab size="2x" icon="facebook-messenger" /> </a>
      <a href="https://www.instagram.com/"><MDBIcon fab size="2x" icon="instagram" /> </a>
      <a href="https://www.linkedin.com/"><MDBIcon fab size="2x" icon="linkedin" /> </a>
      <a href="https://www.linkedin.com/"><MDBIcon fab size="2x" icon="google-plus" /></a>
    </span>

  </>
);

export default Footer;