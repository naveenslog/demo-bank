import React from "react";

const Sidebar = () => {

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
          <hr />
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
          <div class="" style={{position: "absolute", bottom: "30px", padding: "20px 0 0 16px"}}>
            <div>
              <a href="#">Logout</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
