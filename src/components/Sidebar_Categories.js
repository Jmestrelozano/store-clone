import React, { useState, useEffect, useContext } from "react";
import { UseFetch } from "../api/useFetch";
import { RedesSociales } from "./contentRedesSociales/redesSociales";
import { Scrollbar } from "./scrollbar/Scrollbar";

export const Sidebar_Categories = () => {
  const [Categories, setCategories] = useState(undefined);
  let arrayCategories = [];
  useEffect(() => {
    UseFetch(
      "https://node-express-store-2020.herokuapp.com/list/categorias",
      "GET"
    ).then((result) => {
      result.Categories.forEach((element, index, valor) => {
        if (index < 14) {
          arrayCategories.push(element);
          setTimeout(() => {
            setCategories(arrayCategories);
          }, 0);
        }
      });
    });
  }, []);

  return (
    <div>
      <Scrollbar>
        <div className="contenedor">
          <ul>
            {Categories === undefined
              ? console.log("cargando")
              : Categories.map((category, index) => {
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
      <div className="p-4 ">
        <div className="support">
          <div className="icon-support">
            <i className="fas fa-headphones"></i>
          </div>
          <div className="descripcion-support">
            <span>Support</span>
            <p>+1 (00) 33 169 7720</p>
          </div>
        </div>
        <div className="support mb-4">
          <div className="icon-support">
            <i className="far fa-envelope"></i>
          </div>
          <div className="descripcion-support">
            <span>Email</span>
            <p>customer@example.com</p>
          </div>
        </div>
        <RedesSociales
          colorTitulo="#4b566b"
          background="white"
          border="1px solid #e3e9ef"
          colorIcono="#4b566b"
        />
      </div>
    </div>
  );
};
