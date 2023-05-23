import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
        <li><Link to={"/"}><img src={logo} alt="" />{" "}</Link></li>
        </ul>
        <ul>

          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/business"}>Business</Link></li>
          <li><Link to={"/entertainment"}>Entertainment</Link></li>
          <li><Link to={"/general"}>General</Link></li>
          <li><Link to={"/health"}>Health</Link></li>
          <li><Link to={"/science"}>Science</Link></li>
          <li><Link to={"/sports"}>Sports</Link></li>
          <li><Link to={"/technology"}>Technology</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
