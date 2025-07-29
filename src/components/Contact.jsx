import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via any of the methods below!</p>

      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a href="mailto:briannemg@gmail.com">briannemg@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            href="https://linkedin.com/in/brianne-gerber-nelson"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/brianne-gerber-nelson
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a
            href="https://github.com/briannemg"
            target="_blank"
            rel="noreferrer"
          >
            github.com/briannemg
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
