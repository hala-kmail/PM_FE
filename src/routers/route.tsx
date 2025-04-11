import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage/homepage";
import ProjectsPage from "../pages/Projects/projects";
import LoginPage from "../pages/LoginPage/LoginPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
};

export default Routers;
