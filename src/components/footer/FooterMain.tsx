import React from "react";

const Footer: React.FC = () => {
  return (
    <>
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#">Video Systems</a>
            </li>
            <li>
              <a href="#">Internet of Things Devices</a>
            </li>
            <li>
              <a href="#">Internet Services in select markets</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">White Papers</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TEK Technologies IoT. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
