import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/history.scss";

const History = ({ searchHistory, setSearchHistory }) => {
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(history);
  }, []);

  return (
    <div className="history-box">
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((userData, index) => (
          <li key={index}>
            <p>Username: {userData.username}</p>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default History;
