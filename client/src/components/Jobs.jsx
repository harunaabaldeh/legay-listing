import { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/jobs").then((response) => {
      setJobs(response.data);
    }).catch((err) => {
      console.log(err)
    });
  }, []);

  console.log(jobs);
  return (
    <div>
      <div className="job-listings">
        <h2>Latest Job Listings</h2>
        {jobs.map((job) => {
          return (
            <ul key={job.id}>
              <li>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: India</p>
                <p>Description: Good Web Developer</p>
                <a href="#">Apply Now</a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
