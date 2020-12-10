import React, { useEffect, useState } from "react";
import { UseFetch } from "../api/useFetch";
import { CardContainer } from "./card/CardContainer";
import { Carrousel } from "./carrousel/Carrousel";

export const Section_productos = ({ TitleEncabezado }) => {
  const resultado = JSON.parse(localStorage.getItem("Productos"));
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resultado.slice(indexOfFirstPost, indexOfLastPost);
  const pages = Math.ceil(resultado.length / postsPerPage);

  UseFetch(
    "https://node-express-store-2020.herokuapp.com/list/Productos",
    "GET"
  ).then((result) => {
    let mitad1 = result.data.Productos.splice(
      0,
      result.data.Productos.length / 2
    );
   localStorage.setItem("Productos", JSON.stringify(mitad1));
  });

  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="container">
        <div className="encabezado-productos">
          <h3>{TitleEncabezado}</h3>
          <div className="button-infoProductos">
            <a>More products </a>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
        <div className="line-productos"></div>
        <Carrousel pages={pages} setCurrentPage={setCurrentPage} />
        <div className="column-grid-four" style={{columnGap:"1rem"}}>
          <CardContainer
            data={currentPosts}
            styleBody="card-body"
            styleHeader="card-header"
          />
        </div>
      </div>
    </section>
  );
};
