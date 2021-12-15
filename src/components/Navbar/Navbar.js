import React, { useState } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [iconClicked, setIconClicked] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div>
        <Link to="/">
          <h2 className="logo">LOGO</h2>
        </Link>
      </div>
      {/* navbar menu  */}
      <div className={iconClicked ? "navbar-menu active-menu" : "navbar-menu"}>
        <NavLink activeClassName="active" className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="navbar-link" to="/about">
          About
        </NavLink>
        <NavLink
          activeClassName="active"
          className="navbar-link"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink activeClassName="active" className="navbar-link" to="/contact">
          Contact Us
        </NavLink>
        <NavLink className="navbar-link sm-navbar-link" to="/signup">
          Sign Up
        </NavLink>
      </div>
      {/* signup link  */}
      <div>
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </div>
      {/* navbar toggle icon  */}
      <div className="navbar-icon" onClick={() => setIconClicked(!iconClicked)}>
        <i className={iconClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
