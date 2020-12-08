import React from "react";

export const CardContainer = ({ data, styleHeader, styleBody }) => {
  //    console.log(data)

  return (
    <>
      {data === undefined
        ? console.log("cargando")
        : data.map((dato, index) => {
            return (
              <div key={index} className="card">
                <div className="card-productos">
                  <div className={styleHeader}>
                    <img
                      src={`https://demo.createx.studio/cartzilla/${dato.image}`}
                      alt="NOT FOUND"
                    />
                  </div>
                  <div className={styleBody}>
                    <div className="title-productos">
                      <h6>Fruits and Vegetables</h6>
                    </div>
                    <div className="descripcion-productos">
                      <p>
                        Coconout, indonesia <br />
                        (Piece)
                      </p>
                    </div>
                    <div className="precio-productos">
                      <p>
                        $1.99 <span>$2.99</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};
