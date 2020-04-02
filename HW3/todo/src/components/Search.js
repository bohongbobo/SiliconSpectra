import React from "react";

const Search = ({ searchChange }) => {
  return (
    <div className="pa2">
      <label>Search todo: </label>
      <input
        className="pa3 ba b--green bg-lightest-blue white-text"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
