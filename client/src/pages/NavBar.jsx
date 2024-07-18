import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/jobs">Home</Link>
          <Link to="/apply">Submit Job</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
