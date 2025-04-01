import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/mainLayout";
import NotFound from "../modules/NotFound/NotFound";
import ModuleRoutes from "../modules/Routes";



const AppRoutes = () => (
  <Router>
    <Routes>

      <Route
        path="/"
        element={
            <MainLayout />
        }
      >
        <Route path="/*" element={<ModuleRoutes />} /> 
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
