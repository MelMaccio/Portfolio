import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Melina Maccio</h1>
        <p>Based in Buenos Aires</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Melina Maccio</div>
        <div className="sns-links">
          <a
            href="https://github.com/MelMaccio"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/melina-maccio/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
