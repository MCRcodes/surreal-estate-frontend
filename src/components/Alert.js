import React from "react";
import PropTypes from "prop-types";

import "../styles/Alert.css";

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <p className={`Alert alert-${success ? "success" : "error"}`}>{message}</p>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
