import { createBrowserRouter } from "react-router-dom";
import App from "../App";

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
