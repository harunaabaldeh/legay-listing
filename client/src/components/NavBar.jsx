import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Jobs</Link>
          </li>
          <li>
            <Link to="#">Compnies</Link>
          </li>
          <li>
            <Link to="#">Linkbout Us</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <h2>Find your dream job</h2>
        <form action="#" method="get">
          <input type="text" name="keywords" placeholder="Keywords" />
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="company" placeholder="Company" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default NavBar;
