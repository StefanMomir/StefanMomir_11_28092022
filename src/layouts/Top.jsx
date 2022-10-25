import React from "react";

const Top = ({ topImage }) => {
  return (
    <div className="top-bg">
      <div className={topImage}>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Top;
