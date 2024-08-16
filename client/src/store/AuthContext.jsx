import axios from "axios";
import { createContext, useContext, useState } from "react";
import axiosInstance from "../api/axiosInstance";

// Create an authentication context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("accessToken");
    return storedUser ? storedUser : null;
  });

  const register = async (username, password) => {
    const registerFormData = {
      username: username,
      password: password,
    };
    await axiosInstance
      .post("/auth/register", registerFormData)
      .then((response) => {
        if (response.status === 200) {
          console.log("login was success. redirects needed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = async (username, password) => {
    const loginData = {
      username: username,
      password: password,
    };
    await axiosInstance
      .post("/auth/login", loginData)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.accessToken);
          const accessToken = res.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
