// src/components/AboutUs.js

import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?team,office')`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-center">
            About Us
          </h1>
          <p className="mt-4 text-center text-lg sm:text-xl">
            Learn more about our journey, mission, and the amazing team behind
            our success.
          </p>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our mission is to connect talented individuals with their dream
            jobs. We are committed to fostering a work environment where passion
            meets opportunity, enabling businesses and professionals to thrive
            together.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Haruna A Baldeh
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Valentine Oliver
              </h3>
              <p className="text-gray-600">Design Lead</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                Fatou Sowe
              </h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>

            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Whether you’re looking to join our team or partner with us, we’d
            love to hear from you.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
