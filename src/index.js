import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import Error from './pages/Error';
import Search from './pages/Search';
import Items from './pages/Items';
import Exhibits from './pages/Exhibits';
import Display from './pages/Display'

import './App.css';
import Collections from "./pages/Collections";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />,  
      },
      {
        path: "/items",
        element: <Items />
      },
      {
        path: "/collections",
        element: <Collections />
      },
      {
        path: "/exhibits",
        element: <Exhibits />
      },
      {
        path: "/display/:id",
        element: <Display />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`https://uogguafak.omeka.net/api/items/${params.id}`);
            return response.json();
          } catch (err) {
            return err
          }
        }
      }
    ]
  }
])

root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
