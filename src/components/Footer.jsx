import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a
          href="mailto:briannemg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://github.com/briannemg"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/brianne-gerber-nelson/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="resume-link-container">
        <a href="/resume" className="resume-link">
          View my Resume
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Brianne Nelson. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
