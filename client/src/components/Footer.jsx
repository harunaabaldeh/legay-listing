// src/components/Footer.js

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to providing the best job opportunities and
              resources for both employers and job seekers. Join us to discover
              your next career step.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="hover:text-blue-400 transition-colors"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@legay.com</li>
              <li className="text-gray-400">Phone: +220 756 7288</li>
              <li className="text-gray-400">
                Sinchu Alagie, Coastal Road, The Gambia
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.99 3.656 9.127 8.438 9.877v-6.987h-2.54V12h2.54v-2.06c0-2.506 1.493-3.887 3.777-3.887 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.24 0-1.626.771-1.626 1.563V12h2.773l-.443 2.89h-2.33v6.987C18.344 21.127 22 16.99 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.17a4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.67 3.15a4.822 4.822 0 00-.665 2.475 4.922 4.922 0 002.188 4.107 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.95 4.89a4.902 4.902 0 01-2.224.084 4.934 4.934 0 004.604 3.417 9.868 9.868 0 01-6.102 2.102c-.395 0-.788-.023-1.17-.069A13.94 13.94 0 007.546 21c9.142 0 14.307-7.721 14.307-14.426 0-.219-.005-.438-.014-.655A10.174 10.174 0 0024 4.59a9.869 9.869 0 01-2.825.775z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.19 20.45H3.54V9.11h3.65v11.34zm-1.83-12.9h-.02c-1.22 0-2.02-.84-2.02-1.89 0-1.07.82-1.89 2.06-1.89 1.24 0 2.02.82 2.04 1.89 0 1.05-.8 1.89-2.06 1.89zm14.63 12.9h-3.64v-5.84c0-1.47-.53-2.47-1.86-2.47-.98 0-1.56.67-1.82 1.32-.09.22-.11.52-.11.82v6.17H9.88V9.11h3.5v1.55h.05c.48-.92 1.67-2.25 3.86-2.25 2.67 0 4.67 1.75 4.67 5.52v6.52z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; 2024 LegayPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
