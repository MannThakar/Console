import Details from "../page/Details";
import About from "../page/About";
import Home from "../page/Home";

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
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
