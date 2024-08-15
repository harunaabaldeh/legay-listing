import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginAsync = async () => {
    const data = {
      username: username,
      passoword: password,
    };
    await axios
      .post("http://localhost:9000/auth/login", data)
      .then((response) => {
        if (response.status === 200) navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginAsync}>Login</button>
    </div>
  );
};

export default Login;
