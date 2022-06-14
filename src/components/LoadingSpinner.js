import React from "react";
import "../styles/global.css";

const LoadingSpinner = () => {
  return (
    <div className={"loading"}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
