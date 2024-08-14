import NavBar from "./components/NavBar";
import Jobs from "./components/Jobs";
import CreateJob from "./components/CreateJob"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register"


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/submit-job" element={ <CreateJob />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
