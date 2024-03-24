import React from "react";
import "./transfer.css";

const QuickTransfer = () => {

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control" id="amount" aria-describedby="amountHelp" placeholder="Enter amount" />
                </div>
                <div className="form-group">
                    <label htmlFor="accountNumber">Beneficiary (<a href="/beneficiaries">Add beneficiaries here</a>)</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Transfer</button>
            </form>
        </div>
    )
}

export default QuickTransfer;