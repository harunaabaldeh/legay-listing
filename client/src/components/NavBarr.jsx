import { Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { useState } from "react";

const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              LegayPortal
            </a>
          </div>

          {/* Primary navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to=""
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Jobs
            </Link>
            <Link
              to="/submit-job"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Submit Job
            </Link>
            <Link
              to="/about"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* User Profile & Menu Button */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </Link>
                  <Link
                    onClick={logout}
                    className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/jobs"
              className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Jobs
            </a>
            <a
              href="/about"
              className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <a
              href="/login"
              className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </a>
            <a
              href="/register"
              className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarr;
