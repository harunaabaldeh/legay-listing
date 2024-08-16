import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submit-job">Submit Job</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <p className="logout-button" onClick={logout}>
                  Logout
                </p>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
