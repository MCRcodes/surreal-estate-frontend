import React, { useState, useEffect } from "react";
import Proptypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./SideBar";
import { getProperties, filterByCity } from "../requests";

import "../styles/Properties.css";

const Properties = ({ location }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  useEffect(() => {
    getProperties(setProperties, setAlert);
  }, []);

  const { search } = location;
  const [currentCity, setCity] = useState(search);
  useEffect(() => {
    const decodedCurrentCity = decodeURIComponent(currentCity);
    if (search !== decodedCurrentCity) {
      filterByCity(search, setCity, setProperties, setAlert);
    }
  }, [search, currentCity]);

  return (
    <div className="Properties">
      <Sidebar />
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

Properties.propTypes = {
  location: Proptypes.shape({
    search: Proptypes.string,
  }).isRequired,
};

export default Properties;
