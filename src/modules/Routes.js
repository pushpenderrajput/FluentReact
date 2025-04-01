import React from "react";
import { useRoutes } from "react-router-dom";
import FormPage from "./Form/create";
import Data from "../modules/Dataa/view";
import NotFound from "./NotFound/NotFound";
import Role from "../Components/Pages/Role";
import User from "../Components/Pages/User";
import Product from "./Product/Product";
import Dashboard from "../Components/Pages/Home"
const ModuleRoutes = () => {
  const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/home/form", element: <FormPage /> },
    { path: "/home/data", element: <Data /> },
    {path:"/home/product",element:<Product/>},
    {path: "/home/settings/user", element:<User/>},
    {path:"/home/settings/role", element:<Role/>},
    { path: "*", element:<NotFound/> },
  ];

  return useRoutes(routes);
};

export default ModuleRoutes;
