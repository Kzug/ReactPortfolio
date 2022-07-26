import React from "react";
import "../styles/Footer.css";

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer>
      <div className="row footer-row">
        <div className="footer-social-list">
          <a
            href="https://github.com/Kzug"
            className="footer-social-link link-hover-effect link-hover-effect-white"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/kiersten-zug-124276b8/"
            className="footer-social-link link-hover-effect link-hover-effect-white"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kierstenzug@gmail.com"
            className="footer-social-link link-hover-effect link-hover-effect-white"
            target="_blank"
          >
            E-mail
          </a>
          <a
            href="../assets/ResumeKierstenZug.pdf"
            className="footer-social-link link-hover-effect link-hover-effect-white"
            target="_blank"
            download
          >
            Resume
          </a>
        </div>

        <div className="credit">
          Portfolio design inspired by{" "}
          <a className="creditlink" href="https://www.youtube.com/c/DavidBragg">
            David Bragg
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
