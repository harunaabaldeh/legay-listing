import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Jobs</Link>
          </li>
          <li>
            <Link href="#">Compnies</Link>
          </li>
          <li>
            <Link href="#">Linkbout Us</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <div class="search">
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
