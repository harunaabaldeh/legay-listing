import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../store/AuthContext";

const SubmitJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [posted_date, setPosted_date] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      location: location,
      company: company,
      posted_date: posted_date,
    };
    await axiosInstance.post("/jobs", data).then((res) => {
      if (res.status === 200) navigate("/");
    });
  };

  if (!isAuthenticated)
    return (
      <h2 className="auth-text">
        You need to login to be able to submit a job
      </h2>
    );

  return (
    <form className="create-job-container" onSubmit={handleSubmit}>
      <h1>Post a job</h1>
      <input
        type="text"
        placeholder="title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="location"
        required
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="company"
        required
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="date"
        placeholder="posted_date"
        required
        onChange={(e) => setPosted_date(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitJob;
