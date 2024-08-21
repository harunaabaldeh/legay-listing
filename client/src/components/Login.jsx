import { useState } from "react";
import { useAuth } from "../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <>
      <div className="flex items-center min-h-screen bg-white ">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700">
                Sign in
              </h1>

              <p className="text-gray-500">Sign in to access your account</p>
            </div>

            <div className="m-7">
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Username
                  </label>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="johndoe"
                    className="w-full px-3 py-2 placeholder-black-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100  dark:text-black dark:border-gray-600"
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-black-600 dark:text-black-400"
                    >
                      Password
                    </label>

                    <a
                      href="#!"
                      className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-black-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300  dark:text-black dark:border-gray-600"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign up
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
