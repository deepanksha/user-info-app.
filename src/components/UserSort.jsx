import React, { useState } from "react";
import "../style/userSort.scss";

const UserSort = ({ onSort }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSortChange = (e) => {
    const newOrder = e.target.value;
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <div className="container">
      <div className="user-sort">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Ascending (A-Z)</option>
          <option value="desc">Descending (Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default UserSort;
