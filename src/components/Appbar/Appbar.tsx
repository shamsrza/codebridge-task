import React from "react";
import Search from "../Search/Search";
import "./appbar.scss";

const Appbar = () => {
  return (
    <div className="appbar container">
      <div className="appbar__content">
        {/* Title for search bar */}
        <div className="appbar__title">
          <h2>Filter by keywords</h2>
        </div>
        {/* Search bar */}
        <div className="appbar__search">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
