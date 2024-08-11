import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SubmitApplication = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [date, setDate] = useState();
  const params = useParams();

  const submitApplication = () => {
    const data = {
      name: name,
      email: email,
      resume: resume,
      data: date,
    };

    axios
      .post(`http://localhost:9000/${params.id}/applications`, data)
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
      <button onClick={submitApplication}>Submit</button>
    </div>
  );
};

export default SubmitApplication;
