import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import axiosInstance from "../api/axiosInstance";

const JobDetail = () => {
  const [job, setJob] = useState({});
  const { job_id } = useParams();
  const { isAuthenticated, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobAsync = async () => {
      await axiosInstance
        .get(`/jobs/${job_id}`)
        .then((response) => {
          setJob(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchJobAsync();
  }, [job_id]);

  const handleDelete = async () => {
    console.log("SOMETHING GOING ON HERE");
    try {
      await axiosInstance.delete(`/jobs/${job_id}`, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const isJobOwner = job.userId === userId;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {job.title}
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          {new Date(job.posted_date).toDateString()}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Company Logo"
            className="w-12 h-12 rounded-full mb-2 sm:mb-0 sm:mr-4"
          />
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {job.company}
            </h2>
            <p className="text-gray-600">{job.location}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Job Description
        </h3>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Requirements
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700">
            Bachelor's degree in Computer Science or related field
          </li>
          <li className="text-gray-700">
            Proficiency in JavaScript, HTML, CSS
          </li>
          <li className="text-gray-700">
            Experience with React.js and Node.js
          </li>
          <li className="text-gray-700">
            Familiarity with AWS or other cloud platforms
          </li>
          <li className="text-gray-700">
            Strong problem-solving skills and attention to detail
          </li>
        </ul>
      </div>

      <div className="text-center">
        <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          <Link to={`/applications/${job_id}`}>Apply Now</Link>
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
