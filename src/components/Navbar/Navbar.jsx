import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "./img/LogoIcon.png";
import LogoText from "./img/LogoText.png";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar navbar-expand-lg fixed-top sticky-top" id="navbar">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src={LogoIcon} alt="" width={50} height={25} />
            <img
              className="mx-2"
              src={LogoText}
              alt=""
              width={100}
              height={25}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="#latestData" className="nav-link">
                  Latest
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/travel">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health and Fitness
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/homeDecor">
                      Home and Decor
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Books and Literature
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fashion and Style
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Movies and Entertainment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Trending
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Featured
                </a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link">
                  About Us
                </a>
              </li>
            </ul>
            <Link className="btn btn-outline-primary" to="/signup">
              Sign-Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
