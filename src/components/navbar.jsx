// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ handleSearchChange }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/note">Note</Link>
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
    </nav>
  );
};

Navbar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
};

export default Navbar;
