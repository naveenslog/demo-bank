import React, { useState, useEffect } from "react";
import TitleWrapper from "../../components/shared/title-wrapper";
import DataTable from "./table";
import { authorizedGet } from "../../helpers/api/base";
import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
import * as FileSaver from "file-saver";

const Transactions = () => {
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

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const handleExportData = () => {
    const extractedTransactions = transactions.map(
      ({ id, transaction_type, amount, description, created_at }) => ({
        id,
        transaction_type,
        amount,
        description,
        created_at,
      })
    );
    const ws = XLSX.utils.json_to_sheet(extractedTransactions);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "transactions" + fileExtension);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <TitleWrapper title={"Transactions"} />
      <div className="container" style={{ padding: 16 }}>
        <div className="row" style={{ justifyContent: "flex-end" }}>
          <button
            className="btn btn-primary mb-3"
            style={{ width: 200, marginRight: 37 }}
            onClick={handleExportData}
          >
            Export Data
          </button>
        </div>
        <DataTable transactions={transactions} />
      </div>
    </>
  );
};

export default Transactions;
