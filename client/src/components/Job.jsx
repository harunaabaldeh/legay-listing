import { useEffect, useState } from "react";
import SubmitApplication from "./SubmitApplication";
import { useParams } from "react-router-dom";
import axios from "axios";

const Job = () => {
  const [job, setJob] = useState({});
  const { job_id } = useParams();

  useEffect(() => {
    const fetchJobAsync = async () => {
      axios
        .get(`http://localhost:9000/jobs/${job_id}`)
        .then((response) => {
          setJob(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchJobAsync();
  }, []);

  return (
    <div className="job-page">
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>
        <i className="fa-solid fa-location-dot"></i>
        {job.location}
      </p>
      <p>
        <i className="fa-regular fa-building"></i>
        {job.company}
      </p>
      <SubmitApplication job_id={job_id} />
    </div>
  );
};

export default Job;
