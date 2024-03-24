import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = () => {

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
