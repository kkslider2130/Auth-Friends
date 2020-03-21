import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleMode }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Fronds</h1>
      </Link>
      <div className="nav-contents">
        <Link to="/profile">
          <i className="far fa-user-circle"></i>
        </Link>

        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
