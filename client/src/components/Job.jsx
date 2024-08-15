import { useEffect, useState } from "react";
import SubmitApplication from "./SubmitApplication";
import { useParams } from "react-router-dom";
import axios from "axios";

const Job = () => {
  const [job, setJob] = useState({});

  const { job_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/jobs/${job_id}`)
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{job.title}</h1>
      <SubmitApplication job_id={job_id} />
    </div>
  );
};

export default Job;
