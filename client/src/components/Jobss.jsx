import { useEffect, useState } from "react";
import JobSearch from "./JobSearch";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../store/AuthContext";
import CompaniesSlider from "./CompaniesSlider";

const Jobss = () => {
  const [jobs, setJobs] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchJobsAsync = async () => {
      await axiosInstance
        .get("/jobs")
        .then((response) => {
          setJobs(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchJobsAsync();
  }, []);

  if (jobs.length === 0) {
    return (
      <>
        <JobSearch />
        <p>No recente jobs</p>
      </>
    );
  }
  return (
    <>
      <JobSearch />
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Available Job Listings
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => {
              return (
                <div
                  key={job.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {job.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{job.company}</p>
                    <p className="text-gray-500 mb-4">{job.location}</p>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">
                        Posted on{" "}
                        {new Date(job.datePosted).toLocaleDateString()}
                      </span>
                      <a
                        href={`/job/${job.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CompaniesSlider />
    </>
  );
};

export default Jobss;
