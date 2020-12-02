import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow p-2 pt-3 pb-3 bg-white rounded">
      <div className="container-fluid">
     <img style={{height:"2rem"}} src="https://demo.createx.studio/cartzilla/img/logo-dark.png" alt=""/>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="column-grid-four">
          <div className="navbar-input">
          <div className="input-group">
          
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Search for products"
          />
       
            <div className="input-group-append">
              <select className="custom-select" id="inputGroupSelect02">
                <option value>All Categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            
          </div>
        </div>
        </div>

        <div className="navbar-icon-heart">
          <span className="material-icons">favorite_border</span>
        </div>

        <div className="navbar-account">
          <span className="material-icons">person_outline</span>
          <p>
            Hello, Sing in <br /> <span>My Account</span>{" "}
          </p>
        </div>
        <div className="navbar-addCart">
          <div className="add-cart">
          <span className="material-icons">add_shopping_cart</span>
          </div>
          <div>
           <p> My Cart</p> 
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                $25.00
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </nav>
  );
};
