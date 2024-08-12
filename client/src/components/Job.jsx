import React from "react";
import SubmitApplication from "./SubmitApplication";
import { useParams } from "react-router-dom";

const Job = () => {
  const params = useParams();
  const jobId = params.id;
  return (
    <div>
      <h1>Job Detail</h1>
      <SubmitApplication jobId={jobId} />
    </div>
  );
};

export default Job;
