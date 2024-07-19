import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Job from "../pages/Job";
import Jobs from "../pages/Jobs";
import CreateJob from "../pages/CreateJob";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [{ path: "/", element: <Jobs /> }],
    // children: [{ path: "/:id", element: <Job /> }],
    // children: [{ path: "/apply", element: <CreateJob /> }],
    // children: [{ path: "/login", element: <Login /> }],
    // children: [{ path: "/register", element: <Register /> }],
  },
]);
