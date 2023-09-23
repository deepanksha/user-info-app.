import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../style/header.scss";

const Header = () => {
  return (
    <nav>
      <h1>UserInfoHub</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/history"}>History</Link>
        <HashLink to={"/#about"}>About</HashLink>

        <HashLink to={"/#services"}>Services</HashLink>
      </main>
    </nav>
  );
};

export default Header;
