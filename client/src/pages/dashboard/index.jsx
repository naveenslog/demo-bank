import React, { useState, useEffect } from "react";
import TitleWrapper from "../../components/shared/title-wrapper";
import ATMCard from "./card";
import Cashflow from "./chart";
import Transactions from "./transactions";
import QuickTransfer from "./quick-transfer";
import { authorizedGet, authorizedPost } from "../../helpers/api/base";
import {
  showFailureToastMessage,
  showSuccessToastMessage,
} from "../../helpers/others";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [transactionsLoading, setTransactionsLoading] = useState(true);
  const [beneficiariesLoading, setBeneficiariesLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    beneficiary: null,
  });
  const [userData, setUserData] = useState({});

  const fetchTransactions = async () => {
    try {
      setTransactionsLoading(true);
      const response = await authorizedGet("/transactions/");
      setTransactions(response.data);
      setTransactionsLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactionsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchBeneficiaries();
    fetchBalance();
  }, []); // eslint-disable-line

  const fetchBalance = async () => {
    try {
      const response = await authorizedGet("/accounts/check-balance/");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching Beneficiaries:", error);
    }
  };
  const fetchBeneficiaries = async () => {
    try {
      setBeneficiariesLoading(true);
      const response = await authorizedGet("/beneficiaries/");
      setBeneficiaries(response.data);
      setBeneficiariesLoading(false);
    } catch (error) {
      console.error("Error fetching Beneficiaries:", error);
      setBeneficiariesLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTransfer = async (event) => {
    event.preventDefault();
    try {
      const response = await authorizedPost(
        "/transactions/transfer/",
        formData
      );
      if (response.status === 200) {
        showSuccessToastMessage("Transfer Successful!");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      showFailureToastMessage("Error Transferring Amount");
    }
  };

  return (
    <div>
      <TitleWrapper title={"Dashboard"} />
      <div className="container" style={{ padding: 16 }}>
        <div className="row dashboard-row">
          <div className="col">
            <h3>{userData?.user?.email}</h3>
            <ATMCard userData={userData} />
          </div>
          <div className="col" style={{ height: 240 }}>
            <h3>
              {/* Cashflow{" "} */}
              <span style={{ color: "blue" }}> Current Balance: {userData?.balance}</span>
            </h3>
            <Cashflow userData={userData} />
          </div>
        </div>
        <div className="row dashboard-row">
          <div className="col">
            <h3>Quick Transfer</h3>
            <QuickTransfer
              loading={beneficiariesLoading}
              beneficiaries={beneficiaries}
              formData={formData}
              handleInputChange={handleInputChange}
              handleTransfer={handleTransfer}
            />
          </div>
          <div className="col" style={{ maxHeight: 240 }}>
            <h3>Transactions</h3>
            <Transactions
              transactions={transactions}
              loading={transactionsLoading}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
