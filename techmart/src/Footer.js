import React from 'react';

function Footer() {
  return (
    <footer>
      
    <div className="footer-container">
    <div className="footer-column">
          <h3>Description</h3>
          <p>The vision statement reflects what the company aspires to be in the future. If all employees abide by their vision, they will probably achieve it.</p>
        </div>
        <div className="footer-column">
          <h3>Products</h3>
          <ul>
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
        <h3>Contacts</h3>
          <p>123 Victoria Plaza<br/>City, Nairobi<br/>Phone: (254) 700000000<br/>Email: info@example.com</p>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <p>Privacy & Conditions<br/>Privacy Policy<br/>Terms of Use</p>
        </div>
      </div>
      <div className="row">
<p className="col-sm">
    &copy;{new Date().getFullYear()} COLD-TECH INC |All Rights Reserved |Terms Of Service |
</p>

      </div>
    </footer>
  );
}

export default Footer;
