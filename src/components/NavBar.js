import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../styles/NavBar.css";

const responseFacebook = (response) => {
  console.log(response);
};

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
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add Property</Link>
        </li>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      </ul>
    </div>
  );
}

export default NavBar;
