import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      NYTimes React Scraper
    </Link>
    <div>
      <ul className="navbar-nav">
      <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Search
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/saved"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/saved" className="nav-link">
            Saved
          </Link>
        </li>
       
      </ul>
    </div>
  </nav>
);

export default Navbar;