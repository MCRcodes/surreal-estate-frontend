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
      // axios
      //   .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      //   .then(({ data }) => {
      //     if (data.length === 0) {
      //       setAlert({ message: "No properties found", isSuccess: true });
      //       setProperties(data);
      //     } else {
      //       setAlert({ message: "", isSuccess: false });
      //       setCity(search);
      //       setProperties(data);
      //     }
      //   })
      //   .catch(() =>
      //     setAlert({ message: "Server error. Please try again later." })
      //   );
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
