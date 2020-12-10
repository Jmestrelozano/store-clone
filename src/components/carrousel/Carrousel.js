import React, { useState, useEffect } from "react";

export const Carrousel = ({ pages = 4, setCurrentPage }) => {
  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div className="button-slide">
      <button
        className={`${currentButton === 1 ? "disabled" : ""} button-left`}
        onClick={(e) => {
          e.preventDefault();
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1));
        }}
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        className={`${
          currentButton === numberOfPages.length ? "disabled" : ""
        }button-right`}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};
