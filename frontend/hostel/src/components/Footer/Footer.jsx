import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Serene Stay</h3>
          <p>A safe and welcoming home for young women. We combine comfort, security, and community to create an environment where you can focus on your dreams.</p>
          <div className="footer-social">
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-youtube"></i></Link>
          </div>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/rooms">Our Rooms</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li><Link to="/safety">Safety Measures</Link></li>
            <li><Link to="/blog">Community Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact#faq">FAQs</Link></li>
            <li><Link to="/sitemap#faq">SiteMap</Link></li>

          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Cancellation Policy</Link></li>
            <li><Link to="#">House Rules</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Serene Stay. All rights reserved. | Made with <i className="fas fa-heart" style={{ color: "var(--peach)" }}></i> for you</p>
      </div>
    </footer>
  );
};

export default Footer;