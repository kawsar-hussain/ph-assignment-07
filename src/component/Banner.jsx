import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="banner">
      <div className="banner1">
        <p className="banner__title">In-Progress</p>
        <p className="count">{inProgressCount}</p>
      </div>
      <div className="banner2">
        <p className="banner__title">Resolved</p>
        <p className="count">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
