import React from "react";

const BeneficiariesCards = ({ data }) => {

    return (
        <div className="d-flex">
            {data.map((item) => (
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
    )
}

export default BeneficiariesCards;