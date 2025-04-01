import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import {menuItems} from "../Config/menuItems"
import BreadCrumbs from "../Components/BreadCrumbs"

const MainLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(true); // Control Navbar

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor:"#f3f3f3" }}>
      
<NavBar fields={menuItems} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
        <div style={{ padding: "16px", flex: 1, backgroundColor:"#ffffff", borderRadius:"10px" }}>
        <BreadCrumbs/>

          <Outlet />
        </div>

        <footer style={{ textAlign: "center", padding: "10px", background: "#f3f3f3" }}>
          © {new Date().getFullYear()} Fluent Design. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;