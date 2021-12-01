/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navItems = document.getElementsByClassName("navbar-links")[0];
  const handleNavLinks = (e) => {
    navItems.classList.toggle("active");
  };

  const title = ["< ", "Tohirul Islam", " />"];
  return (
    <div style={{ position: "fixed",width: "100%", height: ""}}>
      <nav className="navbar ">
        <div className="title">
          <h2>{title[0] + title[1] + title[2]}</h2>
        </div>
        <button className="toggle-button" onClick={handleNavLinks}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/home" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-item">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-item">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
