import React from "react";
import Nav from "../components/Nav";
import Home from "../page/Home";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
};

export default Layout;
