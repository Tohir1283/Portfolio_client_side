/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar "></nav>
      <div className="title">
        <h2>
          <pre>
            <code>{`${"<" + "Tohirul Islam" + " />"}`}</code>
          </pre>
        </h2>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
