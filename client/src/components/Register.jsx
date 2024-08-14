import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [passoword, setPassword] = useState("");

  const navigate = useNavigate();
  const register = () => {
    const data = {
      username: username,
      passoword: passoword,
    };

    axios
      .post("http://localhost:9000/auth/register", data)
      .then((response) => {
        if (response.status === 200) navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Sign Up</button>
    </div>
  );
};

export default Register;
