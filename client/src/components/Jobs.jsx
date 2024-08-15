import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobsAsync = async () => {
      await axios
        .get("http://localhost:9000/jobs")
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
                <p>Date Posted: {job.posted_date}</p>
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
