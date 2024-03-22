// Footer.js
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" class="footer">
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/meghana-raikar-515088210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <span class="icon-space"></span>
        <a
          href="https://github.com/meghana-raikar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <span class="icon-space"></span>
        <a
          href="mailto:raikarmeghana17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="mail"></ion-icon>
        </a>
      </div>

      <p>&copy; MovieMagnet. All rights reserved.</p>

      <div class="additional-info">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
