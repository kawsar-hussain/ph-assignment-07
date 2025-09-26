import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-in">
        <div className="footer__info">
          <h3>CS — Ticket System</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer__link">
          <div className="link-title">
            <h3>Company</h3>
            <ul className="links">
              <li>
                <a href="" className="link">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Contact Saled
                </a>
              </li>
            </ul>
          </div>
          <div className="link-title">
            <h3>Services</h3>
            <ul className="links">
              <li>
                <a href="" className="link">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>
          <div className="link-title">
            <h3>Information</h3>
            <ul className="links">
              <li>
                <a href="" className="link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="" className="link">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          <div className="link-title">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="" className="link">
                  <i class="fa-brands fa-x-twitter"></i> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <i class="fa-brands fa-linkedin-in"></i> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <i class="fa-brands fa-facebook-f"></i> @CS — Ticket System
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <i class="fa-solid fa-envelope"></i> support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="license">&copy; 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  );
};

export default Footer;
