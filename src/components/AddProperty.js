import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
    type: "",
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    email: "",
  },
  alert: {
    message: "",
    isSuccess: false,
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() =>
        setAlert({
          message: "Property Added",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;

    setFields({ ...fields, [changedField]: newValue });
  };

  return (
    <div className="add-property">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty}>
        <div className="add-property-field">
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Property tagline"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-field">
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="add-property-field">
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detatched">Semi-Detatched</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="add-property-field">
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              type="number"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-field">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-field">
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-field">
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              placeholder="Contact email"
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
