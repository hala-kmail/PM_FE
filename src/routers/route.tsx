import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage/homepage";
import ProjectsPage from "../pages/Projects/projects";

const Routers = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export default Routers;
