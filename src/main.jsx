import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddFood from './component/AddFood.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/addFood',
    element: <AddFood></AddFood>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
