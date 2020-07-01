import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import "../styles/NavBar.css";

const LogoutButton = ({ onLogout }) => (
  <button type="button" onClick={onLogout}>
    Logout
  </button>
);

const NavBar = ({ onLogin, onLogout, userID }) => (
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
        <Link to="/saved-properties">Saved Properties</Link>
      </li>
      <li className="navbar-links-item">
        <Link to="/add-property">Add Property</Link>
      </li>
      {!userID ? (
        <FacebookLogin
          appId="3048483165266445"
          autoLoad
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={onLogin}
        />
      ) : (
        <LogoutButton onLogout={onLogout} />
      )}
    </ul>
  </div>
);

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};

export default NavBar;
