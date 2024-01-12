import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainPages = () => {
  return (
    <>
      <Navbar2 />

      <Outlet />
      <Footer />
    </>
  );
};

export default MainPages;
