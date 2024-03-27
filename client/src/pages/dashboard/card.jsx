// VisaCard.js
import React from "react";
import "./ATMCard.css"; // Make sure to create a VisaCard.css file for your styles

const VisaCard = ({ userData }) => {
  return (
    <div className="visa-card">
      <div className="card-content">
        <div className="card-check">
          <i className="bi bi-check-circle-fill"></i>
        </div>
        <div className="card-number">
          <span>**** **** **** {userData?.account_number}</span>
        </div>
        <div className="card-footer">
          <div className="">
            <span>CARD HOLDER</span>
            <div className="card-detail-item">{userData?.user?.username}</div>
          </div>
          <div className="card-details">
            <div className="expires">
              <span>Account Type</span>
              <div className="card-detail-item">{userData?.account_type}</div>
            </div>
            {/* <div className="cvv">
              <span>CVV</span>
              <div className="card-detail-item">826</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="card-logo">
        <img
          src="https://w7.pngwing.com/pngs/618/512/png-transparent-visa-logo-mastercard-credit-card-payment-visa-blue-company-text.png"
          alt="Visa"
          height="25px"
          width="55px"
        />
      </div>
    </div>
  );
};

export default VisaCard;
