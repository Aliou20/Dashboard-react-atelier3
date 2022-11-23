import "./Banner.css";
import React from "react";

function Banner({children}) {
  return (
    <div className="banner">
      {children}
    </div>
  );
};

export default Banner;
