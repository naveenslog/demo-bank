import React from "react";

const tableData = [
    {
        transaction_id: "TXN123456",
        date: "2024-03-24",
        description: "Grocery Store",
        type: "Debit",
        amount: "-$85.50",
    },
    {
        transaction_id: "TXN123457",
        date: "2024-03-23",
        description: "Salary",
        type: "Credit",
        amount: "+$2,500.00",
    },
    {
        transaction_id: "TXN123458",
        date: "2024-03-22",
        description: "Gym Membership",
        type: "Debit",
        amount: "-$59.99",
    },
    {
        transaction_id: "TXN123459",
        date: "2024-03-21",
        description: "Utility Bill",
        type: "Debit",
        amount: "-$125.75",
    },
    {
        transaction_id: "TXN123460",
        date: "2024-03-20",
        description: "Dining Out",
        type: "Debit",
        amount: "-$48.20",
    },
    {
        transaction_id: "TXN123461",
        date: "2024-03-19",
        description: "Online Subscription",
        type: "Debit",
        amount: "-$12.99",
    },
    {
        transaction_id: "TXN123462",
        date: "2024-03-18",
        description: "Refund - Shoes",
        type: "Credit",
        amount: "+$80.00",
    },
    {
        transaction_id: "TXN123463",
        date: "2024-03-17",
        description: "Car Loan Repayment",
        type: "Debit",
        amount: "-$250.00",
    },
    {
        transaction_id: "TXN123464",
        date: "2024-03-16",
        description: "Interest Received",
        type: "Credit",
        amount: "+$5.60",
    },
    {
        transaction_id: "TXN123465",
        date: "2024-03-15",
        description: "ATM Withdrawal",
        type: "Debit",
        amount: "-$200.00",
    },
];


const DataTable = (props) => {
    const getTableData = () => {
        return tableData.map((i, index) => (
            <tr key={i.transaction_id}>
                <td>{i.date}</td>
                <td>{i.description}</td>
                <td>{i.type}</td>
                <td>{i.amount}</td>
            </tr>
        ));
    };

    return (
        <div className="container table-area" >
            <div className="row">
                <div className="col">
                    <div className="table-responsive" style={{ maxHeight: "240px", overflow: "auto" }}>
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
                                <tbody id="tableBody">
                                    {getTableData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
