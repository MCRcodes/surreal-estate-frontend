import React from "react";
import PropTypes from "prop-types";

const PropertyCard = ({
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
}) => {
  return (
    <div className="PropertyCard">
      <header>
        <h2>{title}</h2>
        <h3>{`${type} - ${city}`}</h3>
      </header>
      <section>
        <span>{`Bathrooms: ${bathrooms}`}</span>
        <span>{`Bedrooms: ${bedrooms}`}</span>
        <span>{`Price: £ ${price}`}</span>
      </section>
      <footer>
        <a href={`mailto:${email}`}>Email</a>
      </footer>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
