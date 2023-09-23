import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //abhi
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/home.scss";
// import Loader from "../layout/Loader";
import NotFound from "../layout/NotFound";

import UserSearch from "./UserSearch";
import UserSort from "./UserSort";

function Home({ searchHistory, setSearchHistory }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchHistory, setSearchHistory] = useState([]);

  //abhi
  const navigate = useNavigate();

  const handleViewHistory = () => {
    navigate("/history", { state: { searchHistory } });
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setIsLoaded(true);
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
    setSearchQuery("");

    const searchDetails = {
      username: query,
      company: filtered[0]?.company.name,
    };

    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];

    const isDuplicate = history.some(
      (entry) =>
        entry.username === searchDetails.username &&
        entry.company === searchDetails.company
    );

    if (!isDuplicate) {
      history.push(searchDetails);

      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
  };
  const handleSort = (order) => {
    const sorted = [...filteredUsers].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (order === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setFilteredUsers(sorted);
  };

  if (error) {
    return <NotFound />;
  } else if (!isLoaded) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="home">
        <UserSearch
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="box">
          <UserSort onSort={handleSort} />
          <button onClick={handleViewHistory}>
            <Link to="/history">View Search History</Link>
          </button>
        </div>
        <div className="user-cards">
          {filteredUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
              <span>Company: {user.company.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
