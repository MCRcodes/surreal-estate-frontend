import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="">Add Property</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
