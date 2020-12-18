import React from "react";
import { Link, useHistory } from "react-router-dom";

export const CardContainer = ({ index, children }) => {
  return (
    <>
      <div className="card column-grid-four">{children}</div>
    </>
  );
};
