import React, { useState } from "react";
import { Carrousel } from "./Carrousel";

export const CarrouselSection = () => {
  const images = ["hola", "sirves"];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost);
  const pages = Math.ceil(images.length / postsPerPage);

  return (
    <section>
      <div
        className="card carrousel-sidebar"
        style={{ backgroundColor: "#59c879" }}
      >
        <div className="container">
          <div style={{ paddingTop:"2rem", paddingRight:"4rem", paddingLeft:"4rem" ,paddingBottom:"2rem" }}>
            <div className="carrousel-container" >
              <div className="carrousel-texto">
                <h1>Fresh Food a Click Aways</h1>
                <p>
                  Order any goods from our store online and we deliver them to
                  your door at a time convenient for you.
                </p>
                <p className="span">On the go? Try our mobile app</p>

                <div className="content-redes">
                  <div className="redes">
                    <div className="redes-icono">
                      <i className="fab fa-apple"></i>
                    </div>
                    <div className="redes-texto">
                      <p>Download on the</p>
                      <span>app store</span>
                    </div>
                  </div>
                  <div className="redes">
                    <div className="redes-icono">
                      {" "}
                      <i className="fab fa-google-play"></i>
                    </div>
                    <div className="redes-texto">
                      <p>Download on the</p>
                      <span>Google play</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carrousel-img">
                <img
                  src="https://demo.createx.studio/cartzilla/img/grocery/slider/slide01.jpg"
                  alt="Imagen no cargada"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
