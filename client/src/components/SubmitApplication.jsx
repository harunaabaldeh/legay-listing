import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../api/axiosInstance";

const SubmitApplication = ({ job_id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [date, setDate] = useState();
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    }
  }, []);

  const handleSubmitAsync = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("UserId is not available");
      return;
    }

    const data = {
      application_name: name,
      application_email: email,
      resume: resume,
      application_date: date,
      job_id: job_id,
      userId: userId,
    };

    await axiosInstance
      .post(`/applications/${job_id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="submit-job-container" onSubmit={handleSubmitAsync}>
      <input
        required
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required
        type="text"
        placeholder="resume"
        onChange={(e) => setResume(e.target.value)}
      />
      <input
        required
        type="date"
        placeholder="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitApplication;
