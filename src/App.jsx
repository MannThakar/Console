
import Home from './Components/ui/Page/Home'
import Nav from './Components/ui/Page/Nav'
import Details from './Components/ui/Page/Details'
import About from './Components/ui/Page/About'
import { createBrowserRouter,  Outlet,  RouterProvider } from 'react-router-dom';
import './index.css'

const AppLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const RoutingApp = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <Details />
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  },
  
])

const App = () => {
  return (
      <RouterProvider router={RoutingApp} />
  )
}

export default App