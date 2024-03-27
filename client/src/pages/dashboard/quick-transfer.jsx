import React from "react";
import "./transfer.css";

const QuickTransfer = ({
  beneficiaries,
  loading,
  handleInputChange,
  formData,
  handleTransfer,
}) => {
  return loading ? (
    <>Loading...</>
  ) : (
    <div>
      <div className="form-group">
        <label className="quick-transfer-label" htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          className="form-control quick-transfer-input"
          id="amount"
          name="amount"
          placeholder="Enter amount"
          value={formData?.amount}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">
          Beneficiary (<a href="/beneficiaries">Add beneficiaries here</a>)
        </label>
        <select
          className="quick-transfer-select"
          defaultValue={formData?.beneficiary}
          onChange={handleInputChange}
          name={"beneficiary"}
        >
          <option value={null}>Select</option>
          {beneficiaries.map((item, index) => (
            <option value={item.id} key={index}>
              {item?.nickname}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary quick-transfer-button"
        onClick={handleTransfer}
      >
        Transfer
      </button>
    </div>
  );
};

export default QuickTransfer;
