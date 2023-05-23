import React from "react";
import logo from "../../assets/logo.png";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div id="footul">
        <ul>
          <li>
            <button><Link to={"/about"}>About-us</Link></button>
          </li>
          <li>
            <button><Link to={"/contact-us"}>Contact-us</Link></button>
          </li>
        </ul>
      <div id="CloudNote">
        <img width={"150vw"} src={logo} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Footer;
