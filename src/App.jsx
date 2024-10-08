import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { routes } from "./routes";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return children;
};

// Map over routes and return Route components
const getRoutes = (routes) => {
  return routes.map((route, index) => (
    <Route key={index} exact path={route.path} element={<route.component />} />
  ));
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>{getRoutes(routes)}</Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
