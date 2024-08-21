import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("accessToken");
    return storedUser ? storedUser : null;
  });
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    }
  }, [user]);

  const register = async (username, password) => {
    await axiosInstance
      .post("/auth/register", { username, password })
      .then((response) => {
        if (response.status === 201) {
          console.log("login was success. redirects needed");
          navigate("/login");
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
          localStorage.setItem("accessToken", res.data.accessToken);
          const decodedToken = jwtDecode(res.data.accessToken);
          setUserId(decodedToken.id);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = async () => {
    setUser(null);
    setUserId("");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, userId, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
