import { useState } from "react";
import axios from "axios";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [posted_date, setPosted_date] = useState("");

  const onSubmit = () => {
    const data = {
      title: title,
      description: description,
      location: location,
      company: company,
      posted_date: posted_date,
    };
    axios.post("http://localhost:9000/jobs", data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1>Post a job</h1>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="date"
          placeholder="posted_date"
          onChange={(e) => setPosted_date(e.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CreateJob;
