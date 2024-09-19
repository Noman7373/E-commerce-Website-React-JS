import React from "react";
import useData from "../../hooks/useData";
import { Navigate } from "react-router-dom";

const AlreadySignIn = ({ children }) => {
  const { token } = useData();
  return <>{!token ? children : <Navigate to="/" />}</>;
};

export default AlreadySignIn;
