import React from "react";
import { formatDate } from "../../helpers/others";

const DataTable = ({ transactions }) => {
  const getTableData = () => {
    return transactions.length === 0 ? (
      <tr>
        <td>No Transaction yet! </td>
      </tr>
    ) : (
      transactions.map((i, index) => (
        <tr key={index}>
          <td>{formatDate(i?.date)}</td>
          <td>{i?.description}</td>
          <td>{i?.transaction_type}</td>
          <td>{i?.amount}</td>
        </tr>
      ))
    );
  };

  return (
    <div className="container table-area">
      <div className="row">
        <div className="col">
          <div
            className="table-responsive"
            style={{ maxHeight: "70vh", overflow: "auto" }}
          >
            <div className="scrollable-table">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody id="tableBody">{getTableData()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
