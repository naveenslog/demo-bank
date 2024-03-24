import React from "react";

const styles = {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 24,
    fontWeight: "bolder",
    paddingLeft: 16,
}
const TitleWrapper = ({ title }) => {
    return (
        <div className="title-wrapper">
            <h1 style={styles}>{title}</h1>
            <hr/>
        </div>
    );
}

export default TitleWrapper;