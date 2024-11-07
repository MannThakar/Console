import Nav from "../components/Nav";
import Home from "../page/Home";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Nav />
      <Home />
    </>
  );
};

export default Layout;
