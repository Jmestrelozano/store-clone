import React from "react";
import "../scrollbar/scrollbar.css";
export const Scrollbar = ({ children }) => {
  return (
    <div id="wrapper">
      <div className="scrollbar" id="style-2">
        <div className="force-overflow">{children}</div>
      </div>
    </div>
  );
};
