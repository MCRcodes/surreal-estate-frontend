import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import "../styles/SideBar.css";

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = () => {
  const { search } = useLocation();

  return (
    <div className="SideBar">
      <div>
        <h3>Filter By</h3>
        <Link to={buildQueryString("query", { city: "Manchester" }, search)}>
          Manchester
        </Link>
        <Link to={buildQueryString("query", { city: "Leeds" }, search)}>
          Leeds
        </Link>
        <Link to={buildQueryString("query", { city: "Sheffield" }, search)}>
          Sheffield
        </Link>
        <Link to={buildQueryString("query", { city: "Liverpool" }, search)}>
          Liverpool
        </Link>
      </div>
      <div>
        <h3>Sort By</h3>
        <Link to={buildQueryString("sort", { price: +1 }, search)}>
          Ascending
        </Link>
        <Link to={buildQueryString("sort", { price: -1 }, search)}>
          Descending
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
