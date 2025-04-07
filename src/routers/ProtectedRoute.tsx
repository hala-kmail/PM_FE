import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { RootState } from "../store";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const user = useSelector((state: RootState) => state.auth.user);
  const token = localStorage.getItem("token");

  // if (!user && !token) {
  //   // Redirect to login if no user or token exists
  //   return <Navigate to="/login" replace />;
  // }

  return children;
};

export default ProtectedRoute;
