import NavBar from "./components/NavBar";
import Jobs from "./components/Jobs";
import SubmitJob from "./components/SubmitJob";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Job from "./components/Job";
import UserProfile from "./components/UserProfile";
import JobDetail from "./components/JobDetail";
import JobPost from "./components/JobPost";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <JobPost /> */}
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/submit-job" element={<JobPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs/:job_id" element={<JobDetail />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
