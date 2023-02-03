import React from "react";

import "./footer.css";

import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>

<footer className="footer-distributed">
 
<div className="footer-left">
 
<h3>Corporate<span>Bond</span></h3>
 
<p className="footer-links">
  <ul  style={{display : "flex"}}>

<li><NavLink to="/">Home</NavLink></li>

<li><NavLink to="/Explore" >Explore</NavLink></li>

<li><NavLink to="/About">About</NavLink></li>

<li><NavLink to="/Contact">Contact</NavLink></li>
</ul>



{/* <a href="#">About</a>
·
·
<a href="#">Contact</a> */}
</p>
 
<p className="footer-company-name">BeCorporate &copy; 2022</p>
</div>
 
<div className="footer-center">
 
<div>
<i className="fa fa-map-marker"></i>
<p><span>Jaipur</span> Rajasthan</p>
</div>
 
<div>
<i className="fa fa-phone"></i>
<p>9116403511</p>
</div>
 
<div>
<i className="fa fa-envelope"></i>
<p><a href="abhishekjoshi035@gmail.com">BeCorporate@gmail.com
</a></p>
</div>
 
</div>
 
{/* <div className="footer-right">
 
<p className="footer-company-about">
<span>About the Corporate Bond</span>
We are Creating an Dapp through which we can Trade in Bond Domestic as well as International   &amp; Explore the World.
</p>
 
<div className="footer-icons">
 
<a href="#"><i className="fa fa-facebook"></i></a>
<a href="#"><i className="fa fa-twitter"></i></a>
<a href="#"><i className="fa fa-linkedin"></i></a>
<a href="#"><i className="fa fa-github"></i></a>
 
</div>
 
</div> */}
 
</footer>

      {/* <div id="engadget-footer-social-container">
        <footer id="engadget-footer-social">
          <div className="footer-left">
            <div className="newsletter">
              <h6>Sign up for our insight</h6>
              <div className="input-group">
                <input
                  className="input-group-field"
                  type="email"
                  placeholder="Email address"
                />
                <div className="input-group-button">
                  <input type="submit" className="button" value="Submit" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <h6>Follow us</h6>
            <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
            <i
              className="fa fa-google-plus-square fa-3x"
              aria-hidden="true"
            ></i>
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </div>
        </footer>
      </div>
      <div id="engadget-footer-contact-details-container">
        <footer id="engadget-footer-contact-details">
          <div className="footer-left">
            <div className="contact-details">
              <ul>
                <li>
                  <img className="thumbnail" src="https://placehold.it/80" />
                </li>
                <li>
                  <i className="fa fa-phone fa-lg" aria-hidden="true"></i> 01234
                  567890
                </li>
                <li>
                  <a data-toggle="animatedModal10">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                    Contact us
                  </a>
                </li>
                <li>
                  <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>{" "}
                  Street, City, County, Country
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div> */}
    </>
  );
};

export default Footer;
