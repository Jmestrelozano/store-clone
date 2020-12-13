import React from "react";

export const CardContainer = ({ data, styleHeader, styleBody }) => {

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
                      src={dato.image}
                      alt="NOT FOUND"
                    />
                  </div>
                  <div className={styleBody}>
                    <div className="title-productos">
                      <h6>{dato.title}</h6>
                    </div>
                    <div className="descripcion-productos">
                      <p>
                        {dato.description}<br />
                   
                      </p>
                    </div>
                    <div className="precio-productos">
                      <p>
                       {dato.precio} <span>$2.99</span>
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
