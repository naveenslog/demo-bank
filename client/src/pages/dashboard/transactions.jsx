import React from "react";
import { formatDate } from "../../helpers/others";

const DataTable = ({ transactions, loading }) => {
  const getTableData = () => {
    return transactions.length === 0 ? (
      <p style={{ marginTop: "20px" }}>No Transaction yet!</p>
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

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="container table-area">
      <div className="row">
        <div className="col">
          <div
            className="table-responsive"
            style={{ maxHeight: "240px", overflow: "auto" }}
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
