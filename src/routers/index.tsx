import Homepage from "../HomePage/homepage";
import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      {/* Public Routes */}
      {/* <Route path="/" element={<LogIn />} /> */}
      {/* <Route path="/login" element={<LogIn />} /> */}
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
