import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Cards = lazy(() => import("../views/ui/Cards"));
const Market = lazy(() => import("../views/ui/Market"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/Cards" /> },
      { path: "/Market", exact: true, element: <Market /> },  
      { path: "/cards", exact: true, element: <Cards /> }    
    
    ],
  },
];

export default ThemeRoutes;
