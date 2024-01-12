import React from "react";
import LoginSignup from "../Pages/LoginSignup";
import Login from "../component/login-signup/Login";
import Signup from "../component/login-signup/Signup";

const GuestRoutes = [
  {
    path: "/",
    element: <LoginSignup />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
];

export default GuestRoutes;
