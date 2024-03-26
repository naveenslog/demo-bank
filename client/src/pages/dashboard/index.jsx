import React, { useState, useEffect } from "react";
import TitleWrapper from "../../components/shared/title-wrapper";
import ATMCard from "./card";
import Cashflow from "./chart";
import Transactions from "./transactions";
import QuickTransfer from "./quick-transfer";
import { authorizedGet } from "../../helpers/api/base";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const response = await authorizedGet("/transactions/");
        setTransactions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

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
            <h3>
              Cashflow{" "}
              <span style={{ color: "blue" }}> - Current Balance 10000</span>
            </h3>
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
            <Transactions transactions={transactions} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
