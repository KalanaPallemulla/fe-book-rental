import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element, ...rest }) {
  const isAuthenticated = true; // Replace with your actual authentication check

  if (isAuthenticated) {
    return element;
  }

  return <Navigate to="/login" state={{ from: rest.location }} />;
}

export default PrivateRoute;
