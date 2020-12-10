import React from "react";
import { Dropdown } from "./dropdown/dropdown";

export const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="container">
        <div className="column-grid-four">
          <div className="logo">
            <div className="logo-img">
              <img
                src="https://demo.createx.studio/cartzilla/img/footer-logo-light.png"
                alt="NOT FOUND"
              />
            </div>
            <div className="logo-idioma">
              <Dropdown />
            </div>
          </div>
          <div className="info-productos">
            <h2>Product catalog</h2>
            <ul>
              <li>Producto #1</li>
              <li>Producto #2</li>
              <li>Producto #3</li>
            </ul>
          </div>
          <div className="info-compañia">
            <div className="list-compañia">
              <h2>Company</h2>
              <ul>
                <li>Producto #1</li>
                <li>Producto #2</li>
                <li>Producto #3</li>
              </ul>
            </div>
            <div className="redes-compañia">
              <h2>Follow us</h2>

              <ul className="column-grid-four iconos">
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
                <li>
                  <i class="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class="fab fa-youtube"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="stay-informacion">
            <h2>Stay informed</h2>

            <div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="far fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control caja-texto"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Your email"
                />
                <div class="input-group-prepend">
                  <button class="button" type="button" id="button-addon1">
                    Suscribe*
                  </button>
                </div>
              </div>
            </div>
            <small>
              *Subscribe to our newsletter to receive early discount offers,
              updates and new products info.
            </small>
          </div>
        </div>
      </div>
      <div class="subFooter px-lg-3 py-3">
        <div class="d-sm-flex justify-content-between align-items-center mx-auto px-3">
          <div class="font-size-xs text-light opacity-50 text-center text-sm-left py-3">
            © All rights reserved. Made by{" "}
            <a
              class="text-light"
              href="https://createx.studio/"
              target="_blank"
              rel="noopener"
            >
              Create Jorge mestre lozano
            </a>
          </div>
          <div class="py-3">
            <ul style={{textAlign:"end"}}>
              <li style={{listStyle:"none"}}>
                <img style={{width:"50%"}} src="https://demo.createx.studio/cartzilla/img/cards-alt.png" />
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
