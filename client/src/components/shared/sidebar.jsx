import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const MenuItem = ({ icon, name, route }) => {
    const colorClass =
      window.location.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <div
        onClick={() => {
          navigate(route);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </div>
    );
  };

  return (
    <>
      <div
        // className={`${className}${appendClass}`}
        style={{
          width: "20vw",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        {/* {[
          { icon: "home", name: "Home", route: "/" },
          { icon: "dashboard", name: "Dashboard", route: "/dashboard" },
          { icon: "login", name: "Login", route: "/login" },
          { icon: "signup", name: "signup", route: "/register" },
        ].map((item) => (
          <MenuItem icon={item?.icon} name={item?.name} route={item?.route} />
        ))} */}
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>Demo Bank</h3>
          </div>

          <ul class="list-unstyled components">
            <li class="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/beneficiaries">Beneficiaries</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Signup</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
