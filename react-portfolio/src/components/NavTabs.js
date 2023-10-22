import React from "react";
import "./NavTabs.css"; // Importing the CSS file for custom styles

function NavTabs(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
      {/* eslint-disable-next-line */}
      <a className="navbar-brand" href="#">
        Jess Rama
      </a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#myportfolio"
            onClick={() => props.handlePageChange("MyPortfolio")}
            className={props.currentPage === "MyPortfolio" ? "nav-link active" : "nav-link"}
          >
            My Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;

