import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import JobDetail from "./components/JobDetail";
import JobPost from "./components/JobPost";
import JobApplicationForm from "./components/JobApplicationForm";
import Navbarr from "./components/NavBarr";
import UserProfilee from "./components/UserProfilee";
import Jobss from "./components/Jobss";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import BlogPage from "./components/BlogPage";

const App = () => {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Jobss />} />
        <Route path="/submit-job" element={<JobPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        <Route path="/applications/:jobId" element={<JobApplicationForm />} />
        <Route path="/profile" element={<UserProfilee />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
