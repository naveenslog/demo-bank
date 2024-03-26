import React from "react";
import TitleWrapper from "../../components/shared/title-wrapper";
import ATMCard from "./card";
import Cashflow from "./chart";
import Transactions from "./transactions";
import QuickTransfer from "./quick-transfer";

const Dashboard = () => {
  return (
    <div>
      <TitleWrapper title={"Dashboard"} />
      <div className="container" style={{ padding: 16 }}>
        <div className="row dashboard-row">
          <div className="col">
            <h3>Your Card</h3>
            <ATMCard />
          </div>
          <div className="col" style={{ height: 240 }}>
            <h3>Cashflow <span style={{ color: "blue" }}> - Current Banance 10000</span></h3>
            <Cashflow />
          </div>
        </div>
        <div className="row dashboard-row">
          <div className="col">
            <h3>Quick Transfer</h3>
            <QuickTransfer />
          </div>
          <div className="col" style={{ maxHeight: 240 }}>
            <h3>Transactions</h3>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
