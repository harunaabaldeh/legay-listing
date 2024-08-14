import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
                <p>Location: India</p>
                <p>Description: Good Web Developer</p>
                <a href="#">Apply Now</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Jobs;
