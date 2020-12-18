import React from "react";
import { Link } from "react-router-dom";
import "../modal/modal.css";
export const Modal = ({ title, children }) => {
  const handleVisiblePassword = () => {
    // nota mejorar
    const tipo = document.getElementById("exampleInputPassword1");
    const iconEyes = document.getElementById("iconEyes");
    if (tipo.type === "password") {
      tipo.type = "text";
      iconEyes.style.color = "#fe696a";
    } else {
      tipo.type = "password";
      iconEyes.style.color = "#7d879c";
    }
  };

  return (
    <>
      {/* <a href="#openModal-about">Modal</a> */}

      <div id="openModal-about" className="modalDialog">
        <div className="contenedor-modalDialog">
          <div className="modalDialog-header">
            <div>
              <h5>Login to your account</h5>
              <a href="#close" title="Close" className="close">
                X
              </a>
            </div>
          </div>
          <div className="modalDialog-form">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group modalDialog-VerifyPasswordIcon ">
                <label htmlFor="exampleInputPassword1">Password</label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text " id="basic-addon2">
                      <i
                        id="iconEyes"
                        onClick={handleVisiblePassword}
                        className="far fa-eye"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="modalDialog-footer">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <div>
                  <Link to="/account/resetPassword">Lost your password?</Link>
                </div>
              </div>
              <button type="submit" className="modalDialog-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
