import Homepage from "../pages/HomePage/homepage";
import { Routes, Route } from "react-router-dom";
import ProjectsPage from "../pages/Projects/projects";
import LoginPage from "../pages/LoginPage/LoginPage";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}
