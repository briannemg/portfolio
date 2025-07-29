import React from "react";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} Brianne Nelson. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
