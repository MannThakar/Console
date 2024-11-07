import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { routes } from "./routes";
import CardProvider from "./context"; // Adjust this import if necessary

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return children;
};

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
          <CardProvider>
            <Routes>{getRoutes(routes)}</Routes>
          </CardProvider>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
