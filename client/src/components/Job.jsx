import { useEffect, useState } from "react";
import SubmitApplication from "./SubmitApplication";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import axiosInstance from "../api/axiosInstance";

const Job = () => {
  const [job, setJob] = useState({});
  const { job_id } = useParams();
  const { isAuthenticated, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobAsync = async () => {
      await axiosInstance
        .get(`/jobs/${job_id}`)
        .then((response) => {
          setJob(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchJobAsync();
  }, [job_id]);

  const handleDelete = async () => {
    console.log("SOMETHING GOING ON HERE");
    try {
      await axiosInstance.delete(`/jobs/${job_id}`, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const isJobOwner = job.userId === userId;

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
        <>
          {isJobOwner ? (
            <button onClick={handleDelete}>Delete</button>
          ) : (
            <SubmitApplication job_id={job_id} />
          )}
        </>
      ) : (
        <p>Login to submit your application</p>
      )}
    </div>
  );
};

export default Job;
