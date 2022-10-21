import React from "react";

const top = ({ topImage }) => {
  return (
    <div className="top-bg">
      <div className={topImage}>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default top;
