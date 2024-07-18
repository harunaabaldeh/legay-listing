import { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/jobs").then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div>
      {jobs.map((value, key) => {
        return (
          <div>
            <div>{value.title}</div>
            <div>{value.description}</div>
            <div>{value.location}</div>
            <div>{value.company}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
