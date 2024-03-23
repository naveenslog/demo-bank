import React from "react";

const Beneficiaries = () => {
  const handleAddBeneficiary = () => {};

  return (
    <>
      <section className="py-12 py-sm-24 py-md-32">
        <div className="container">
          <div className="mw-2xl mx-auto mb-20 text-center mb-5">
            <h2 className="my-4">Beneficiaries</h2>
            <div className="d-flex justify-content-center align-items-center">
              <span className="mw-lg mx-auto text-secondary">
                A list of beneficiaries..
              </span>
              <div
                style={{
                  cursor: "pointer",
                  background: "rgba(0, 0, 0, 0.84)",
                  borderRadius: "5px",
                  color: "white",
                  padding: "7.5px 25px",
                }}
                onClick={handleAddBeneficiary}
              >
                Add New
              </div>
            </div>
          </div>
          <div className="d-flex">
            {[
              { account: "10890909", nickname: "Sumit Saurav" },
              { account: "23456788", nickname: "Ravi Kumar" },
              { account: "90738233", nickname: "Michael Jhonson" },
            ].map((item) => (
              <div className="row flex-grow-1 mx-4">
                <div
                  className="py-4 px-5 rounded-3 w-100"
                  style={{
                    background: "rgba(0, 0, 0, 0.84)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <h6 className="fs-7 text-white mb-1">{item?.nickname}</h6>
                  <span className="text-secondary">{item?.account}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Beneficiaries;
