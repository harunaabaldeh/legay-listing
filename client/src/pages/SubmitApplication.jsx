import axios from "axios";
import { useState } from "react";

const SubmitApplication = ({ jobId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [date, setDate] = useState();

  const submit = () => {
    const data = {
      name: name,
      email: email,
      resume: resume,
      data: date,
    };

    axios
      .post(`http://localhost:9000/${jobId}/applications`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="resume"
        onChange={(e) => setResume(e.target.value)}
      />
      <input
        type="date"
        placeholder="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default SubmitApplication;
