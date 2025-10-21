import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <img src="/lowgo.svg" alt="logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link" onClick={() => showMenu(false)}>
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={() => showMenu(false)}>
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link" onClick={() => showMenu(false)}>
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link" onClick={() => showMenu(false)}>
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link" onClick={() => showMenu(false)}>
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={() => showMenu(false)}>
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2025 </span>
        </div>
      </aside>

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
