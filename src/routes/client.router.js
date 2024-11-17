import React from "react";
import Register from "../pages/client/Register/index";
import Login from "../pages/client/Login";
import Home from "../pages/client/Home";
import PrivateRoute from "./PrivateRoute";

const clientRoutes = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <PrivateRoute element={<Home />} />,
  },
];
export default clientRoutes;
