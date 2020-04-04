import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer id="stickyFooter" className="footer mt-4 pb-3">
      <span>
        <br></br>Shea Rose Farm, Inc.
                2411 Waxhaw Marvin Road
                Marvin, NC  28173
        <br></br>shearose@mindspring.com
        <br></br>704-843-4306
        <br></br>Copyright © 2016 SHEA-ROSE FARM. All rights reserved.
        <div className = "social-container" >
        <a
          href="https://www.facebook.com/shearosefarm/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
        </span>
    </footer>
  );
}

export default Footer;