import { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../store/AuthContext";

const Jobs = () => {
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
    return <p>No recente jobs</p>;
  }

  return (
    <>
      <Search />
      <div className="job-listings">
        <h2>Latest Job Listings</h2>
        <ul>
          {jobs.map((job) => {
            const isJobOwner = job.userId === userId;
            return (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Description: {job.description}</p>
                <p>Date Posted: {new Date(job.posted_date).toDateString()}</p>
                {isJobOwner ? (
                  <Link to={`/jobs/${job.id}`}>View More</Link>
                ) : (
                  <Link to={`/jobs/${job.id}`}>Apply Now</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Jobs;
