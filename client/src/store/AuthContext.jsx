import { createContext, useContext, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("accessToken");
    return storedUser ? storedUser : null;
  });

  const register = async (username, password) => {
    await axiosInstance
      .post("/auth/register", { username, password })
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
    await axiosInstance
      .post("/auth/login", { username, password })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.accessToken);
          const accessToken = res.data.accessToken;
          localStorage.setItem("accessToken", accessToken);
        }
      })
      .catch((error) => {
        console.log(error);
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
