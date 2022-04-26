import React from "react";

const DateTimeDisplay = ({ value, type, isDanger, className, isBlurred }) => {
  return (
    <div className={`${className} ${isDanger ? "countdown danger" : "countdown"}`}>
      <p className={isBlurred ? "blur" : ""}>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
