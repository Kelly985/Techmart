import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>DESCRIPTION</h3>

          <p> We offer an assortment of quality services to build and preserve the public image of your brand. Our dedicated and experienced professionals specialize in crisis communication, content marketing and social media management.</p>
        </div>
        <div className="footer-column">
          <h3>PRODUCTS</h3>
          <ul className='lii'>
            <li>SmartPhones</li>
            <li>TVs</li>
            <li>Computers</li>
            <li>Headsets</li>
            <li>Printers & Scanners</li>
            <li>Softwares</li>
            <li>Videogame consoles</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONTACTS</h3>
          <p>123 Victoria Plaza<br/>City, Nairobi<br/>Phone: (254) 700000000<br/>Email: info@example.com</p>
        </div>
        <div className="footer-column">
          <h3>LEGAL</h3>
          <p>Privacy & Conditions<br/>Privacy Policy<br/>Terms of Use</p>
        </div>
      </div>
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} COLD-TECH INC | All Rights Reserved | Terms Of Service
        </p>
      </div>
    </footer>
  );
}

export default Footer;
