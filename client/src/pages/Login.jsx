import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passoword, setPassword] = useState("");

  const onSubmit = (e) => {
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
    console.log("logged in");
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="passoword"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={onSubmit}>Login</button>
    </div>
  );
};

export default Login;
