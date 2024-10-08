import Home from "../page/Home";
import Details from "../page/Details";
import About from "../page/About";
import Layout from "../layout/Layout";

export const routes = [
  {
    name: "Layout",
    path: "/",
    component: Layout,
    isPrivate: false,
  },
  {
    name: "Details",
    path: "/details",
    component: Details,
    isPrivate: false,
  },
  {
    name: "About",
    path: "/about",
    component: About,
    isPrivate: false,
  },
];
