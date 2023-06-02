import React from "react";
import    './Footer.css';

const Footer = () => {
  return (
<div className="myfooter">
      <footer className="hide-when-mobile shefo">
        Designed and developed by Shefo.com
        <span>🧡</span>
      </footer>
      <footer className="show-when-mobile sefo">
        Designed and developed by Shefo.com
        <span>🧡</span>
      </footer>
    
</div>
  );
};

export default Footer;
