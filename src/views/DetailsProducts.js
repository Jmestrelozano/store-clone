import { move } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseFetch } from "../api/useFetch";
import { Context } from "../hooks/UseContext";

export const DetailsProducts = () => {
  const [DetailsProducts, setDetailsProducts] = useState([]);
  const params = useParams();
  const { DatosInfoProductos } = useContext(Context);

  useEffect(() => {
    const finder = DatosInfoProductos.filter(
      (dato) => dato.description === params.name
    );

    setTimeout(() => {
      setDetailsProducts(finder);
    }, 0);
  }, []);

  const handleMoveImage = (e) => {
    const moveImage = document.getElementById("detailsProducts-img");

    const windowWidth = window.innerWidth / 3;
    const windowHeight = window.innerHeight / 3;
    const mouseX = e.nativeEvent.x / windowWidth;
    const mouseY = e.nativeEvent.y / windowHeight;

    moveImage.style.position = "relative";
    moveImage.style.left = mouseX + "rem";
    moveImage.style.top = mouseY + "rem";
  };

  return (
    <>
      {DetailsProducts === []
        ? console.log("cargando")
        : DetailsProducts.map((detalle, index) => {
            return (
              <div
                key={index}
                className="column-grid-two detailsProducts-content"
              >
                <div className="card">
                  <div className="card-header detailsProducts-contentImg">
                    <div className="detailsProducts-icon">
                      <i className="fas fa-search"></i>
                    </div>
                    <img
                      onMouseMove={handleMoveImage}
                      id="detailsProducts-img"
                      src={detalle.image}
                      alt="NOT FOUND"
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body detailsProducts-body">
                    <div className="card-info">
                      <h5>{detalle.title}</h5>

                      <h1>{detalle.description}</h1>
                      <span>{detalle.precio}</span>
                    </div>
                    <div className="card-compra"></div>
                    <div className="card-text">
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

      <h2 className="text-center mt-5 font-weight-bold">Related Products</h2>
    </>
  );
};
