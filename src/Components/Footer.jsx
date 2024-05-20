import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="container">
          <div className="sections">
            <h3>Address</h3>
            <p>
              SAS Infonet Building, C-133, Mohali Bypass, Phase-8, Industrial
              Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160071
            </p>
            
            <h3>SIGN UP FOR THE NEWSLETTER</h3>
            <div className="sign-up">
            <input type="text" placeholder="E-mail" />
            <button className="signup-btn" >Sign-Up</button></div>
          </div>

          <div className="sections">
            <h3>Important Link</h3>
            <li><Link className="footer-el" to="/">
              Home
            </Link></li>
            <li><Link className="footer-el" to="/AboutUs">
              AboutUs
            </Link></li>

            <li> <Link className="footer-el" to="/Services">
              Services
            </Link></li>

            <li> <Link className="footer-el" to="/Contact">
              Contact
            </Link></li>
          </div>
          <div className="sections">
            <h3>Work Inquries</h3>
            <p>Interested in working with us</p>
            <Link className="footer-el" to="/">team@codebeelab.com</Link>
            
            <h3>Career</h3>
            <p>Looking for a job opportunity? See open positions</p>
          </div>
        </div>
      </div>
      <div className="footer-end">Copyright © 2022 Codebeelab. All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
