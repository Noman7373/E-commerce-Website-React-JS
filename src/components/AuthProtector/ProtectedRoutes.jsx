import React from "react";
import useData from "../../hooks/useData";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { token } = useData();
  return <>{token ? children : <Navigate to="/signup" />}</>;
};

export default ProtectedRoutes;
