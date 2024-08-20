import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(username, password);
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center min-h-screen bg-gray-100 ">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-white-700">
                Sign Up
              </h1>
              <p className="text-white-500 ">Sign in to access your account</p>
            </div>
            <div className="m-7">
              <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                <form className="w-full" onSubmit={handleRegister}>
                  <div className="relative mb-5 floatingLabel_floating-input__uypIu">
                    <input
                      required
                      type="text"
                      id="email"
                      className="w-full h-16 p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-500 focus:shadow-sm dark:border-gray-700"
                      placeholder="Username"
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* <label
                      for="email"
                      className="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform pointer-events-none "
                    >
                      Username
                    </label> */}
                  </div>
                  <div className="relative mb-5 floatingLabel_floating-input__uypIu">
                    <input
                      required
                      type="password"
                      id="password"
                      className="w-full h-16 p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-500 focus:shadow-sm dark:border-gray-700"
                      placeholder="password"
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <label
                      for="password"
                      className="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform pointer-events-none "
                    >
                      Password
                    </label> */}
                  </div>
                  <button className="w-full p-3 text-white bg-indigo-600 rounded-md">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
