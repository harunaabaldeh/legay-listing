import { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

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

  return (
    <>
      <Search />
      <div className="job-listings">
        <h2>Latest Job Listings</h2>
        <ul>
          {jobs.map((job) => {
            return (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Description: {job.description}</p>
                <p>Date Posted: {new Date(job.posted_date).toDateString()}</p>
                <Link to={`/jobs/${job.id}`}>Apply Now</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Jobs;
