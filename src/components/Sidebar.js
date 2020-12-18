import React, { useState, useEffect } from "react";
import { RedesSociales } from "./contentRedesSociales/redesSociales";
import { Sidebar_Categories } from "./Sidebar_Categories";
import { Sidebar_Menu } from "./Sidebar_Menu";

export const Sidebar = () => {
  const [IdTab, setIdTab] = useState(["Tab1"]);
  const [Tab1, setTab1] = useState([""]);
  const [Tab2, setTab2] = useState([""]);

  const openCity = () => {
    var x = document.getElementsByClassName("Tabs");
    var z = document.getElementsByClassName("sidebar-encabezado-link");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    let Tabs = document.getElementById(IdTab);
    let Tabsecond = document.querySelector(".content-left");
    let Tabfirst = document.querySelector(".content-right");
    if (Tabs || Tabfirst || Tabsecond) {
      Tabs.style.display = "block";
      Tabfirst.style.display = `${Tab1}`;
      Tabsecond.style.display = `${Tab2}`;
    }
  };

  useEffect(() => {
    openCity();
  }, [openCity]);

  return (
    <aside style={{ paddingTop: "5rem" }} className="sidebar sidebar-container">
      <div className="sidebar-context">
        <div className="sidebar-encabezado">
          <ul className="column-grid-two">
            <li
              onClick={(e) => {
                setIdTab(
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.children[1].children[0].id
                );
                setTab2("none");
                setTab1("block");
              }}
            >
              <a className="sidebar-link">Categories</a>
              <p className="content-right"></p>
            </li>
            <li
              onClick={(e) => {
                setIdTab(
                  e.target.parentElement.parentElement.parentElement
                    .parentElement.children[1].children[1].id
                );

                setTab2("block");
                setTab1("none");
              }}
            >
              <a className="sidebar-link">Menu</a>
              <p className="content-left"></p>
            </li>
          </ul>
        </div>

        <div className="sidebar-tabs">
          <div id="Tab1" className="Tabs" style={{ display: "block" }}>
            <Sidebar_Categories />
          </div>

          <div id="Tab2" className="Tabs" style={{ display: "none" }}>
            <Sidebar_Menu />
          </div>

          <div className="p-4 ">
            <div className="support">
              <div className="icon-support">
                <i className="fas fa-headphones"></i>
              </div>
              <div className="descripcion-support">
                <span>Support</span>
                <p>+1 (00) 33 169 7720</p>
              </div>
            </div>
            <div className="support mb-4">
              <div className="icon-support">
                <i className="far fa-envelope"></i>
              </div>
              <div className="descripcion-support">
                <span>Email</span>
                <p>customer@example.com</p>
              </div>
            </div>
            <RedesSociales
              colorTitulo="#4b566b"
              background="white"
              border="1px solid #e3e9ef"
              colorIcono="#4b566b"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
