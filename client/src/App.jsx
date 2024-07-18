import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Jobs from "./pages/Jobs";

// import './App.css'

function App() {
  useEffect;

  return (
    <>
      {/* <NavBar /> */}
      {/* <Outlet /> */}
      <Jobs />
    </>
  );
}

export default App;
