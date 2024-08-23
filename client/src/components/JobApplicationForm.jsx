import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../api/axiosInstance";

const JobApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    date: "",
  });
  const [userId, setUserId] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("USE EFFECT " + token);
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("UserId is not available");
      return;
    }

    const data = {
      applicantName: formData.name,
      applicantEmail: formData.email,
      resume: formData.resume,
      dateApplied: formData.date,
      jobId: jobId,
      userId: userId,
    };

    const token = localStorage.getItem("accessToken");
    console.log("TOKEEEEEEEEEEEEEEEEN " + token);
    await axiosInstance
      .post(`/applications/${job_id}`, data, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Submit Your Application
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-sm sm:text-base text-gray-700 font-semibold mb-2"
          >
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
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
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
