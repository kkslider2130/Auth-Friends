import React from "react";
import { Link } from "react-router-dom";

const removeToken = () => {
  window.localStorage.removeItem("token");
};
const PrivateNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Fronds</h1>
      </Link>
      <div className="nav-contents">
        <Link to="/">
          <h2 onClick={removeToken}>Log Out</h2>
        </Link>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
