import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [passoword, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      passoword: passoword,
    };

    axios
      .post("http://localhost:9000/auth/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
