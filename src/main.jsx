
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    RouterProvider
  } from "react-router-dom";
import { RoutingApp } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={RoutingApp} />
)
