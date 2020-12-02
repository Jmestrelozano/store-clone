import React from "react";

export const Section_productos = ({TitleEncabezado}) => {
  return (
    <section style={{paddingTop:"5rem"}}>
      <div className="container">
        <div className="encabezado-productos">
          <h3>{TitleEncabezado}</h3>
          <div className="button-infoProductos">
          <a>More products </a>
          <i className="fas fa-angle-right"></i>
          </div>
      
        </div>
        <div className="line-productos"></div>
        <div className=""></div>
        <div className="card" style={{width:"25%"}}>
            <div className="card-productos">
            <div className="card-img">
            <img src="https://demo.createx.studio/cartzilla/img/grocery/catalog/01.jpg" alt="NOT FOUND"/>
            </div>
            <div className="card-texto">
                <div className="title-productos">
                    <h6>Fruits and Vegetables</h6>
                </div>
                <div className="descripcion-productos">
                    <p>Coconout, indonesia <br/>(Piece)</p>

                </div>
                <div className="precio-productos">
                    <p>$1.99 <span>$2.99</span></p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};
