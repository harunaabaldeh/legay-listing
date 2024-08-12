import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import router from "../src/router/router.jsx";
import { router } from "./router/router.jsx";
import { RouterProvider, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>,
  </React.StrictMode>
);
