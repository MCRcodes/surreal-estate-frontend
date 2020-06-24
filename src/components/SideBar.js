import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { buildQueryString } from "../helpers";

import "../styles/SideBar.css";

const SideBar = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString(
      "query",
      { title: { $regex: searchValue } },
      search
    );

    push(newQueryString);
  };

  return (
    <div className="SideBar">
      <form onSubmit={handleSearch}>
        <input
          labelled-by="search"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button id="search" type="submit">
          Search
        </button>
      </form>
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
