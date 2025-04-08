import Homepage from "../pages/HomePage/homepage";
import { Routes, Route } from "react-router-dom";
import ProjectsPage from "../pages/Projects/projects";

export default function Routers() {
  return (
    <Routes>
      {/* Public Routes */}
      {/* <Route path="/" element={<LogIn />} /> */}
      {/* <Route path="/login" element={<LogIn />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
    </Routes>
  );
}
