import React from "react";
import TitleWrapper from "../../components/shared/title-wrapper";
import DataTable from "./table";

const Transactions = () => {
  const handleAddBeneficiary = () => { };

  return (
    <>
      <TitleWrapper title={"Transactions"} />
      <div className="container" style={{ padding: 16 }}>
        <div className="row" style={{ justifyContent: "flex-end" }}>
          <button className="btn btn-primary mb-3" style={{ width: 200, marginRight: 37 }} onClick={handleAddBeneficiary}>
            Export Data
          </button>
        </div>
        <DataTable/>
      </div>
    </>
  );
};

export default Transactions;
