import { useEffect, useState } from "react";
import SubmitApplication from "./SubmitApplication";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import axiosInstance from "../api/axiosInstance";

const Job = () => {
  const [job, setJob] = useState({});
  const { job_id } = useParams();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchJobAsync = async () => {
      axiosInstance
        .get(`/jobs/${job_id}`)
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
      {isAuthenticated ? (
        <SubmitApplication job_id={job_id} />
      ) : (
        <p>Loging to submit your application</p>
      )}
    </div>
  );
};

export default Job;
