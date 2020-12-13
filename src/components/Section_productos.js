import React, { useEffect, useState } from "react";
import { UseFetch } from "../api/useFetch";
import { CardContainer } from "./card/CardContainer";
import { Carrousel } from "./carrousel/Carrousel";

export const Section_productos = ({ TitleEncabezado }) => {
  const [GuardarResult,setGuardarResult]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = GuardarResult.slice(indexOfFirstPost, indexOfLastPost);
  const pages = Math.ceil(GuardarResult.length / postsPerPage);
  useEffect(() => {
    UseFetch(
      "https://node-express-store-2020.herokuapp.com/list/productos",
      "GET"
    ).then((result) => {
     
        let mitad1 = result.Productos.splice(
          0,
          result.Productos.length / 2
        );
      setTimeout(() => {
        setGuardarResult(mitad1)
      }, 0);
    });
  }, []);

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
        <div className="column-grid-four" style={{ columnGap: "1rem" }}>
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
