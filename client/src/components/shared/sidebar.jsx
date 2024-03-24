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
        style={{
          width: "20vw",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>Demo Bank</h3>
          </div>
          <hr/>
          <ul class="list-unstyled components">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/transactions">Transactions</a>
            </li>
            <li>
              <a href="/beneficiaries">Beneficiaries</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
