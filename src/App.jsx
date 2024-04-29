
import Home from './Components/ui/Page/Home'
import Nav from './Components/ui/Page/Nav'
import Details from './Components/ui/Page/Details'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './index.css'

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export const RoutingApp = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/details",
    element: <Details />
  }
])
export default App