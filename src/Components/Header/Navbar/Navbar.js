/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const title = ["< ", "Tohirul Islam", " />"];
  return (
    <div>
      <nav className="navbar ">
        <div className="title">
          <h2>{title[0] + title[1] + title[2]}</h2>
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
      </nav>
    </div>
  );
};

export default Navbar;
