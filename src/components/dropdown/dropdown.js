import React from "react";
import "../dropdown/dropdown.css";
export const Dropdown = () => {
  const handleDropBtn = (e) => {
    e.preventDefault()
    const tooltip = document.querySelector(".tooltip");
    const menu_wrapper = document.querySelector(".wrapper");
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
  };

  const handleSetting_item = (e) => {
    e.preventDefault()
    const menu_bar = document.querySelector(".menu-bar");
    const setting_drop = document.querySelector(".setting-drop");
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
      setting_drop.style.display = "block";
    }, 100);
  };

  const handleHelp_item = (e) => {
    e.preventDefault()
    const menu_bar = document.querySelector(".menu-bar");
    const help_drop = document.querySelector(".help-drop");
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
      help_drop.style.display = "block";
    }, 100);
  };

  const handleSetting_btn = () => {
    const menu_bar = document.querySelector(".menu-bar");
    const setting_drop = document.querySelector(".setting-drop");
    menu_bar.style.marginLeft = "0px";
    setting_drop.style.display = "none";
  };

  const handleHelp_btn = () => {
    const help_drop = document.querySelector(".help-drop");
    const menu_bar = document.querySelector(".menu-bar");
    help_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
  };
  return (
    <div>
      <nav className="content-dropdown">
        <div onClick={handleDropBtn} className="drop-btn">
          <img src="https://demo.createx.studio/cartzilla/img/flags/en.png" alt="" />
         <span className="etiqueta-name">Eng / $</span> 
          <span className="fas fa-caret-down span"></span>
        </div>
        <div className="tooltip"></div>
        <div className="wrapper">
          <ul className="menu-bar">
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-home"></span>
                </div>
                Home{" "}
              </a>
            </li>
            <li onClick={handleSetting_item} className="setting-item">
              <a href="#">
                <div className="icon">
                  <span className="fas fa-cog"></span>
                </div>
                Settings & privacy <i className="fas fa-angle-right"></i>
              </a>
            </li>
            <li onClick={handleHelp_item} className="help-item">
              <a href="#">
                <div className="icon">
                  <span className="fas fa-question-circle"></span>
                </div>
                Help & support <i className="fas fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-user"></span>
                </div>
                About us{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-comment-alt"></span>
                </div>
                Feedback{" "}
              </a>
            </li>
          </ul>

          <ul className="setting-drop">
            <li onClick={handleSetting_btn} className="arrow back-setting-btn">
              <span className="fas fa-arrow-left"></span>Settings & privacy
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-user"></span>
                </div>
                Personal info{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-lock"></span>
                </div>
                Password{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-address-book"></span>
                </div>
                Activity log{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-globe-asia"></span>
                </div>
                Languages{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-sign-out-alt"></span>
                </div>
                Log out{" "}
              </a>
            </li>
          </ul>

          <ul className="help-drop">
            <li onClick={handleHelp_btn} className="arrow back-help-btn">
              <span className="fas fa-arrow-left"></span>Help & support
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-question-circle"></span>
                </div>
                Help centre{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-envelope"></span>
                </div>
                Support Inbox{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-comment-alt"></span>
                </div>
                Send feedback{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <span className="fas fa-exclamation-circle"></span>
                </div>
                Report problem{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
