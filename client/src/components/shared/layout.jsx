import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
// import Header from "./header";

const Layout = () => {

  return (
    <div
      // className={`flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden ${theme}`}
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <div
        // className="flex flex-col flex-grow w-screen md:w-[70vw] lg:w-[75vw] min-h-screen overflow-y-auto bg-homeBg mt-[60px] md:mt-0"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowY: "auto",
          marginTop: "60px",
        }}
      >
        {/* <Header /> */}
        <div>{<Outlet />}</div>
        {/* <div>Footer</div> */}
      </div>
    </div>
  );
};

export default Layout;
