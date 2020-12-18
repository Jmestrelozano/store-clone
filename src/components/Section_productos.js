import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UseFetch } from "../api/useFetch";
import { Context } from "../hooks/UseContext";
import { Carrousel } from "./carrousel/Carrousel";

export const Section_productos = ({ TitleEncabezado }) => {
  const [GuardarResult, setGuardarResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = GuardarResult.slice(indexOfFirstPost, indexOfLastPost);
  const pages = Math.ceil(GuardarResult.length / postsPerPage);

  const { setDatosInfoProductos } = useContext(Context);
  useEffect(() => {
    UseFetch(
      "https://node-express-store-2020.herokuapp.com/list/productos",
      "GET"
    ).then((result) => {
      let mitad1 = result.Productos.splice(0, result.Productos.length / 2);
      setTimeout(() => {
        setDatosInfoProductos(mitad1);
        setGuardarResult(mitad1);
      }, 0);
    });
  }, []);

  const history = useHistory();

  const handleIdProducto = ({ target }) => {
    history.push(
      `/detallesProducto/${target.parentElement.parentElement.children[1].children[1].children[0].textContent}`
    );
  };

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

        <div className=" column-grid-four" style={{ columnGap: "1rem" }}>
          {currentPosts === undefined
            ? console.log("cargando")
            : currentPosts.map((dato, index) => {
                return (
                  <div key={index} className="card">
                    <div className="card-productos">
                      <div onClick={handleIdProducto} className="card-header">
                        <img src={dato.image} alt="NOT FOUND" />
                      </div>
                      <div className="card-body" style={{ height: "6rem" }}>
                        <div className="title-productos">
                          <h6>{dato.title}</h6>
                        </div>
                        <div className="descripcion-productos">
                          <p>
                            {dato.description}
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="column-grid-two footer-productos">
                        <div className="precio-productos">
                          <p>{dato.precio}</p>
                        </div>
                        <div className="buttonCarrito-productos">
                          <button>
                            <span>+</span>
                            <i className="fas fa-shopping-cart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};
