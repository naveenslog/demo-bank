import React from "react";

const BeneficiariesCards = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div
              className="py-4 px-5 rounded-3 w-100"
              style={{
                background: "rgba(0, 0, 0, 0.84)",
                backdropFilter: "blur(4px)",
              }}
            >
              <h6 className="fs-7 text-white mb-1">{item?.nickname}</h6>
              <span className="text-secondary">
                Account Number: {item?.account?.account_number}
              </span>
              <h6 className="text-secondary">
                Account Name: {item?.account?.user?.username}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeneficiariesCards;
