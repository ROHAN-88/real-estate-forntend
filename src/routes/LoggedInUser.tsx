import React from "react";
import MainPages from "../Pages/MainPages";
import Home from "../component/homepages/Home";
import RentCard from "../component/RentPages/RentCard";
import SalePage from "../component/SalesPage/SalePage";
import AddpropertyForm from "../component/add Property Form/AddpropertyForm";

const LoggedInUser = [
  {
    path: "/",
    element: <MainPages />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "rent",
        element: <RentCard />,
      },
      {
        path: "sale",
        element: <SalePage />,
      },
      {
        path: "/addProperty",
        element: <AddpropertyForm />,
      },
    ],
  },
];
export default LoggedInUser;
