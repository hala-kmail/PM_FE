import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage/homepage";
import ProjectsPage from "../pages/Projects/projects";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProjectDetails from "../pages/Project details/Project Details";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/projects/:projectName" element={<ProjectDetails />} />
    </Routes>
  );
};

export default Routers;
