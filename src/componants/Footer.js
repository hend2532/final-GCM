import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../image/logo1.png";

import "../css/footer.css";
// import { AlertLink } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p>
            {/* {" "} */}
            <img src={footerLogo} alt="Footer logo" className="footer-logo" />
          </p>
          <p>
            GCM is a global leader in sustainable chemical manufacturing for
            cleaning , hair care, and skincare products. We combine innovation
            with eco-friendly practices to deliver high-quality, safe products.
            Partner with us for a greener future!
          </p>
          <p>
            {/* {" "} */}
            <span className="contacts">
              <p>Contact Us on:</p>
              <p>+20 101 6588 468</p>
            </span>
          </p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <Link
                to={'/home'}
                className="aaa">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/category'} className="aaa">
                Cleaning 
              </Link>
            </li>
            <li>
              <Link to={'/category'} className="aaa">
              Cosmetics
              </Link>
            </li>
            <li>
              <Link to={'/category'} className="aaa">
                Cleaning Product
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-social">
        <span className="p">
          <a href="https://www.facebook.com/profile.php?id=61556003646494&mibextid=ZbWKwL">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </span>

        <span className="p">
          {" "}
          <a href="https://www.instagram.com/cogcm_inc?igsh=MTkwaWpsbXN6a2hkeA==">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </span>

        <span className="p">
          {" "}
          <a href="https://vm.tiktok.com/ZMMbLhnjj">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </span>

        <span className="p">
          {" "}
          <a href="https://www.facebook.com/profile.php?id=61556003646494&mibextid=ZbWKwL">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
      </div>

      <div className="footer-copyright">
        <p>2024 © GCM </p>
      </div>
    </footer>
  );
}

export default Footer;
