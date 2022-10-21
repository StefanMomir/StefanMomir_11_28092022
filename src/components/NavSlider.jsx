import React from "react";
import ArrowRight from "../assets/right_arrow.svg";
import ArrowLeft from "../assets/left_arrow.svg";

const ArrowButton = ({ direction, change }) => {
  /* Change Slider Page Direction */
  return (
    <img
      onClick={direction}
      className={change === "right" ? "right" : "left"}
      alt="navigation"
      src={change === "right" ? ArrowRight : ArrowLeft}
    />
  );
};

export default ArrowButton;
