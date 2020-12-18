import React, { useState, useEffect } from "react";
import { UseFetch } from "../api/useFetch";
import { Scrollbar } from "./scrollbar/Scrollbar";

export const Sidebar_Menu = () => {
  const [Menu, setMenu] = useState(undefined);
  let arrayMenuCategories = [];
  useEffect(() => {
    UseFetch(
      "https://node-express-store-2020.herokuapp.com/list/categorias",
      "GET"
    ).then((result) => {
      result.Categories.forEach((element, index, valor) => {
        if (index >= 14) {
          arrayMenuCategories.push(element);
          setTimeout(() => {
            setMenu(arrayMenuCategories);
          }, 0);
        }
      });
    });
  }, []);

  return (
    <>
      <Scrollbar>
        <div className="contenedor">
          <ul>
            {Menu === undefined
              ? console.log("cargando")
              : Menu.map((category, index) => {
                  return (
                    <li key={index}>
                      <div
                        className="column-grid-three"
                        style={{ alignItems: "center" }}
                      >
                        <i className={category.icono}></i>{" "}
                        <span style={{ width: "12rem", textAlignLast: "left" }}>
                          {category.title}
                        </span>
                        <div className="icono-down">
                          <span>
                            <i className="fas fa-arrow-down"></i>
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </Scrollbar>
    </>
  );
};
