// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ handleSearchChange, handleSearch, history }) => {
  const handleClick = () => {
    const searchResult = handleSearch();
    if (searchResult) {
      history.push(`/search/${searchResult.id}`);
    } else {
      history.push("/not-found");
    }
  };

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
      <button onClick={handleClick}>Search</button>
    </nav>
  );
};

Navbar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Navbar;
