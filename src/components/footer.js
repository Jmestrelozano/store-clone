import React from "react";
import { RedesSociales } from "./contentRedesSociales/redesSociales";
import { Dropdown } from "./dropdown/dropdown";

export const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="container">
        <div className="column-grid-four">
          <div className="logo">
            <div className="logo-img">
              <img
                src="https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/03/footer-logo-light.png"
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
            <RedesSociales />
          </div>
          <div className="stay-informacion">
            <h2>Stay informed</h2>

            <div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="far fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control caja-texto"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Your email"
                />
                <div className="input-group-prepend">
                  <button className="button" type="button" id="button-addon1">
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
      <div className="subFooter px-lg-3 py-3">
        <div className="d-sm-flex justify-content-between align-items-center mx-auto px-3">
          <div className="font-size-xs text-light opacity-50 text-center text-sm-left py-3">
            © All rights reserved. Made by{" "}
            <a
              className="text-light"
              href="https://createx.studio/"
              target="_blank"
              rel="noopener"
            >
              Create Jorge mestre lozano
            </a>
          </div>
          <div className="py-3">
            <ul style={{ textAlign: "end" }}>
              <li style={{ listStyle: "none" }}>
                <img
                  style={{ width: "50%" }}
                  src="https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/03/cards-alt.png"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
