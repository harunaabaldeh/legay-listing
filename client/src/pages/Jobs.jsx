import { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/jobs").then((response) => {
      setJobs(response.data);
    });
  }, []);

  console.log(jobs);
  return (
    <div>
      {/* {jobs.map((value, key) => {
        return (
          <div>
            <div>{value.title}</div>
            <div>{value.description}</div>
            <div>{value.location}</div>
            <div>{value.company}</div>
          </div>
        );
      })} */}
      <div class="job-listings">
        <h2>Latest Job Listings</h2>
        {jobs.map((value, keey) => {
          return (
            <ul>
              <li>
                <h3>{value.title}</h3>
                <p>Company: {value.company}</p>
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
