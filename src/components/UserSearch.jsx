import React from "react";
import "../style/userSearch.scss";

const UserSearch = ({ onSearch, searchQuery, setSearchQuery }) => {
  const handleSearch = () => {
    onSearch(searchQuery);

    setSearchQuery("");
  };

  return (
    <div className="search-wrapper">
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </label>
    </div>
  );
};

export default UserSearch;
