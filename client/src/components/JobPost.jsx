import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../store/AuthContext";
import { jwtDecode } from "jwt-decode";

const JobPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [postedDate, setPostedDate] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      location: location,
      company: company,
      posted_date: postedDate,
      userId: userId,
    };
    await axiosInstance
      .post("/jobs", data, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) navigate("/");
      });
  };

  if (!isAuthenticated)
    return (
      <h2 className="auth-text">
        You need to login to be able to submit a job
      </h2>
    );

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Post a New Job
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter job title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter job description"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter job location"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter company name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={postedDate}
            onChange={(e) => setPostedDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPost;
