import React from "react";
import PropTypes from "prop-types";

const PropertyCard = ({
  _id,
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
  userID,
  onSaveProperty,
}) => {
  return (
    <div className="PropertyCard">
      <header>
        <h2>{title}</h2>
        <h3>{`${type} - ${city}`}</h3>
        {userID && (
          <button type="button" onClick={() => onSaveProperty(_id)}>
            Save
          </button>
        )}
      </header>
      <section>
        <div>{`Bathrooms: ${bathrooms}`}</div>
        <div>{`Bedrooms: ${bedrooms}`}</div>
        <div>{`Price: £ ${price}`}</div>
      </section>
      <footer>
        <a href={`mailto:${email}`}>Email</a>
      </footer>
    </div>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
