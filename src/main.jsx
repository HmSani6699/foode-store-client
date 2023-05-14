import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddFood from './component/AddFood.jsx';
import Header from './component/Header.jsx';
import UpdateFood from './component/UpdateFood.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children:[
      {
        path: "/home",
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/foods')
      },
      {
        path: '/addFood',
        element: <AddFood></AddFood>
      },
      {
        path:'/updateFood/:id',
        element:<UpdateFood></UpdateFood>,
        loader:({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
