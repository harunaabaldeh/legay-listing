// src/components/JobSearch.js

import React, { useState } from "react";

const JobSearch = () => {
  const [searchData, setSearchData] = useState({
    keyword: "",
    location: "",
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchData);
    // Add logic to handle search submission, such as querying the backend with the searchData
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
        Find Your Next Job
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center"
      >
        <div className="w-full sm:w-2/3 mb-4 sm:mb-0 sm:mr-4">
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={searchData.keyword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter job title, keywords, or company"
            required
            autoComplete="off"
          />
        </div>

        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4">
          <input
            type="text"
            id="location"
            name="location"
            value={searchData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter location"
            required
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default JobSearch;
