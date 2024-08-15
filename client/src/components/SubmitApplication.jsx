import axios from "axios";
import { useState } from "react";

const SubmitApplication = ({ job_id }) => {
  const [applicationName, setApplicationName] = useState("");
  const [applicationEmail, setApplicationEmail] = useState("");
  const [resume, setResume] = useState("");
  const [applicationDate, setApplicationDate] = useState();

  const submit = () => {
    const data = {
      name: applicationName,
      email: applicationEmail,
      resume: resume,
      date: applicationDate,
      job_id: job_id,
    };

    console.log(data);

    axios
      .post(`http://localhost:9000/applications/${job_id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setApplicationName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setApplicationEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="resume"
        onChange={(e) => setResume(e.target.value)}
      />
      <input
        type="date"
        placeholder="date"
        onChange={(e) => setApplicationDate(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default SubmitApplication;
