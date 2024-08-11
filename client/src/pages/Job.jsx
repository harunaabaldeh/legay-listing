import React from "react";
import SubmitApplication from "./SubmitApplication";
import { useParams } from "react-router-dom";

const Job = () => {
  const params = useParams();
  return (
    <div>
      <h1>Job Detail</h1>
      <SubmitApplication jobId={params.id} />
    </div>
  );
};

export default Job;
