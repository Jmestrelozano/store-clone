import React from "react";

export const Section_entrada = () => {
  return (
    <section style={{paddingTop:"5rem"}}>
      <div className="container">
        <h2 style={{textAlign:"center", fontWeight:"800"}}>How it works?</h2>

        <div className="content-entrada">
          <div className="card-entrada">
            <div className="card-number">
              <p>01</p>
            </div>
            <div className="card-contenido">
              <div className="">
                <div className="card_endtrada-icono">
                  <img src="https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.png" alt="NOT FOUND"/>
                </div>
                <div className="card_entrada-texto">
                  <p>You order your favorite products online</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-entrada">
            <div className="card-number">
            <p>02</p> 
            </div>
            <div className="card-contenido">
              <div className="card_endtrada-icono">
                <img src="https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/02.png" alt="NOT FOUND" />
              </div>
              <div className="card_entrada-texto">
                <p>A personal assistant collects the products from your list</p>
              </div>
            </div>
          </div>
          <div className="card-entrada">
            <div className="card-number">
            <p>03</p>
            </div>
            <div className="card-contenido">
              <div className="card_endtrada-icono">
              <img src="https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/03.png" alt="NOT FOUND" />
              </div>
              <div className="card_entrada-texto">
                <p>We deliver to the door at a time convenient for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
