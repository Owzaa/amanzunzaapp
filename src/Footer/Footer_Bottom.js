import { MDBIcon } from 'mdb-react-ui-kit';
import React from "react";
import "./footer.css";

 const Font = {size: 16}; 

 React.createElement("h6", { style: Font });
const Footer = () => (
  
 

  <>
  <br/>
  <br/>
    <div className="footer">
      <aside className="Container">
        <address>
  <div className="footerAddressHeader" > 
  <h6  className="text-light"  > GET IN TOUCH: </h6> </div>
        <a href="mailto:thabo@adsolution.co.za">
        <i className="fas fa-envelope"></i>  thabo@adsolution.co.za
          </a>


            <br></br>
            <a href="tel:+27721297813">
            <i className="fas fa-mobile-alt"></i>  (+27)72 1297 813</a><br/>
              <a href="https://www.adsolution.co.za">    <i className="fas fa-globe"> adsolution.co.za</i> </a>
        
    </address>
      </aside>
      <div className="footer__element">
        <p className="text-center" > {new Date().getFullYear()} Copyright ©  | Amanzunza Debt Solutions (Pty) Ltd |
        </p>

      </div> 
      
     </div>
  
    <div className="container" id="SocialIcons"  >
    <h6 className="text-lighter">Follow us:</h6>

      <a className="text-white"  href="https://www.facebook.com/pages/adsolution"><MDBIcon  fab size="2x" icon="facebook" /></a>
      <a className="text-white" href="https://www.messenger.com/pages/adsolution"> <MDBIcon fab size="2x" icon="facebook-messenger" /> </a>
      <a className="text-white" href="https://www.instagram.com/adsolution"><MDBIcon fab size="2x" icon="instagram" /> </a>
      <a className="text-white" href="https://www.linkedin.com/adsolution"><MDBIcon fab size="2x" icon="linkedin" /> </a>
      <a className="text-white" href="https://www.linkedin.com/adsolution"><MDBIcon fab size="2x" icon="google-plus" /></a>
    </div>

  </>
);

export default Footer;