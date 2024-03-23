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
          // setter((oldVal) => !oldVal);
          navigate(route); // Use history.push for navigation
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
          width: "30vw",
          height: "100vh",
          overflowY: "scroll",
          backgroundColor: "red",
        }}
      >
        {[
          { icon: "home", name: "Home", route: "/" },
          { icon: "dashboard", name: "Dashboard", route: "/dashboard" },
          { icon: "login", name: "Login", route: "/login" },
          { icon: "signup", name: "signup", route: "/register" },
        ].map((item) => (
          <MenuItem icon={item?.icon} name={item?.name} route={item?.route} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
