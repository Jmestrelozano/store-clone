import React from "react";

export const Section_comentarios = () => {
  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="container-comentarios">
        <div className=" container-section-comentarios">
          <h2>Customer reviews</h2>

          <div className="card container-comment" style={{border:"none"}}>
            <div className="estrellas-icon">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            </div>
            <div className="comentarios-texto">
              <p>
                Lorem ipsum dolor sit amet, quia non consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua porro quisquam est.
              </p>
            </div>
            <div className="footer-comentarios">
              <div className="profile">
                <img
                  src="https://demo.createx.studio/cartzilla/img/testimonials/03.jpg"
                  alt="NOT FOUND"
                />
              </div>
              <div className="info">
                <p>Mark vaidlsos</p>
                <p>Jan 22, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
